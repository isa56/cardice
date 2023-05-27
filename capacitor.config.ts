import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "ionic.cardice",
  appName: "cardice",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
