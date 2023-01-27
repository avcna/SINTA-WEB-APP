import NavbarAdm from "../components/NavbarAdm";
import { useEffect } from "react";

const Premium = () => {
  useEffect(() => {
    const initialValue = document.body.style.zoom;
    document.body.style.zoom = "90%";
    return () => {
      document.body.style.zoom = initialValue;
    };
  }, []);

  return (
    <>
      <NavbarAdm />
    </>
  );
};

export default Premium;
