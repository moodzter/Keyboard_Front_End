import React from "react";
import CreateKeyboard from "./CreateKeyboard";

//constants are at the bottom

const Header = ({
	handleNewKeyboard,
    toggleNewK,
}) => {
	return (
		<div>
			<header className='mb-auto'>
				<div>
					<h2 className='nav nav-masthead justify-content-center float-md'>
								Keyboard Part Picker
					</h2>
					<nav className='nav nav-masthead justify-content-center float-md'>
						<a
							className='nav-link fw-bold py-1 px-0 nav'
							aria-current='page'
							href='/'
						>
							Home
						</a>

						<p
							className='nav-link fw-bold py-1 px-0'
							onClick={() => {
								cardToggleNew();
							}}
						>
							New Build
						</p>

						{toggleNewK ? (
							<CreateKeyboard
								handleNew={handleNewKeyboard}
							/>
						) : null}

						<a className='nav-link fw-bold py-1 px-0' href='/search.html'>
							Search
						</a>

						<a
							className='nav-link fw-bold py-1 px-0'
							href='https://github.com/moodzter/Keyboard_Back_End'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>Backend Git</p>
						</a>
						<a
							className='nav-link fw-bold py-1 px-0'
							href='https://github.com/moodzter/Keyboard_Front_End'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>Frontend Git</p>
						</a>
						<a
							className='nav-link fw-bold py-1 px-0'
							href='https://www.linkedin.com/in/nicholas-moody-44a3a0249/'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>Nick Moody</p>
						</a>
						<a
							className='nav-link fw-bold py-1 px-0'
							href='https://www.linkedin.com/in/m-garrison/'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>Mitchell Garrison</p>
						</a>
						<a
							className='nav-link fw-bold py-1 px-0'
							href='https://www.linkedin.com/in/jesus-eduardo-prado/'
							target='_blank'
							type='button'
							rel='noreferrer'
						>
							{" "}
							<p>Eduardo Prado</p>
						</a>
					</nav>
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