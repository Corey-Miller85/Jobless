import React from "react";
import "./Card.css";
export default function Card(props) {
	return (
		<div className='Card'>
			<h3>{props.data.title}</h3>
			<h5>{props.data.companyName}</h5>
			<p>
				{props.data.location.city}, {props.data.location.state}
			</p>
			<p>{props.data.postBody}</p>
		</div>
	);
}
