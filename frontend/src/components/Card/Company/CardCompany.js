import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import CardExpand from "./CardExpand";
import CardNormal from "./CardNormal";

const CardCompany = ({ name, webSite, logo, banner, mision, vision }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimateSharedLayout>
        {isOpen ? (
          <CardExpand 
            setIsOpen={setIsOpen} 
            mision={mision} 
            vision={vision} 
          />
        ) : (
          <CardNormal 
            name={name} 
            webSite={webSite}
            logo={logo}
            setIsOpen={setIsOpen} />
        )}
      </AnimateSharedLayout>
    </>
  );
};

export default CardCompany;
