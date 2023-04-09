import React from 'react'
import TopBanner from '../components/TopBanner'
import FDANavbar from '../components/FDANavbar'
import { useNavigate } from "react-router-dom";

const FDAHome = () => {
  const navigate = useNavigate();
	const handleLogout = () => {
		navigate("/");
	};
	return (
		<div>
			<TopBanner/>
			<FDANavbar onLogout = {handleLogout}/>
		</div>
	)
}

export default FDAHome
