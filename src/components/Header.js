import { PropaneSharp } from "@mui/icons-material";
import React from "react";
import SearchBar from "./SBar";
import { useState } from 'react'
// import CreateKeyboard from "./CreateKeyboard";

//constants are at the bottom

const Header = ({
	setShowForm,
	setShowBuilds,
	showBuilds,
	showForm
}) => {

	let[showSB, setShowSB] = useState(true)

	return (
		<div className="showWrapper">
			<header className='mb-auto'>
				<div>
					<h2 className='text-primary nav nav-masthead justify-content-center float-md'>
								Keyboard Part Picker
					</h2>
					<nav className='nav nav-masthead justify-content-center float-md'>
						<a
							className='text-primary nav-link fw-bold py-1 px-0 nav'
							aria-current='page'
							href='/'
						>
							Home
						</a>
            
						<a className='text-primary nav-link fw-bold py-1 px-0' href='/search.html'>

							Google Search
						</a>

						<a
							className='text-primary nav-link fw-bold py-1 px-0'
							href='https://github.com/moodzter/Keyboard_Back_End'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p> Backend Git</p>
						</a>
						<a
							className='text-primary nav-link fw-bold py-1 px-0'
							href='https://github.com/moodzter/Keyboard_Front_End'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p> Frontend Git</p>
						</a>
						<a
							className='text-primary nav-link fw-bold py-1 px-0'
							href='https://www.linkedin.com/in/nicholas-moody-44a3a0249/'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p> Nick Moody</p>
						</a>
						<a
							className='text-primary nav-link fw-bold py-1 px-0'
							href='https://www.linkedin.com/in/m-garrison/'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p> Mitchell Garrison</p>
							
						</a>
						<a
							className='text-primary nav-link fw-bold py-1 px-0'
							href='https://www.linkedin.com/in/jesus-eduardo-prado/'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>Eduardo Prado</p>
						</a>
						<a
							className='text-primary nav-link fw-bold py-1 px-0'
							target='_blank'
							type='button'
							rel='noreferrer'
							onClick={()=>{
								setShowForm(!showForm)
								setShowBuilds(!showBuilds)
								setShowSB(!showSB)
								}}
						>
							{" "}
							<p>Create New Keyboard</p>
						</a>

						
					</nav>
					{showSB ?
					<nav className='nav justify-content-center float-md'><a className='nav-link fw-bold py-1 px-0'>
							<SearchBar/>
						</a></nav> 
							: null}
				</div>
			</header>
		</div>
	);
};

export default Header;

// const [keyboard, setKeyboard] = useState("");

// const handleNewKeyboard = (event) => {
//     setKeyboard(event.target.value);
// };

// const cardToggleNewK = () => {
//     {
//         toggleNewK ? setToggleNewK(false) : setToggleNewK(true);
//     }
// };

// const [toggleNewK, setToggleNewK] = useState(false);