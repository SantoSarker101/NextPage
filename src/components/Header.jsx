import React, { useState } from 'react';
import { BoltIcon,Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	let [isMenuOpen,setIsMenuOpen] = useState(false)
	return (
		<div className='flex items-center justify-between bg-gray-100 px-4 py-5'>

			{/* Logo Section  */}
		<Link to='/' className='inline-flex items-start lg:items-center'>
			<BoltIcon className="h-6 w-6 text-blue-500"></BoltIcon>
			<span className='text-gray-800 font-bold text-xl ml-2'>Next Page</span>
		</Link>


			{/* Nav Item Section */}

			<div>
			<div onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden my-3 mr-0'>
			<span>{isMenuOpen === true ? <XMarkIcon className="h-6 w-6 text-purple-500"></XMarkIcon> : <Bars3Icon className="h-6 w-6 text-purple-500"></Bars3Icon>}</span>

			</div>

			<ul className={`items-center lg:flex bg-violet-900 lg:bg-gray-100 text-white lg:text-gray-900 font-bold sm:px-16 px-8 py-2 rounded duration-700 ${isMenuOpen ? 'block' : 'hidden'}`}>

				<li className='mb-8 lg:mb-0 lg:mr-8 mr-4 hover:bg-orange-500 sm:px-8 px-0 rounded lg:hover:bg-gray-100 hover:text-lime-900 duration-500'>

				<NavLink to='/' className={({isActive}) => (isActive ? 'active' : '')}>
					Home
				</NavLink>
				</li>

				<li className='mb-8 lg:mb-0 lg:mr-8 mr-4 hover:bg-orange-500 sm:px-8 px-0 rounded lg:hover:bg-gray-100 hover:text-lime-900 duration-500'>

				<NavLink to='/Books' className={({isActive}) => isActive ? 'active' : ''}>Books</NavLink>
				</li>

				<li className='mb-8 lg:mb-0 lg:mr-8 mr-4 hover:bg-orange-500 sm:px-8 px-0 rounded lg:hover:bg-gray-100 hover:text-lime-900 duration-500'>
					
					<NavLink to='/About' className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
				</li>
			</ul>

			</div>
		</div>
	);
};

export default Header;