'use client';
import React from 'react';

const teamMembers = [
  {
    name: 'Aarib Sarker',
    title: 'President and Founder',
    description: `Aarib Sarker is the President and Founder of CodePulse Network, a pioneering nonprofit dedicated to educating the next generation of software engineers. As an International Baccalaureate (IB) student, Aarib balances rigorous academic challenges with his passion for teaching. He has developed and implemented a comprehensive coding curriculum for high school and middle school students. His dedication to computer science is further demonstrated through his role as a Machine Learning Intern at Revyl, where he continues to expand his programming skills. Aarib's commitment to education and technology drives the mission of CodePulse Network, inspiring and empowering young minds to excel in STEM fields.`,
    imageUrl: '/team/Aarib.jpeg',
    email: 'aaribsarker@gmail.com'
  },
  {
    name: 'Anam Hira',
    title: 'Board Member',
    description: `Anam Hira is a valued board member of CodePulse Network, bringing extensive expertise in machine learning and software engineering. As a Co-Founder of Revyl, he addresses critical software testing issues, enhancing product reliability. His experience as a Machine Learning Engineer and Software Engineer Intern at Uber highlights his proficiency in advanced technologies. Anam's background in Computer Science and Statistics from the University of British Columbia, combined with his industry experience, makes him an exceptional mentor, providing students with invaluable knowledge and inspiration.`,
    imageUrl: '/team/anam.jpeg',
    email: ''
  },
  {
    name: 'Tej Pooni',
    title: 'Board Member',
    description: `Tej Pooni is a dedicated board member of CodePulse Network, bringing valuable experience in software development and engineering. As a Software Development Engineer Intern at Amazon and a Computer Science student at Simon Fraser University, Tej applies his strong technical skills to solve complex problems. His previous roles as a Software Developer at Damon Motorcycles and a Software Engineer at FORM highlight his proficiency in programming and software engineering. Tej's commitment to education and technology provides invaluable mentorship to our students, helping them excel in STEM fields and preparing them for future success.`,
    imageUrl: '/team/TEJ.jpeg',
    email: ''
  },
  {
    name: 'Wasif Sarker',
    title: 'Board Member',
    description: `Wasif Sarker is a dedicated board member of CodePulse Network, bringing extensive experience in software engineering and development. As a Full Stack Engineer at Revyl.AI, Wasif has demonstrated his proficiency in creating robust and scalable software solutions. His academic background in Mechanical Engineering at the University of British Columbia complements his technical skills, providing a well-rounded approach to problem-solving. Wasif's experience with UBC Rover and FortisBC has further refined his abilities in project management and system design. His commitment to education and technology, along with his real-world software engineering expertise, makes him an invaluable mentor, guiding students to excel in STEM fields and preparing them for successful careers.`,
    imageUrl: '/team/Wasif.jpg',
    email: ''
  },
  {
    name: 'Rohan Jassi',
    title: 'Regional Director of Educational Programs',
    description: `Rohan Jassi is a dedicated student in the International Baccalaureate (IB) program, recognized for his academic excellence and commitment to holistic education. With a strong foundation in coding, Rohan brings a unique blend of analytical and creative problem-solving skills to the table. His experience spans various programming languages and projects, showcasing his ability to adapt and innovate in the ever-evolving tech landscape. As the Regional Director of Educational Programs, Rohan is driven by a passion for making a positive impact and is actively striving to support and enhance this organization, leveraging his technical expertise and collaborative spirit to drive meaningful change and growth.`,
    imageUrl: '/team/rohan.jpg',
    email: 'rj2905077@gmail.com'
  },
  {
    name: 'Aazmain Aarib',
    title: 'Tri-Cities Director of Educational Programs',
    description: `Aazmain Aarib is a senior in high school and serves as the Tri-Cities Director of Educational Programs at CodePulse Network. He is highly skilled in Python and is known for his dedication and proficiency in programming. Aazmain's commitment to education and his passion for technology make him an exceptional leader and mentor. His enthusiasm for teaching and his ability to connect with students inspire the next generation of tech innovators, helping them to excel in their coding journeys and achieve their academic and career goals.`,
    imageUrl: '/team/aarib2.jpg',
    email: ''
  },
  {
    name: 'Adriel Dela Pena',
    title: 'Head Instructor',
    description: `Adriel Dela Pena is the Head Instructor at CodePulse Network, bringing extensive knowledge and experience in web development. Proficient in HTML, CSS, and JavaScript, Adriel has taken numerous classes in web development, equipping him with the skills to teach and inspire students. His dedication to education and his expertise in web technologies make him an invaluable asset to our team, guiding students to excel in their coding journeys and preparing them for successful careers in technology.`,
    imageUrl: '/team/dela.jpg',
    email: ''
  },
  {
    name: 'Hudson Dai',
    title: 'Lead dev & UI/UX design',
    description: `Hudson Dai is a developer and designer of codepulse.ca, contributing his experience in software development and graphic design. He has also created many websites with expertise in React & Next, and is highly skilled in Java and python. He is working on building a machine learning model to simulate f1 and optimize race lines, and has also used his knowledge in javascript to build a recaptcha bot for multiple discord servers for spam and fruad prevention. As a self studied AP Student, he strives to balance his extracurriular and academic life.`,
    imageUrl: '/team/hudson.jpg',
    email: ''
  }
];

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Our Team
          </h1>
        </div>
        
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <h4 className="text-md text-orange-500 text-center mb-4">
                  {member.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.description}
                </p>
                {member.email && (
                  <div className="text-center">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-orange-500 hover:text-orange-600 text-sm"
                    >
                      {member.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam; 