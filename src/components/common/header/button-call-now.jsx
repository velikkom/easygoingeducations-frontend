import { config } from "@/helpers/config";
import React from "react";
// import { Button } from "react-bootstrap";
import { Button } from "primereact/button";
export const ButtonCallNow = () => {
	return (
		<a href={config.contact.info.phone1.link} >

			 <Button 
                label="  CALL NOW" 
                icon="pi pi-phone" 
                className="btn btn-outline-primary"                
                iconPos="left"
            />
		</a>
	);
};
