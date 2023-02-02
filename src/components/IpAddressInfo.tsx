import { useEffect, useState } from "react";
import { UserIpAddressInfo } from "../models/UserIpAddressInfo";
import { getIpAddressInfo } from "../services/IpAddressService";
import "./IpAddressInfo.css";

const IpAddressInfo = () => {
  const [ipTracker, setIpTracker] = useState<UserIpAddressInfo>();
  useEffect(() => {
    getIpAddressInfo().then((res) => setIpTracker(res));
  });
  console.log(ipTracker);
  return (
    <div className="IpAddressInfo">
      <h5>IP Address</h5>
      <p>{ipTracker?.ip}</p>
      <h5>Location</h5>
      <p>{ipTracker?.location.region}</p>
      <h5>TimeZone</h5>
      <p>{ipTracker?.location.timezone}</p>
      <h5>ISP</h5>
      <p></p>
    </div>
  );
};

export default IpAddressInfo;
