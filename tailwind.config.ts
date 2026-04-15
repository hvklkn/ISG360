import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#0c1726",
        },
      },
      boxShadow: {
        panel: "0 20px 60px rgba(15, 23, 42, 0.10)",
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(circle at top left, rgba(14, 165, 233, 0.18), transparent 28%), radial-gradient(circle at top right, rgba(34, 197, 94, 0.14), transparent 24%), linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(241, 245, 249, 0.96))",
      },
    },
  },
  plugins: [],
};

export default config;
