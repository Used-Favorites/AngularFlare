import { execSync } from "child_process";
import type { CapacitorConfig } from "@capacitor/cli";

import os from 'os';

const getIPAddress = (): string => {
  try {
    let command = "ipconfig getifaddr en0";
    if (os.platform() === 'win32') {
      command = "ipconfig | findstr /R /C:\"IPv4 Address\"";
    }
    const ipAddress = execSync(command).toString().trim();
    return ipAddress;
  } catch (error) {
    console.error("Erro ao obter o endereço IP:", error);
    return "";
  }
};

const config: CapacitorConfig = {
  appId: "com.angular.usedfavorites",
  appName: "angularflare",
  webDir: "dist/angularflare/browser",
  bundledWebRuntime: false,
  server: {
    url: `http://${getIPAddress()}:4200`,
    cleartext: true,
  },
};

export default config;
