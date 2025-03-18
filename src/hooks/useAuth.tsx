import { useState, useEffect } from "react";

interface UserEntity {
  id: string;
  email: string;
  role: RoleEnum;
}

enum RoleEnum {
  ADMIN = "ADMIN",
  USER = "USER",
  ANONYMOUS = "ANONYMOUS",
}

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserEntity | null>(null);

  const checkLoginStatus = async () => {
    try {
      const response = await fetch("/api/me", {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const userData: UserEntity = await response.json();
        setUser(userData);
        if (userData.role === RoleEnum.ANONYMOUS) {
          setIsLoggedIn(false);
        } else {
          setIsLoggedIn(true);
        }
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking login status:", error);
      setIsLoggedIn(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        await checkLoginStatus();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (response.ok) {
        await checkLoginStatus();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Logout error:", error);
      return false;
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return { isLoggedIn, user, logout, login };
};

export default useAuth;
