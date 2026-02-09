import { motion } from "framer-motion";

interface Book {
  title: string;
  author: string;
  coverImage: string;
  description: string;
  link?: string;
  category?: string;
}

const Reading = () => {
  const books: Book[] = [
    {
      title: "The Emperor of All Maladies",
      author: "Siddhartha Mukherjee",
      coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400",
      description: "This 'biography of cancer' provides invaluable historical context for understanding how we approach disease research and treatment today. Mukherjee's narrative brilliance makes complex science accessible.",
      category: "Medical History",
      link: "#"
    },
    {
      title: "Being Mortal",
      author: "Atul Gawande",
      coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400",
      description: "Gawande's exploration of aging, dying, and how medicine often fails the elderly has profoundly influenced my approach to patient care and how I discuss prognosis with patients facing neurodegenerative diseases.",
      category: "Medical Ethics",
      link: "#"
    },
    {
      title: "The Man Who Mistook His Wife for a Hat",
      author: "Oliver Sacks",
      coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400",
      description: "Sacks' classic case studies in neurology demonstrate how to observe patients with compassion and scientific rigor while capturing the deeply human elements of neurological disorders.",
      category: "Neurology",
      link: "#"
    },
    {
      title: "The Brain That Changes Itself",
      author: "Norman Doidge",
      coverImage: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=400",
      description: "Doidge's exploration of neuroplasticity revolutionized my understanding of the brain's potential for change and adaptation, informing my research on potential compensatory mechanisms in early neurodegenerative disease.",
      category: "Neuroscience",
      link: "#"
    }
  ];

  return (
    <section id="reading" className="py-16 bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Reading
        </motion.h2>
        
        <motion.div 
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Coming soon: book recs, notes from fiction and nonfiction I'm reading, heavily scribbled-in favorites.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Reading;