
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-bold text-ds-dark-blue">
            Sammy<span className="text-accent">Muraya</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-foreground/80 hover:text-accent transition-colors"
            >
              Skills
            </a>
            <Button asChild>
              <a href="#contact">Contact</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg py-4 px-4 absolute top-full left-0 right-0 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a
              href="#about"
              className="text-foreground/80 hover:text-accent transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-foreground/80 hover:text-accent transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-foreground/80 hover:text-accent transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <Button asChild className="w-full">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
