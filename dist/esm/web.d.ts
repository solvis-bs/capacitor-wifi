import { WebPlugin } from '@capacitor/core';
import { WifiPlugin, IWifiNetwork } from './definitions';
export declare class WifiWeb extends WebPlugin implements WifiPlugin {
    constructor();
    scan(): Promise<{
        scan: IWifiNetwork[];
    }>;
    connect(_options: {
        ssid: string;
        password?: string;
        authType?: string;
    }): Promise<{
        ssid: string;
    }>;
    connectPrefix(_options: {
        ssid: string;
        password?: string;
    }): Promise<{
        ssid: string;
    }>;
    getConnectedSSID(): Promise<{
        ssid: string;
    }>;
    getWifiIP(): Promise<{
        ip: string;
    }>;
}
declare const Wifi: WifiWeb;
export { Wifi };
