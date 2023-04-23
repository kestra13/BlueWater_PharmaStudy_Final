import React from 'react';
import Patients_Display from '../../components/Patients_Display_Bavaria';
import { useNavigate } from "react-router-dom";

const Study = () => {
	return (
		<div>
			<div style={{textAlign: "left", fontSize: "12px"}}>
			<h1>Ongoing Study: Study_name</h1>
			<h1>Shipment History: [50] drug_name vs [50] Placebo Shipment Date</h1>
			</div>


          <Patients_Display />
		</div>
	)
}

export default Study