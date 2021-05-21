import { WebPlugin } from "@capacitor/core";
import { WifiPlugin, IWifiNetwork } from "./definitions";

export class WifiWeb extends WebPlugin implements WifiPlugin {
  constructor() {
    super({
      name: "Wifi",
      platforms: ["web"],
    });
  }

  async scan(): Promise<{ scan: IWifiNetwork[] }> {
    return { scan: [] };
  }
  async connect(_options: {
    ssid: string;
    password?: string;
    authType?: string;
  }): Promise<{ ssid: string }> {
    return { ssid: "" };
  }
  async disconnect(): Promise<void> {
    return;
  }
  async connectPrefix(_options: {
    ssid: string;
    password?: string;
  }): Promise<{ ssid: string }> {
    return { ssid: "" };
  }
  async getConnectedSSID(): Promise<{ ssid: string }> {
    return { ssid: "" };
  }
  async getWifiIP(): Promise<{ ip: string }> {
    return { ip: "" };
  }
}
