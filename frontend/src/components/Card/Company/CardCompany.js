import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { AnimateSharedLayout } from "framer-motion";
import CardExpand from "./CardExpand";
import CardNormal from "./CardNormal";

const CardCompany = ({ id,name, webSite, logo, banner, mision, vision }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useFetch("/images/CompanyLogo/"+id+"/");
  
  if (!data) return null;  
  console.log(data[0].t300_id_company);

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
