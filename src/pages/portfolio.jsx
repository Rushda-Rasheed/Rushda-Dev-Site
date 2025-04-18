"use client";

import Head from 'next/head';
import { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Head>
        <title>Rushda Rasheed | Portfolio</title>
      </Head>

      {/* Header */}
      <header className="fixed w-full bg-gray-900 text-white py-4 px-8 flex justify-between items-center shadow-md z-50">
        <div className="flex items-center gap-2">
          <Image src="/images/mylogo.png" alt="Logo" width={35} height={35} />
          <span className="text-green-400 font-bold hidden md:inline">Rushda Rasheed</span>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul
          className={`md:flex md:space-x-6 ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent text-center md:text-left py-6 md:py-0 z-40`}
        >
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="block py-2 px-4 hover:text-green-500 capitalize"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col md:flex-row items-center justify-center px-8 gap-10"
      >
        <Image
          src="/images/profilepic.jpeg"
          alt="Rushda Rasheed"
          width={200}
          height={200}
          className="rounded-full border-4 border-green-500 shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-green-400">
            Hi,&nbsp;I'm Rushda Rasheed
          </h1>
          <h3 className="text-xl mt-4 text-gray-300">
            React/Next.js Developer&nbsp;|&nbsp;MERN Stack Enthusiast
          </h3>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/file/d/10miROtCoA8t8acums3ooFlKv3iR1FU04/view?usp=drive_link"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="https://linkedin.com/in/rushda-rasheed-958607351"
              className="text-green-400 hover:text-white text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Rushda-Rasheed"
              className="text-green-400 hover:text-white text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <motion.section
        id="about"
        className="py-20 bg-gray-800 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-green-500 mb-4">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          A highly motivated and detail-oriented web developer with 1 year of experience specializing in React.js, Next.js, Node.js, and MongoDB. Passionate about building scalable and user-friendly applications using modern technologies.
        </p>
      </motion.section>

      {/* Skills */}
      <section id="skills" className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm text-gray-300">
          <div>
            <span className="text-green-400 font-semibold">Frontend:</span>&nbsp;React.js, Next.js, HTML, CSS (Tailwind), JavaScript
          </div>
          <div>
            <span className="text-green-400 font-semibold">Backend:</span>&nbsp;Node.js, Express.js
          </div>
          <div>
            <span className="text-green-400 font-semibold">Database:</span>&nbsp;MongoDB
          </div>
          <div>
            <span className="text-green-400 font-semibold">Tools:</span>&nbsp;Git, GitHub, Postman, Firebase
          </div>
          <div>
            <span className="text-green-400 font-semibold">Deployment:</span>&nbsp;Vercel, Netlify
          </div>
          <div>
            <span className="text-green-400 font-semibold">Soft Skills:</span>&nbsp;Self-motivated, Problem-solving, Communication
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-6">Experience</h2>
        <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg text-left">
          <h3 className="text-2xl font-semibold text-green-400">React/Next.js Developer | MERN Stack Enthusiast — Freelance</h3>
          <p className="mt-2 text-sm text-gray-400">April 2024 – Present</p>
          <ul className="mt-4 list-disc pl-5 space-y-2 text-gray-300">
            <li>Built responsive and high-performance web applications using React.js, Next.js, and Tailwind CSS</li>
            <li>Developed full-stack features with Node.js, Express.js, and MongoDB</li>
            <li>Worked with REST APIs, Firebase Authentication, and JWT for secure user flows</li>
            <li>Focused on performance optimization, clean code, and scalability</li>
            <li>Deployed and managed projects using platforms like Vercel and Netlify</li>
          </ul>

        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-6">
          <div className="bg-gray-800 rounded-lg p-6 text-left shadow hover:shadow-green-500/30 transition duration-300">
            <h3 className="text-2xl font-semibold text-green-400">Virtual Question Bank System</h3>
            <p className="mt-2 text-gray-300">A full-stack exam practice platform with filtering, timers, and analysis. Built with Next.js, Node.js, MongoDB.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-left shadow hover:shadow-green-500/30 transition duration-300">
            <h3 className="text-2xl font-semibold text-green-400">Portfolio Website</h3>
            <p className="mt-2 text-gray-300">Responsive portfolio built using React, Next.js, Tailwind, and React Icons to showcase skills and projects.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-left shadow hover:shadow-green-500/30 transition duration-300">
            <h3 className="text-2xl font-semibold text-green-400">Weather App</h3>
            <p className="mt-2 text-gray-300">Used OpenWeather API to fetch weather data and display it in a clean React UI with Axios and hooks.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-left shadow hover:shadow-green-500/30 transition duration-300">
            <h3 className="text-2xl font-semibold text-green-400">E-commerce UI</h3>
            <p className="mt-2 text-gray-300">Designed a clean product listing and cart UI using Tailwind CSS and React router navigation.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-4">Contact Me</h2>
        <p className="mb-2">
          📧&nbsp;
          <a href="mailto:rushirasheed42@gmail.com" className="text-green-400">
            rushirasheed42@gmail.com
          </a>
        </p>
        <p>
          🌐 See LinkedIn&nbsp;&amp;&nbsp;GitHub links above ☝️
        </p>
      </section>
    </>
  );
}
