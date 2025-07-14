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

type NavigatorWithConnection = Navigator & {
  connection?: NavigatorConnection;
  mozConnection?: NavigatorConnection;
  webkitConnection?: NavigatorConnection;
};

type NavigatorConnection = {
  effectiveType?: string;
  downlink?: number;
  saveData?: boolean;
  addEventListener?: (type: string, listener: () => void) => void;
  removeEventListener?: (type: string, listener: () => void) => void;
};

const useNetworkInfo = () => {
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>(defaultNetwork);

  useEffect(() => {
    const nav = navigator as NavigatorWithConnection;
    const connection =
      nav.connection || nav.mozConnection || nav.webkitConnection;

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

    update();
    connection.addEventListener?.("change", update);

    return () => {
      connection.removeEventListener?.("change", update);
    };
  }, []);

  return networkInfo;
};

export default useNetworkInfo;
