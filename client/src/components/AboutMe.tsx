import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="space-y-6 text-gray-700 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Hi, I'm Rutvij. A resident doctor, researcher, and aspiring writer.
            </h3>
            <p className="text-lg">
              I am a resident physician with interests in internal medicine, oncology, and healthcare delivery. My work brings together training in clinical medicine, social science, public health, and consulting, with the goal of expanding access to high-quality healthcare.
            </p>
            
            <div className="pl-4">
              <p className="text-lg flex items-start">
                <span className="text-primary mr-3 mt-1">→</span>
                <span>I earned my MD at the Icahn School of Medicine at Mount Sinai. I hold an MPH from the Harvard T.H. Chan School of Public Health, where I focused on healthcare delivery and health systems. I completed my undergraduate studies at Northwestern University, studying Political Science and Economics.</span>
              </p>
            </div>
            
            <div className="pl-4">
              <p className="text-lg flex items-start">
                <span className="text-primary mr-3 mt-1">→</span>
                <span>Outside of medicine, I moonlight as a writer. I also maintain a deep interest in Indian history and politics. Some of my writing can be found in the <strong>Writing</strong> section of this page. Other enduring interests include Test cricket, wildlife conservation, literary fiction, and overpriced cups of coffee.</span>
              </p>
            </div>
            
            <div className="pl-4">
              <p className="text-lg flex items-start">
                <span className="text-primary mr-3 mt-1">→</span>
                <span>The header shows the view from the window in the living room of the family home in Breach Candy, Mumbai, a vantage point from which many ideas and dreams have been conceived, discarded, and reimagined.</span>
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <a 
                href="/about-more" 
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition duration-300 shadow-sm"
              >
                More About Me <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;