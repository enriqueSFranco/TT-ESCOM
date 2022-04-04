import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { motion } from "framer-motion/dist/framer-motion";
import CardExpand from "./CardExpand";
import CardNormal from "./CardNormal";

const CardCompany = ({ id,name, webSite, logo, banner, mision, vision }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useFetch("/images/CompanyLogo/"+id);
  if (!data) return null;
  let company=data;
  
  console.log(company);
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
