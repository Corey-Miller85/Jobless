import React from "react";
import { Router, Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
	return (
		<div className='Header'>
			<h1 className='logo'>Logo</h1>
			<h3>Home</h3>
			<h3>About</h3>
			<h3>Contact</h3>
			<input type='text' placeholder='search...' className='search-bar' />
		</div>
	);
}
