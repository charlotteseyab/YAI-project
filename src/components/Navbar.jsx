import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
    const scrollPosition = window.scrollY;

    // Check if we are in the Hero section
    const heroSection = document.getElementById("hero");
    if (heroSection && scrollPosition < heroSection.offsetHeight) {
      setActiveSection(""); // Reset active section when in Hero
      return;
    }

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop - 1 &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[80%] bg-gradient-to-r from-red-600 to-yellow-400 text-black shadow-lg rounded-b-lg z-10"
        style={{ marginTop: "10px" }}
      >
        {/* Gradient Border Outset */}
        <div className="absolute inset-0 border-2 border-transparent rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-600 rounded-lg"></div>
        </div>

        {/* Navbar Content */}
        <div className="relative container mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo or Brand Name */}
          <a
            href="/"
            className="text-2xl font-bold text-black-400 hover:text-yellow-300 transition duration-300"
            style={{ fontFamily: "Lobster, cursive" }}
          >
            B & B Foods
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black focus:outline-none hover:text-yellow-300 transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Navigation Links */}
          <div
            className={`md:flex flex-col md:flex-row md:space-x-8 ${
              isOpen ? "flex" : "hidden"
            } md:block absolute md:relative top-12 md:top-0 left-0 w-full md:w-auto bg-yellow-400 md:bg-transparent rounded-lg p-4 md:p-0 text-center md:text-left`}
          >
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`block py-2 md:inline hover:text-yellow-300 transition duration-300 ${
                  activeSection === section ? "font-bold text-yellow-300" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}

            {/* Call-to-Action Button (Visible in Mobile Menu) */}
            <a
              href="/order"
              className="block md:hidden bg-red-600 text-yellow-400 px-6 py-2 mt-4 rounded-full font-semibold hover:bg-red-700 hover:text-yellow-300 transition duration-300"
            >
              Order Now
            </a>
          </div>

          {/* Call-to-Action Button (Visible on Large Screens) */}
          <a
            href="https://paystack.shop/brown-and-brown-food"
            target="_blank"
            className="hidden md:block bg-yellow-400 text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 hover:text-red-700 transition duration-300"
          >
            Order Now
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
