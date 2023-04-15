import React from 'react';
import Image from 'next/image';
import aboutImage from '@/assets/about_image.jpg';

function About() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">About Me</h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="w-full ">
            <Image alt="About Us" src={aboutImage} />
          </div>
        </div>
        <div className="md:w-1/2 md:pl-10">
          <p className="text-lg font-medium my-4">
            Hello there, my name is Vladis and I am proud to be a graduate of
            SCE College where I studied from 2017 to 2021. Currently, I am
            working as an Infrastructure Software Engineer at Wix.com, a dynamic
            company that is at the forefront of web development and design.
          </p>
          <p className="text-lg font-medium my-4">
            During my first year of studies, I quickly realized that there was
            no single resource that could unite all the department's study
            materials. With this in mind, I took it upon myself to create the
            department's drive, which has since become a valuable tool for
            students seeking to enhance their learning experience.
          </p>
          <p className="text-lg font-medium my-4">
            In addition to my work at Wix, I am also an active member of the
            LinkedIn community, where I share my personal and professional
            journey and the many challenges I have overcome. It is my hope that
            by doing so, I can inspire others to pursue their own goals and
            never give up on their dreams.
          </p>
          <p className="text-lg font-medium my-4">
            Furthermore, I am passionate about helping junior colleagues in the
            software field, and I take great pride in mentoring and guiding them
            through their first steps in this exciting and rapidly evolving
            industry.
          </p>
          <p className="text-lg font-medium my-4">
            Feel free to contact me on{' '}
            <a
              className="text-blue-500"
              href="https://www.linkedin.com/in/vladismarkin"
            >
              Linkedin
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
