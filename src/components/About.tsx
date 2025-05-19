import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto px-6 py-16 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
        About Me
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        Hi! I’m a passionate web developer with a love for creating clean,
        efficient, and user-friendly websites. I specialize in React,
        TypeScript, and Tailwind CSS to build responsive and modern web
        applications.
      </p>
      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        When I’m not coding, I enjoy learning new technologies, working on
        personal projects, and exploring creative ways to solve problems. This
        portfolio showcases some of my favorite work and skills.
      </p>
    </section>
  );
};

export default About;
