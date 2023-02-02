export interface UserIpAddressInfo {
  ip: string;
  location: {
    country: string;
    region: string;
    timezone: string;
  };
}
