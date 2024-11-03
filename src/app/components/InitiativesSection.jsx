import { Clock, Check, Users } from 'lucide-react';

export default function InitiativesSection() {
	const classDetails = [
		{
			title: 'Introductory Class',
			subtitle: 'Beginner Friendly',
			price: 'FREE',
			duration: 'One Day (2-3 hours)',
			description: 'Perfect for students who want to explore the world of coding.',
			requirements: 'No prior experience needed',
			features: [
				'Perfect for grades 6-12',
				'Beginner-friendly curriculum',
				'Interactive learning experience',
				'Small group sessions'
			]
		},
		{
			title: 'Coding Fundamentals',
			subtitle: 'Beginner Friendly',
			price: 'FREE',
			duration: 'Three Sessions (2 hours each)',
			description: 'A comprehensive introduction to coding fundamentals.',
			requirements: 'No prior experience needed',
			features: [
				'Three interactive sessions',
				'Hands-on coding projects',
				'Perfect for grades 8-12',
				'Advanced concepts covered',
				'Small group learning'
			]
		}
	];

	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800'>
			<div className='container mx-auto px-4 md:px-6'>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400'>
					Our Classes
				</h2>

				{/* Main container for class rows */}
				<div className='space-y-16'>
					{/* Introductory Class Row */}
					<div className='grid lg:grid-cols-2 gap-8 items-start'>
						{/* Class Description */}
						<div className='space-y-6'>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
								Introductory Class
							</h3>
							<p className='text-lg text-orange-600 dark:text-orange-400 mb-2'>
								Free of Charge and Beginner Friendly
							</p>
							<div className='flex items-center text-gray-600 dark:text-gray-400 mb-4'>
								<Clock className='w-5 h-5 mr-2' />
								One Day (2-3 hours)
							</div>

							<div className='space-y-6 text-gray-600 dark:text-gray-400'>
								<p>
									This class is perfect for a group of students in a school setting, and is also open to libraries, recreation centers, and other similar venues.
								</p>
								
								<p>
									CodePulse Network offers engaging coding classes directly to students, completely free of charge and tailored for beginners. Our introductory classes are designed to get students excited and engaged with coding.
								</p>

								<ul className='space-y-3'>
									<li className='flex items-start'>
										<Check className='w-5 h-5 mr-2 mt-1 text-green-500 flex-shrink-0' />
										No prior coding experience required.
									</li>
									<li className='flex items-start'>
										<Check className='w-5 h-5 mr-2 mt-1 text-green-500 flex-shrink-0' />
										Curriculum tailored to middle and high school students (Grades 6-12), providing a solid foundation for future learning.
									</li>
									<li className='flex items-start'>
										<Check className='w-5 h-5 mr-2 mt-1 text-green-500 flex-shrink-0' />
										Inspires students to envision themselves as future software engineers.
									</li>
								</ul>
							</div>
						</div>

						{/* Sign-up Card */}
						<div className='max-w-md w-full ml-auto'>
							<div className='bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] flex flex-col justify-between'>
								{/* Card content for first class */}
								<div className='text-center mb-4'>
									<h3 className='text-xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
										{classDetails[0].title}
									</h3>
									<p className='text-lg text-orange-600 dark:text-orange-400 mb-4'>
										{classDetails[0].subtitle}
									</p>
									<p className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4'>
										{classDetails[0].price}
									</p>
									<div className='flex items-center justify-center text-gray-600 dark:text-gray-400'>
										<Clock className='w-5 h-5 mr-2' />
										{classDetails[0].duration}
									</div>
								</div>

								<div className='bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-4'>
									<div className='flex items-center text-gray-600 dark:text-gray-400'>
										<Users className='w-5 h-5 mr-2' />
										<span>Requirements: {classDetails[0].requirements}</span>
									</div>
								</div>

								<ul className='space-y-2'>
									{classDetails[0].features.map((feature, i) => (
										<li
											key={i}
											className='flex items-center text-gray-600 dark:text-gray-400'
										>
											<Check className='w-5 h-5 mr-2 text-green-500' />
											{feature}
										</li>
									))}
								</ul>

								<button className='mt-4 w-full px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-xl hover:from-orange-500 hover:to-orange-700 transition-colors'>
									Get Started
								</button>
							</div>
						</div>
					</div>

					{/* Coding Fundamentals Row */}
					<div className='grid lg:grid-cols-2 gap-8 items-start'>
						{/* Class Description */}
						<div className='space-y-6'>
							<h3 className='text-2xl font-bold text-gray-900 dark:text-gray-100'>
								CodePulse Network Coding Fundamentals
							</h3>
							<p className='text-lg text-orange-600 dark:text-orange-400 mb-2'>
								Free of Charge and Beginner Friendly
							</p>
							<div className='flex items-center text-gray-600 dark:text-gray-400 mb-4'>
								<Clock className='w-5 h-5 mr-2' />
								Three Sessions (2 hours each)
							</div>

							<div className='space-y-6 text-gray-600 dark:text-gray-400'>
								<p>
									This class is ideal for a group of students in a school setting, and is also open to libraries, recreation centers, and other similar venues.
								</p>
								
								<p>
									Our advanced coding class takes students through a deeper understanding of coding basics over three sessions. Designed for students in Grades 8-12, this class provides a strong foundation in coding, equipping students with the necessary skills to further explore and excel in computer science.
								</p>

								<div className='space-y-3'>
									<p className='font-medium'>Sessions:</p>
									<ul className='space-y-3'>
										<li className='flex items-start'>
											<Check className='w-5 h-5 mr-2 mt-1 text-green-500 flex-shrink-0' />
											Session 1: Introduction to Advanced Concepts and Tools.
										</li>
										<li className='flex items-start'>
											<Check className='w-5 h-5 mr-2 mt-1 text-green-500 flex-shrink-0' />
											Session 2: Hands-on Coding Instruction and Teaching.
										</li>
										<li className='flex items-start'>
											<Check className='w-5 h-5 mr-2 mt-1 text-green-500 flex-shrink-0' />
											Session 3: Applying Coding Skills in Real-world Projects.
										</li>
									</ul>
								</div>

								<p>
									By the end of the course, students will have a solid grasp of advanced coding techniques and will be well-prepared to tackle more complex challenges.
								</p>
							</div>
						</div>

						{/* Sign-up Card */}
						<div className='max-w-md w-full ml-auto'>
							<div className='bg-white dark:bg-gray-900 p-4 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] flex flex-col justify-between'>
								{/* Card content for second class */}
								<div className='text-center mb-4'>
									<h3 className='text-xl font-bold text-gray-900 dark:text-gray-100 mb-2'>
										{classDetails[1].title}
									</h3>
									<p className='text-lg text-orange-600 dark:text-orange-400 mb-4'>
										{classDetails[1].subtitle}
									</p>
									<p className='text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4'>
										{classDetails[1].price}
									</p>
									<div className='flex items-center justify-center text-gray-600 dark:text-gray-400'>
										<Clock className='w-5 h-5 mr-2' />
										{classDetails[1].duration}
									</div>
								</div>

								<div className='bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-4'>
									<div className='flex items-center text-gray-600 dark:text-gray-400'>
										<Users className='w-5 h-5 mr-2' />
										<span>Requirements: {classDetails[1].requirements}</span>
									</div>
								</div>

								<ul className='space-y-2'>
									{classDetails[1].features.map((feature, i) => (
										<li
											key={i}
											className='flex items-center text-gray-600 dark:text-gray-400'
										>
											<Check className='w-5 h-5 mr-2 text-green-500' />
											{feature}
										</li>
									))}
								</ul>

								<button className='mt-4 w-full px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-xl hover:from-orange-500 hover:to-orange-700 transition-colors'>
									Get Started
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
} 