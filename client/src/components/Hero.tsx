import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 text-balance">
              Front-end developer creating beautiful, interactive web experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("#projects")}
                className="bg-primary text-white hover:bg-primary/90 transition duration-300 shadow-sm"
                size="lg"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection("#contact")}
                variant="outline" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition duration-300"
                size="lg"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="John Doe - Web Developer" 
              className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
