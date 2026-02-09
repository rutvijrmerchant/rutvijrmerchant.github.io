import { useMobileMenu } from "@/contexts/MobileMenuContext";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = () => {
  const { isOpen, closeMenu } = useMobileMenu();

  const handleNavClick = (href: string) => {
    closeMenu();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="md:hidden bg-light bg-opacity-95 bg-blur"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            <motion.a 
              href="#about"
              className="block font-medium text-gray-700 hover:text-primary transition duration-300 py-2"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#about")}
            >
              About Me
            </motion.a>
            <motion.a 
              href="#projects"
              className="block font-medium text-gray-700 hover:text-primary transition duration-300 py-2"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#projects")}
            >
              Projects
            </motion.a>
            <motion.a 
              href="#publications"
              className="block font-medium text-gray-700 hover:text-primary transition duration-300 py-2"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#publications")}
            >
              Publications
            </motion.a>
            <motion.a 
              href="#writing"
              className="block font-medium text-gray-700 hover:text-primary transition duration-300 py-2"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#writing")}
            >
              Writing
            </motion.a>
            <motion.a 
              href="#reading"
              className="block font-medium text-gray-700 hover:text-primary transition duration-300 py-2"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#reading")}
            >
              Reading
            </motion.a>
            <motion.a 
              href="#ideas"
              className="block font-medium text-gray-700 hover:text-primary transition duration-300 py-2"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#ideas")}
            >
              Ideas
            </motion.a>
            <motion.a 
              href="#contact"
              className="block font-medium text-gray-700 hover:text-primary transition duration-300 py-2"
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick("#contact")}
            >
              Contact
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
