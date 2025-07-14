import { useEffect, useState } from "react";

type NetworkInfo = {
  effectiveType: string;
  downlink: number;
  saveData: boolean;
};

const defaultNetwork: NetworkInfo = {
  effectiveType: "unknown",
  downlink: 0,
  saveData: false,
};

const useNetworkInfo = () => {
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>(defaultNetwork);

  useEffect(() => {
    const connection =
      (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection;

    if (!connection || typeof connection !== "object") {
      return;
    }

    const update = () => {
      setNetworkInfo({
        effectiveType: connection.effectiveType ?? "unknown",
        downlink:
          typeof connection.downlink === "number" ? connection.downlink : 0,
        saveData: !!connection.saveData,
      });
    };

    update(); // Initial load
    connection.addEventListener?.("change", update);

    return () => {
      connection.removeEventListener?.("change", update);
    };
  }, []);

  return networkInfo;
};

export default useNetworkInfo;
