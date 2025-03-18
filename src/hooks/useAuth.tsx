import { useState, useEffect } from "react";

interface UserEntity {
  id: string;
  email: string;
  role: UserRole;
}

interface UserRole {
  ADMIN: "ADMIN";
  USER: "USER";
}

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<UserEntity | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch("/api/me", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const userData: UserEntity = await response.json();
          setUser(userData);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  return { isLoggedIn, user };
};

export default useAuth;
