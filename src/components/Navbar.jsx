import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    "products",
    "showcase",
    "drink",
    "innovator",
    "blog",
    "review",
    "contact",
  ];

  const handleScroll = () => {
    // Smooth scroll progress calculation
    const scrollPosition = window.scrollY;
    const scrollThreshold = 20;
    const progress = Math.min(scrollPosition / scrollThreshold, 1);
    setScrollProgress(progress);
    setIsScrolled(progress > 0.1);

    // Active section detection
    const heroSection = document.getElementById("hero");
    if (heroSection && scrollPosition < heroSection.offsetHeight) {
      setActiveSection("");
      return;
    }

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;

        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic styles based on scroll progress
  const navStyle = {
    backgroundColor: `rgba(255, 255, 255, ${scrollProgress})`,
    backgroundImage: `linear-gradient(to right, rgba(220, 38, 38, ${
      1 - scrollProgress
    }), rgba(251, 191, 36, ${1 - scrollProgress}))`,
    boxShadow: `0 ${4 * scrollProgress}px ${
      8 * scrollProgress
    }px rgba(0, 0, 0, ${0.1 * scrollProgress})`,
  };

  return (
    <div
      className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[80%] z-50"
      style={{ marginTop: "10px" }}
    >
      <nav
        className="w-full rounded-b-lg transition-all duration-500 ease-in-out"
        style={navStyle}
      >
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold transition-all duration-500 ease-in-out"
            style={{
              fontFamily: "Lobster, cursive",
              color: isScrolled ? "transparent" : "white",
              backgroundImage: isScrolled
                ? "linear-gradient(to right, #DC2626, #F59E0B)"
                : "none",
              backgroundClip: isScrolled ? "text" : "none",
              WebkitBackgroundClip: isScrolled ? "text" : "none",
            }}
          >
            B & B Foods
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative px-4 py-2 text-sm font-medium transition-all duration-500 ease-in-out"
                style={{
                  color: isScrolled
                    ? activeSection === section
                      ? "#DC2626"
                      : "#374151"
                    : "#FFFFFF",
                }}
              >
                {activeSection === section && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full transition-all duration-500 ease-in-out"
                    style={{
                      backgroundColor: isScrolled ? "#DC2626" : "#FFFFFF",
                      opacity: activeSection === section ? 1 : 0,
                      transform: `translate(-50%, ${
                        activeSection === section ? "0" : "4px"
                      })`,
                    }}
                  />
                )}
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}

            <a
              href="https://paystack.shop/brown-and-brown-food"
              target="_blank"
              className="ml-4 px-6 py-2 rounded-full font-medium transition-all duration-500 ease-in-out"
              style={{
                backgroundColor: isScrolled ? "transparent" : "#FFFFFF",
                backgroundImage: isScrolled
                  ? "linear-gradient(to right, #DC2626, #F59E0B)"
                  : "none",
                color: isScrolled ? "#FFFFFF" : "#DC2626",
                transform: `translateY(${isScrolled ? "0" : "0"})`,
              }}
            >
              Order Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-500 ease-in-out"
            style={{
              color: isScrolled ? "#374151" : "#FFFFFF",
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full mt-2 rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{
            backgroundColor: isScrolled ? "#FFFFFF" : "transparent",
            backgroundImage: !isScrolled
              ? "linear-gradient(to right, #DC2626, #F59E0B)"
              : "none",
          }}
        >
          <div className="p-6 space-y-4">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-colors ${
                  activeSection === section
                    ? "bg-red-50 text-red-600 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <a
              href="https://paystack.shop/brown-and-brown-food"
              target="_blank"
              className="block w-full py-3 px-4 bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              Order Now
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
