import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";

function App() {
  return (
    <div>
      <Navbar />
      {/* Dummy home section for demo */}
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-gray-100"
      >
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
      </section>

      <About />

      {/* Dummy projects and contact sections for completeness */}
      <section id="projects" className="h-screen max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Projects
        </h2>
        <p className="text-center text-gray-600">
          Project details coming soon...
        </p>
      </section>

      <section id="contact" className="h-screen max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Contact
        </h2>
        <p className="text-center text-gray-600">Contact info coming soon...</p>
      </section>
    </div>
  );
}

export default App;
