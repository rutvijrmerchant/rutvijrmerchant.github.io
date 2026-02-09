import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const OngoingProjects = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      title: "Novel Biomarkers for Early Alzheimer's Detection",
      description: "Leading a multi-center clinical trial investigating plasma biomarkers that may detect Alzheimer's disease 10+ years before symptom onset.",
      tags: ["Neurology", "Biomarkers", "Clinical Trial"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      title: "Neuroinflammation & Cognitive Decline",
      description: "Investigating the relationship between neuroinflammatory markers and rate of cognitive decline in patients with mild cognitive impairment.",
      tags: ["Immunology", "Neuroscience", "Longitudinal Study"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
      title: "Precision Medicine Approaches to Neurodegenerative Disorders",
      description: "Developing personalized treatment protocols based on genetic profiling and biomarker analysis for patients with various neurodegenerative conditions.",
      tags: ["Precision Medicine", "Genetics", "Treatment Protocol"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ongoing Projects
        </motion.h2>
        
        <motion.div 
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            More information coming soon about ongoing projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OngoingProjects;