import { Lightbulb, Users, Target, HandshakeIcon } from 'lucide-react';
import Link from 'next/link';

export default function LearnMoreSection() {
	const coreValues = [
		{
			icon: Lightbulb,
			title: 'Innovation',
			description: 'We believe in the power of creativity and innovation to drive progress and solve complex problems.'
		},
		{
			icon: Users,
			title: 'Inclusivity',
			description: 'We strive to create an inclusive environment where everyone feels welcome and valued.'
		},
		{
			icon: Target,
			title: 'Excellence',
			description: 'We are committed to excellence in all our programs and initiatives, ensuring high-quality education and support.'
		},
		{
			icon: HandshakeIcon,
			title: 'Collaboration',
			description: 'We promote teamwork and collaboration, recognizing that great ideas come from diverse perspectives.'
		}
	];

	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800'>
			<div className='container px-4 md:px-6 mx-auto max-w-4xl'>
				{/* Mission Section */}
				<div className='mb-20 text-center'>
					<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl text-[#A27707]'>
						Our Mission
					</h2>
					<h3 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100'>
						Empowering Future Innovators
					</h3>
					<p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
						CodePulse Network is a non-profit organization committed to empowering the next generation of software engineers by sparking interest in coding among middle schoolers and high school students. Our tailored curriculum offers introductory classes designed to inspire curiosity, foster creativity, and cultivate problem-solving skills in young minds. Join us in unlocking the power of code and shaping a brighter, more inclusive future in technology.
					</p>
				</div>

				{/* Core Values Section */}
				<div className='mb-20'>
					<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center text-gray-900 dark:text-gray-100'>
						Core Values
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{coreValues.map((value, index) => (
							<div key={index} className='flex items-start space-x-4'>
								<value.icon className='w-6 h-6 text-[#A27707] mt-1' />
								<div>
									<h3 className='font-semibold text-xl mb-2 text-gray-900 dark:text-gray-100'>
										{value.title}
									</h3>
									<p className='text-gray-600 dark:text-gray-400'>
										{value.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Vision Section */}
				<div className='mb-20'>
					<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-center text-gray-900 dark:text-gray-100'>
						Our Vision
					</h2>
					<p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
						Our vision is to create a world where every young person has the opportunity to learn coding and technology skills, regardless of their background or circumstances. By providing accessible and engaging educational experiences, we aim to inspire the next generation of tech leaders and innovators who will drive positive change in their communities and beyond.
					</p>
				</div>

				{/* Programs Section */}
				<div className='mb-20'>
					<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-center text-gray-900 dark:text-gray-100'>
						Programs and Initiatives
					</h2>
					<ul className='space-y-4 text-lg text-gray-600 dark:text-gray-400'>
						<li className='flex items-start'>
							<span className='text-[#A27707] mr-2'>•</span>
							<span><strong>Introductory Coding Classes:</strong> Our classes introduce students to the basics of coding, helping them develop foundational skills in a supportive and engaging environment.</span>
						</li>
						<li className='flex items-start'>
							<span className='text-[#A27707] mr-2'>•</span>
							<span><strong>Community Outreach:</strong> We actively engage with local communities to promote the importance of coding education and provide resources to underserved schools and organizations.</span>
						</li>
					</ul>
				</div>

				{/* Get Involved Section */}
				<div className='text-center'>
					<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-gray-900 dark:text-gray-100'>
						Get Involved
					</h2>
					<p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8'>
						We invite you to join us in our mission to empower the next generation of software engineers. Whether you are a student, parent, educator, or industry professional, there are many ways to get involved and make a difference. Together, we can unlock the potential of young minds and create a brighter future through technology.
					</p>
					<Link
						href='/get-involved'
						className='inline-flex h-12 items-center justify-center rounded-xl bg-[#A27707] px-8 text-lg font-medium text-white shadow-sm transition-colors hover:from-orange-500 hover:to-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500'
					>
						Learn more about how to get involved
					</Link>
				</div>
			</div>
		</section>
	);
} 