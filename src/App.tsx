// src/App.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState<"about" | "music" | "experience">("about");

  // About carousel
  const carouselImages = ["/IMG_4876.jpeg", "/IMG_5102.jpeg", "/IMG_5104.jpeg"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // Music carousel
  const musicImages = ["/song1.jpeg", "/song2.jpeg", "/song3.jpeg", "/song4.jpeg", "/song5.jpeg"];
  const [musicIndex, setMusicIndex] = useState(0);

  const prevMusic = () => setMusicIndex((prev) => (prev === 0 ? musicImages.length - 1 : prev - 1));
  const nextMusic = () => setMusicIndex((prev) => (prev + 1) % musicImages.length);

  return (
    <div className="bg-[#f5f0e6] text-black min-h-screen font-sans overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#f5f0e6]/90 backdrop-blur-sm shadow-md z-50">
        <ul className="flex justify-center space-x-8 py-4 font-medium text-lg">
          {["about", "music", "experience"].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer hover:text-gray-600 transition ${activeTab === tab ? "font-bold underline underline-offset-4" : ""}`}
              onClick={() => setActiveTab(tab as "about" | "music" | "experience")}
            >
              {tab === "about" ? "About Me" : tab === "music" ? "Top 5 Music" : "Experience / Goals"}
            </li>
          ))}
        </ul>
      </nav>

      <main className="pt-24 relative flex flex-col items-center min-h-screen">
        <AnimatePresence mode="wait">
          {/* About */}
          {activeTab === "about" && (
            <motion.section
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center text-center px-6"
            >
              <div className="carousel mb-8 border-2 border-black rounded-xl overflow-hidden w-full max-w-xl aspect-[16/9]">
                <motion.img
                  key={carouselImages[currentImage]}
                  src={carouselImages[currentImage]}
                  alt={`Slide ${currentImage + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
              <p className="text-lg sm:text-xl max-w-2xl text-gray-700">
                Hi, I’m Uriel! I’m a Junior at the University of Illinois Urbana-Champaign, studying Computer Science and Learning Sciences. I grew up on Chicago’s southwest side in a Mexican immigrant family, which has shaped my perspective and values. I’m excited about exploring how technology and education intersect to make a positive impact.
              </p>
            </motion.section>
          )}

          {/* Music */}
          {activeTab === "music" && (
            <motion.section
              key="music"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full px-6 py-12 flex flex-col items-center text-center space-y-6"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Top 5 Music</h2>
              <div className="music-carousel">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={musicImages[musicIndex]}
                    src={musicImages[musicIndex]}
                    alt={`Music ${musicIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                <div className="music-carousel-buttons">
                  <button onClick={prevMusic}>Prev</button>
                  <button onClick={nextMusic}>Next</button>
                </div>
              </div>
            </motion.section>
          )}

          {/* Experience / Resume */}
          {activeTab === "experience" && (
            <motion.section
              key="experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center items-center text-center px-6 space-y-6 w-full"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Experience & Goals</h2>
              <p className="text-lg sm:text-xl max-w-2xl text-gray-700">
I graduated high school with both my high school diploma and an associate’s degree in Computer Science through a dual enrollment program, which I was fortunate to have access to. I am currently a student at the University of Illinois Urbana-Champaign. My experience includes working on various projects outside of school, including a website I am developing with a peer for a Sunday Soccer League. I am passionate about helping and fostering the next generation, especially in the tech field. Where I grew up, opportunities to explore tech-related fields like Computer Science are extremely limited compared to other parts of the city with more resources. My goal is to help close this gap by providing future generations with greater access to opportunities in technology, encouraging them to bring their ideas to the table, foster innovation, and pursue their passions. I aim to achieve this through improvements and expansion of CS and tech curricula, as well as by developing apps, websites, and other online resources that make learning Computer Science in a structured and accessible way available to all.              </p>
              <p className="text-lg sm:text-xl max-w-2xl text-gray-700">
  Another area that piques my interest is game development, particularly exploring innovative ways games can be used as tools to enhance education both within and outside of the tech field. Research shows that games can be highly effective in educational settings, but the biggest challenge lies in making these opportunities easily accessible for all students and schools—especially given the ongoing issues of affordability for families and educational institutions.
</p>
            <p className="text-lg sm:text-xl max-w-2xl text-gray-700">
  I am excited about the progress of our website for Promo Soccer League. You can check it out <a href="https://uhern20.github.io/SoccerLeagueWebsite/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">here</a> ⚽.
</p>


              {/* Download Button */}
              <a
                href="/Updated_Resume_UrielHernandez - Google Docs.pdf"
                download
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
              >
                Download Resume
              </a>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      
    </div>
  );
}
