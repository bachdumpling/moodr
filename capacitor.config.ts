import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "moodir-hackathon",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: "http://10.100.0.236:3001",
    cleartext: true,
  },
};

export default config;
