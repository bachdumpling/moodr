import { CapacitorConfig } from "@capacitor/cli";
const localIp = "192.168.1.167";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "moodir-hackathon",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    url: `http://${localIp}:3001`,
    cleartext: true,
  },
};

export default config;
