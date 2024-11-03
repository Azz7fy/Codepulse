import Link from 'next/link';

export default function HeroSection() {
	return (
		<section className='w-full min-h-screen flex items-center justify-center py-16 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-gray-900'>
			<div className='container px-4 md:px-6 mx-auto'>
				<div className='flex flex-col items-center justify-center space-y-12 text-center pb-8'>
					<div className='space-y-6'>
						<h1 className='text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500 dark:from-white dark:to-gray-300 mb-16 md:mb-20 leading-tight pb-1'>
							Code Pulse Network
						</h1>
						<p className='mx-auto max-w-[900px] text-xl leading-relaxed sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400'>
							Empowering the next generation of software engineers
						</p>
					</div>
					<div className='space-x-6'>
						<Link
							href='/initiatives'
							className='inline-flex h-14 items-center justify-center rounded-xl bg-gray-900 px-12 text-lg font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
						>
							Get Started
						</Link>
						<Link
							href='/mission'
							className='inline-flex h-14 items-center justify-center rounded-xl border border-gray-200 bg-gradient-to-r from-orange-400 to-orange-600 px-12 text-lg font-medium text-white shadow-sm transition-colors hover:from-orange-500 hover:to-orange-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-orange-500 disabled:pointer-events-none disabled:opacity-50 dark:border-orange-700'
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
