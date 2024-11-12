export default function DonateSection() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800'>
			<div className='container px-4 md:px-6 mx-auto max-w-3xl'>
				<div className='text-center mb-16 md:mb-20'>
					<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 leading-tight pb-1'>
						Support Our Mission
					</h1>
					<p className='text-xl text-gray-600 dark:text-gray-400'>
						Help us empower the next generation of software
						engineers
					</p>
				</div>

				<div className='bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 md:p-12'>
					<div className='prose prose-lg dark:prose-invert mx-auto'>
						<div className='text-center space-y-6'>
							<div className='bg-[#A27707] text-white rounded-xl p-8 mb-8'>
								<p className='text-xl md:text-2xl font-medium'>
									We appreciate your support!
								</p>
							</div>

							<p className='text-gray-600 dark:text-gray-400 text-lg'>
								Please email or e-transfer to:
							</p>

							<a
								href='mailto:codepulsenetwork@gmail.com'
								className='inline-block text-xl md:text-2xl font-medium text-[#A27707] hover:text-[#8B6506] transition-colors'
							>
								codepulsenetwork@gmail.com
							</a>

							<div className='pt-8'>
								<p className='text-gray-600 dark:text-gray-400'>
									Your contribution helps us:
								</p>
								<ul className='text-left text-gray-600 dark:text-gray-400 mt-4 space-y-3'>
									<li>
										• Provide free coding education to
										students
									</li>
									<li>• Develop new educational programs</li>
									<li>
										• Reach more schools and communities
									</li>
									<li>• Support our volunteer instructors</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-12 text-center'>
					<p className='text-sm text-gray-500 dark:text-gray-400'>
						CodePulse Network is committed to providing free coding
						education to students. Your donation directly supports
						our mission to empower young minds through technology.
					</p>
				</div>
			</div>
		</section>
	);
}
