import { useEffect, useState } from "react";

type Coordinates = {
  latitude: number;
  longitude: number;
};

type GeoState = {
  location: Coordinates | null;
  country: string;
  loading: boolean;
  error: string | null;
};

const DEFAULT_COUNTRY = "India";

const useGeolocation = (): GeoState => {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [country, setCountry] = useState<string>(DEFAULT_COUNTRY);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryFromIP = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        if (data.country_name) {
          setCountry(data.country_name);
          if (data.latitude && data.longitude) {
            setLocation({
              latitude: data.latitude,
              longitude: data.longitude,
            });
          }
        } else {
          setCountry(DEFAULT_COUNTRY);
        }
      } catch (err) {
        console.error("IP-based geolocation failed:", err);
        setError("Failed to fetch location from IP.");
        setCountry(DEFAULT_COUNTRY);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryFromIP();
  }, []);

  return { location, country, loading, error };
};

export default useGeolocation;
