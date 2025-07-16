"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "executive-summary", name: "エグゼクティブサマリー" },
  { id: "market-growth", name: "市場の成長性" },
  { id: "why-now", name: "なぜ今なのか" },
  { id: "bems-challenge", name: "BEMSの課題" },
  { id: "cbre-zebhub", name: "CBREとZEBHub" },
  { id: "revenue-model", name: "収益モデル" },
  { id: "investment", name: "投資の妥当性" },
  { id: "risk-analysis", name: "リスク分析" },
  { id: "roadmap", name: "展開計画" },
  { id: "conclusion", name: "結論" }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);

      // Update active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ transform: `scaleX(${progress / 100})` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress / 100 }}
        transition={{ duration: 0.1 }}
      />
      
      <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <ul className="space-y-2 p-4">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className={`
                  relative text-sm text-left w-48 py-2 px-4 rounded-lg transition-all
                  ${activeSection === section.id 
                    ? "bg-teal-600 text-white font-medium" 
                    : "text-gray-600 hover:text-teal-600 hover:bg-gray-100"
                  }
                `}
              >
                {section.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t lg:hidden z-50">
        <div className="flex overflow-x-auto no-scrollbar p-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`
                whitespace-nowrap px-3 py-2 text-xs rounded-full transition-all mr-2
                ${activeSection === section.id 
                  ? "bg-teal-600 text-white" 
                  : "bg-gray-100 text-gray-600"
                }
              `}
            >
              {section.name}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}