import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import LightSwitch from './LightSwitch';
import LanguageSwitch from './LanguageSwitch';
import { menu } from '../assets/utils/Texts';
import CartoonMenuFilled from './CartoonMenuFilled';

export default function Navbar({ lang, setLang }) {
	const [toggleMenu, setToggleMenu] = useState('none');
	let menuGeneral = [];

	const changeMenu = (c) => setToggleMenu(c);

	function printMenu() {
		for (let i = 0; i < menu.length; i++)
			menuGeneral.push(
				<div key={i}>
					<CartoonMenuFilled
						id={i}
						linked={menu[i].ref}
						color={menu[i].color}
						text={menu[i][lang]}
					/>
				</div>,
			);
	}

	printMenu();

	return (
		<nav className='w-full px-4 py-4 lg:px-7 lg:fixed bg-white dark:bg-gray-900 dark:text-white shadow visible z-40'>
			<div className='container mx-auto'>
				<div className='flex justify-between items-center'>
					<a href='#me'>
						<h1 className='self-start text-4xl lg:text-5xl font-extrabold rounded-md cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500'>
							HS
						</h1>
					</a>
					<LightSwitch />
					<div className='hidden lg:block'>
						<div className='flex justify-center items-center text-center text-lg'>
							{menuGeneral}
							<LanguageSwitch
								lang={lang}
								setLang={setLang}
							/>
						</div>
					</div>
					<button className='block lg:hidden h-10 w-10 p-1 text-white rounded hover:bg-orange-500 bg-orange-400 transition duration-200 '>
						{toggleMenu === 'none' ? (
							<MenuIcon onClick={() => changeMenu('block')} />
						) : (
							<XIcon onClick={() => changeMenu('none')} />
						)}
					</button>
				</div>
				<div className='w-full h-auto text-center lg:hidden'>
					<div style={{ display: toggleMenu }}>
						{menuGeneral}
						<div className='mt-5'>
							<LanguageSwitch
								lang={lang}
								setLang={setLang}
							/>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
