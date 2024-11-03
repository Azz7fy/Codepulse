'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'Our Mission', href: './mission' },
		{ name: 'Initiatives', href: './initiatives' },
		{ name: 'Donate', href: './donate' }
	];

	return (
		<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm dark:bg-gray-900/80">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<Link href="/" className="font-bold text-xl text-gray-900 dark:text-white">
						CodePulse Network
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400"
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
						) : (
							<Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
						)}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden pb-6">
						<div className="flex flex-col space-y-4">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</nav>
	);
} 