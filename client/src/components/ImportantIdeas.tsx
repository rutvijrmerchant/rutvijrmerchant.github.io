import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Idea {
  title: string;
  content: string;
  category: string;
}

const ImportantIdeas = () => {
  const ideas: Idea[] = [
    {
      title: "Beyond the Amyloid Hypothesis",
      content: "While amyloid plaques remain a hallmark of Alzheimer's disease, focusing exclusively on amyloid-targeted therapies has yielded disappointing results. My research suggests we need a more comprehensive approach that addresses multiple pathological mechanisms simultaneously, including tau pathology, neuroinflammation, vascular factors, and metabolic dysfunction. This 'systems biology' perspective may finally yield the disease-modifying treatments we've sought for decades.",
      category: "Research Paradigm"
    },
    {
      title: "Biomarkers as Disease Windows",
      content: "The development of plasma and CSF biomarkers like p-tau217 has revolutionized our ability to detect Alzheimer's pathology years or even decades before symptom onset. This extended preclinical window represents our best opportunity for therapeutic intervention before irreversible neurodegeneration occurs. I believe that combining multiple biomarkers into 'fingerprints' will further improve diagnostic accuracy and help predict individual disease trajectories.",
      category: "Diagnostic Innovation"
    },
    {
      title: "Precision Medicine in Neurology",
      content: "The traditional one-size-fits-all approach to neurological disorders fails to account for the remarkable heterogeneity in disease presentation, progression, and response to treatment. By integrating genetic, biomarker, and clinical data into comprehensive patient profiles, we can develop targeted interventions tailored to individual pathophysiology. My clinical practice increasingly incorporates this precision approach, with promising early results in treatment response and side effect management.",
      category: "Clinical Approach"
    },
    {
      title: "The Cognitive Reserve Hypothesis",
      content: "Why do some individuals with extensive Alzheimer's pathology remain cognitively intact while others with minimal pathology develop severe symptoms? The cognitive reserve hypothesis suggests that education, complex occupational demands, and lifestyle factors can build a 'reserve' that delays symptom onset despite underlying pathology. My research focuses on identifying specific activities and interventions that might enhance this reserve even after diagnosis, potentially slowing functional decline.",
      category: "Resilience Factors"
    },
    {
      title: "Narrative Medicine and the Neurology Clinic",
      content: "Technical expertise alone is insufficient when caring for patients with neurological disorders that fundamentally alter identity, memory, and selfhood. Narrative medicine—the practice of acknowledging, absorbing, and acting on patients' stories—provides a framework for more compassionate and effective care. In my practice, I combine cutting-edge scientific knowledge with this narrative approach, helping patients and families find meaning and maintain dignity throughout the disease course.",
      category: "Humanistic Care"
    },
    {
      title: "Interdisciplinary Research as Necessity",
      content: "The most significant advances in understanding neurodegenerative diseases have come from cross-pollination between traditionally separate fields. My laboratory intentionally brings together neurologists, immunologists, data scientists, and even social scientists to approach research questions from multiple perspectives. This diversity of thought has led to several unexpected discoveries that might have been missed in a more traditional research environment.",
      category: "Methodology"
    }
  ];

  return (
    <section id="ideas" className="py-16 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ideas
        </motion.h2>
        
        <motion.div 
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <blockquote className="italic text-xl text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-primary pl-4 py-2">
            "Be regular and orderly in your life, so that you may be violent and original in your work."
            <footer className="text-right text-gray-600 dark:text-gray-400 mt-2 text-base">— Gustave Flaubert</footer>
          </blockquote>
          
          <p className="text-gray-700 dark:text-gray-300 text-lg mt-8">
            This section has notes and sketches from ideas that I have found important and inspiring and the projects they could catalyze.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImportantIdeas;