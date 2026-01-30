import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function useLastRoute() {
  const location = useLocation();
  const lastRoute = useRef("/");

  useEffect(() => {
    if (location.pathname !== lastRoute.current) {
      lastRoute.current = location.pathname;
    }
  }, [location.pathname]);

  return lastRoute.current;
}
