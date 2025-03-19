import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import istanbul from "vite-plugin-istanbul";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      include: "src/*",
      extension: [".ts", ".tsx"],
    }),
    {
      name: "export-server-info",
      configureServer(_server) {
        // server.httpServer?.once("listening", () => {
        //   process.env.CYPRESS_BASE_URL = `http://localhost:${
        //     (server.httpServer?.address() as AddressInfo).port
        //   }`;
        // });
      },
    },
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        changeOrigin: true,
      },
    },
  },
});
