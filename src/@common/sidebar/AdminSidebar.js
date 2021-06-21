import React from "react";
import { Link } from 'react-router-dom';
import "../../stylesheets/components/Sidebar.css";

const AdminSidebar = () =>{
	return(
		<div className="buttons">

			{/* <a className="button-item" id="button-item-top">Profile</a>
			<a className="button-item">Assign Roles</a> */}

			<Link className="button-item" id="button-item-top" to="/account/profile">
			<a className="button-item-a">Profile</a>
			</Link>

			<Link className="button-item" to="/account/assign">
				<a className="button-item-a">Assign Roles</a>

			</Link>
            
			<Link className="button-item" to="/account/books">
            	<a className="button-item-a">Books</a>
			</Link>

			<Link className="button-item" to="/account/publications">
            	<a className="button-item-a">Publications</a>
			</Link>

			<Link className="button-item" to="/account/activity-log">
				<a className="button-item-a">Activity Log</a>
			</Link>
			
			<Link className="button-item" to="/account/summary-reports">
				<a className="button-item-a" id="button-item-bottom">Summary Reports</a>
			</Link>
            
		</div>
	);
}


export default AdminSidebar;