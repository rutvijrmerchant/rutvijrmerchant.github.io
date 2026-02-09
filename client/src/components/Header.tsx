import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useMobileMenu } from "@/contexts/MobileMenuContext";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  const { toggleMenu } = useMobileMenu();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full bg-light dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 bg-blur z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="font-bold text-xl text-primary dark:text-white transition duration-300 hover:text-accent dark:hover:text-primary">
            Rutvij R. Merchant
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="#about" label="About Me" />
            <NavLink href="#projects" label="Projects" />
            <NavLink href="#publications" label="Publications" />
            <NavLink href="#writing" label="Writing" />
            <NavLink href="#reading" label="Reading" />
            <NavLink href="#ideas" label="Ideas" />
            <NavLink href="#contact" label="Contact" />
            <ThemeToggle />
          </nav>
          
          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary transition duration-300"
              aria-label="Toggle mobile menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu (rendered conditionally in MobileMenu component) */}
      <MobileMenu />
    </header>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink = ({ href, label }: NavLinkProps) => {
  return (
    <motion.a 
      href={href}
      className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }}
    >
      {label}
    </motion.a>
  );
};

export default Header;
