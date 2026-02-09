import { motion } from "framer-motion";
import { Book } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  link: string;
  description: string;
  doi?: string;
}

const Publications = () => {
  const publications: Publication[] = [
    {
      title: "Plasma Phosphorylated Tau217 as a Biomarker for Early Alzheimer's Disease Detection",
      authors: "Your Name, MD, James L. Matthews, PhD, Sarah Chen, MD, et al.",
      journal: "New England Journal of Medicine",
      year: 2023,
      link: "#",
      doi: "10.1056/NEJMoa2301284",
      description: "This landmark study established plasma p-tau217 as a highly accurate biomarker for detecting Alzheimer's disease pathology up to 12 years before symptom onset, potentially transforming early diagnosis approaches."
    },
    {
      title: "Neuroinflammatory Markers Predict Rate of Cognitive Decline in Mild Cognitive Impairment: A Five-Year Longitudinal Study",
      authors: "Your Name, MD, Robert Johnson, PhD, Emily Williams, MD",
      journal: "Nature Neuroscience",
      year: 2022,
      link: "#",
      doi: "10.1038/s41593-022-1182-9",
      description: "Our longitudinal study identified specific inflammatory markers in cerebrospinal fluid that strongly correlate with and predict accelerated cognitive decline in patients with mild cognitive impairment."
    },
    {
      title: "Novel Machine Learning Approach for Predicting Treatment Response in Alzheimer's Disease Clinical Trials",
      authors: "Michael Thompson, PhD, Your Name, MD, Lisa Zhang, PhD",
      journal: "Science Translational Medicine",
      year: 2021,
      link: "#",
      doi: "10.1126/scitranslmed.abd4889",
      description: "We developed and validated a machine learning algorithm that predicts individual patient responses to experimental Alzheimer's treatments based on genetic, biomarker, and clinical profiles, potentially enabling more targeted trial designs."
    },
    {
      title: "The Role of Lifestyle Factors in Modifying Alzheimer's Disease Progression: A Systematic Review and Meta-Analysis",
      authors: "Your Name, MD, Carlos Mendez, MD, PhD, Jennifer Liu, ScD",
      journal: "JAMA Neurology",
      year: 2020,
      link: "#",
      doi: "10.1001/jamaneurol.2020.3257",
      description: "This comprehensive review synthesized evidence from 42 studies investigating how lifestyle factors including exercise, diet, cognitive stimulation, and sleep quality may modify disease progression in patients with early-stage Alzheimer's disease."
    }
  ];

  return (
    <section id="publications" className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Research
        </motion.h2>
        
        <motion.div 
          className="text-left mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="py-4 px-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm mb-8">
            <div className="flex items-start gap-4">
              <Book className="text-primary mt-1 flex-shrink-0" size={24} />
              <div className="flex-1">
                <p className="text-lg font-medium mb-2">My <strong>research</strong> includes two main areas of focus:</p>
                <ol className="list-decimal pl-8 mt-2 space-y-2 text-lg">
                  <li><strong>Studying technology-enabled care models</strong> that address unmet needs in specific patient populations</li>
                  <li><strong>Investigating health system reform</strong>, with a focus on:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Strengthening state capacity</li>
                      <li>Exploring innovative financing mechanisms, including value-based care</li>
                      <li>Examining the socioeconomic determinants that shape health outcomes</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
            My academic and peer-reviewed publications can be found at the below link:
          </p>
          <a 
            href="https://scholar.google.com/citations?user=ju_E5LwAAAAJ&hl=en&oi=ao" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition duration-300 shadow-sm"
          >
            Google Scholar Profile <i className="fas fa-external-link-alt ml-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;