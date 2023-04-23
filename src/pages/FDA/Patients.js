import React from 'react'
import { useNavigate } from "react-router-dom";
import PatientList from "../../components/PatientList_FDA";

const Patients = () => {
	return (
		<div>
			<div>
				<PatientList/>
			</div>

			<div>
			</div>
		</div>
	)
}

export default Patients 
