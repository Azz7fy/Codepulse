export default function GetInvolved() {
	return (
		<section className='w-full min-h-screen flex items-center justify-center relative bg-white dark:bg-slate-950'>
			<div className="fixed inset-0 bg-[url('/streaks.png')] bg-cover bg-center bg-no-repeat opacity-100" />
			<div className='container mx-auto px-4 md:px-6 relative z-10 max-w-4xl py-16'>
				<h1 className='text-4xl md:text-5xl font-bold text-center mb-8 text-[#A27707]'>
					Get Involved
				</h1>

				<div className='bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800'>
					<p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>
						Are you interested in making a difference? Join us as a
						volunteer and help us in our mission to empower the
						youth through technology.
					</p>

					<p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>
						Please reach out to us via email at{' '}
						<a
							href='mailto:codepulsenetwork@gmail.com'
							className='text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-300 font-semibold transition-colors'
						>
							codepulsenetwork@gmail.com
						</a>{' '}
						to learn more about how you can get involved.
					</p>

					<p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed'>
						If possible, please include your resume and some
						information about yourself and what interests you about
						our organization in the email.
					</p>
				</div>
			</div>
		</section>
	);
}
