'use client';
import { useState, useRef, useEffect } from 'react';
import { Dialog as HeadlessDialog } from '@headlessui/react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [aboutOpen, setAboutOpen] = useState(false);
	const aboutRef = useRef(null);

	// Updated navigation array order
	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Initiatives', href: '/initiatives' },
		{ name: 'Contact', href: '/contact' },
		{ name: 'Donate', href: '/donate' },
	];

	useEffect(() => {
		function handleClickOutside(event) {
			if (aboutRef.current && !aboutRef.current.contains(event.target)) {
				setAboutOpen(false);
			}
		}

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<motion.header 
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ 
					duration: 0.8,
					ease: "easeOut"
			}}
			className='fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-white/[0.8] backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:border-slate-50/[0.06] dark:bg-transparent dark:supports-[backdrop-filter]:bg-slate-900/75'
		>
			<nav
				className='relative flex items-center justify-between px-4 py-4 lg:px-6'
				aria-label='Global'
			>
				<div className='flex lg:flex-1'>
					<motion.div
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="flex items-center"
					>
						<Link href='/' className='flex items-center gap-2'>
							<img
								className='h-8 w-auto'
								src='/logo.png'
								alt='CodePulse Logo'
							/>
						</Link>
					</motion.div>
				</div>
				<div className='hidden lg:flex lg:gap-x-12'>
					{/* Home link with enhanced animation */}
					<motion.div 
						whileHover={{ 
							scale: 1.1,
							y: -2,
						}}
						whileTap={{ scale: 0.95 }}
					>
						<Link
							href='/'
							className='text-base font-semibold leading-6 text-gray-800 relative group'
						>
							<span className='bg-[#A27707] absolute h-[2px] w-0 bottom-0 left-0 transition-all duration-300 group-hover:w-full'></span>
							Home
						</Link>
					</motion.div>

					{/* About Us Dropdown with enhanced animation */}
					<div 
						ref={aboutRef}
						className="relative"
						onMouseEnter={() => setAboutOpen(true)}
						onMouseLeave={() => setAboutOpen(false)}
					>
						<button
							onClick={() => setAboutOpen(!aboutOpen)}
							className="text-base font-semibold leading-6 text-gray-700 hover:text-[#A27707] dark:text-gray-300 dark:hover:text-[#A27707] transition-colors flex items-center gap-1 p-4 -m-4"
						>
							About Us
							<svg
								className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
							</svg>
						</button>

						{/* Dropdown Menu */}
						{aboutOpen && (
							<div
								onMouseEnter={() => setAboutOpen(true)}
								onMouseLeave={() => setAboutOpen(false)}
								className="absolute left-0 mt-2 w-48 rounded-md bg-white dark:bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							>
								<div className="py-1">
									<Link
										href="/mission"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 transition-colors"
									>
										Our Mission
									</Link>
									<Link
										href="/team"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 transition-colors"
									>
										Our Team
									</Link>
									<Link
										href="/get-involved"
										className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800 transition-colors"
									>
										Get Involved
									</Link>
								</div>
							</div>
						)}
					</div>

					{/* Remaining navigation items */}
					<Link
						href='/initiatives'
						className='text-base font-semibold leading-6 text-gray-800 hover:text-[#A27707]'
					>
						Initiatives
					</Link>
					<Link
						href='/donate'
						className='text-base font-semibold leading-6 text-gray-800 hover:text-[#A27707]'
					>
						Donate
					</Link>
					<Link
						href='/contact'
						className='text-base font-semibold leading-6 text-gray-800 hover:text-[#A27707] dark:text-gray-200 dark:hover:text-[#A27707]'
					>
						Contact
					</Link>
				</div>

				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Link
							href="https://booking.codepulse.ca/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center justify-center px-4 py-2 rounded-lg 
								bg-[#A27707] hover:bg-[#8B6506]
								text-white font-semibold text-sm 
								transition-colors duration-200 
								shadow-sm hover:shadow-md"
						>
								Sign up
						</Link>
					</motion.div>
				</div>

				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className='sr-only'>Open main menu</span>
						<span className='block h-6 w-6'>☰</span>
					</button>
				</div>
			</nav>

			{/* Mobile menu dialog */}
			<HeadlessDialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className='fixed inset-0 z-50' />
				<HeadlessDialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<Link href='/' className='-m-1.5 p-1.5'>
							<span className='sr-only'>CodePulse</span>
							<img
								className='h-8 w-auto'
								src='/logo.png'
								alt='CodePulse Logo'
							/>
						</Link>
						<button
							type='button'
							className='-m-2.5 rounded-md p-2.5 text-gray-700'
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className='sr-only'>Close menu</span>
							<span className='block h-6 w-6'>✕</span>
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6 divide-y divide-gray-500/10'>
							<div className='space-y-2 py-6'>
								{/* Mobile menu items in correct order */}
								<Link
									href='/'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									onClick={() => setMobileMenuOpen(false)}
								>
									Home
								</Link>
								<Link
									href='/mission'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									onClick={() => setMobileMenuOpen(false)}
								>
									Our Mission
								</Link>
								<Link
									href='/team'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									onClick={() => setMobileMenuOpen(false)}
								>
									Our Team
								</Link>
								<Link
									href='/initiatives'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									onClick={() => setMobileMenuOpen(false)}
								>
									Initiatives
								</Link>
								<Link
									href='/donate'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									onClick={() => setMobileMenuOpen(false)}
								>
									Donate
								</Link>
								<Link
									href='/contact'
									className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
									onClick={() => setMobileMenuOpen(false)}
								>
									Contact
								</Link>
							</div>
						</div>
					</div>
				</HeadlessDialog.Panel>
			</HeadlessDialog>
		</motion.header>
	);
}
