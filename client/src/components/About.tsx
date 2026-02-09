import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillsData } from "@/lib/constants";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
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
            className="space-y-6 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg">
              I'm a passionate front-end developer with 5 years of experience creating modern web applications. I specialize in React, TypeScript, and responsive design, with a focus on creating accessible and performant user experiences.
            </p>
            
            <p className="text-lg">
              After graduating with a degree in Computer Science from University of Technology, I worked with several startups before moving into my current role at TechCorp, where I lead front-end development for our flagship product.
            </p>

            <p className="text-lg">
              When I'm not coding, you'll find me hiking, reading science fiction, or experimenting with new cooking recipes.
            </p>
          </motion.div>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {skillsData.map((skill, index) => (
                <SkillCard 
                  key={index}
                  icon={skill.icon}
                  name={skill.name}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
