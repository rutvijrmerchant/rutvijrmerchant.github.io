import { motion } from "framer-motion";

interface WritingItem {
  title: string;
  date: string;
  excerpt: string;
  link: string;
  category: string;
  publication?: string;
}

const Writing = () => {
  const writings: WritingItem[] = [
    {
      title: "Kitsune",
      date: "September 20, 2023",
      excerpt: "If April is the cruelest month, as T.S Eliot wrote in The Waste Land, September is the month where life's cup overflows with possibility. Especially in New York City...",
      link: "/essays/kitsune",
      category: "Essay"
    },
    {
      title: "Evenings at 14th Street",
      date: "2024", 
      excerpt: "Every Tuesday evening, I exit the 14th Street subway and confront the squat, oblong silhouette of Lenox Health, the West Village outpost of Lenox Hill Hospital...",
      link: "/essays/lenox-hill",
      category: "Essay"
    },
    {
      title: "Wisps of Memory, Grains of Sand",
      date: "2024",
      excerpt: "\"Do I have another son? Where is he now?\" asked my grandmother. Her face was scrunched, worry lines plastered across her forehead. \"Yes, you do,\" said my uncle...",
      link: "/essays/wisps-of-memory",
      category: "Essay"
    },
    {
      title: "Shifting Sands",
      date: "2024",
      excerpt: "Another swing from Tatenda Taibu, another boundary. In the space of a few minutes, the Zimbabwean teenager had silenced the highly partisan, largely Pakistani crowd...",
      link: "/essays/shifting-sands",
      category: "Article"
    },
    {
      title: "Forts Amid Mounds of Garbage",
      date: "2024",
      excerpt: "Coming soon...",
      link: "/essays/forts-amid-mounds",
      category: "Essay"
    }
  ];

  return (
    <section id="writing" className="py-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Writing
        </motion.h2>
        
        <motion.div 
          className="text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <blockquote className="italic text-xl text-gray-700 dark:text-gray-300 mb-6 border-l-4 border-primary pl-4 py-2">
            "I am an experimenter in the sense that I write in order to change myself and in order not to think the same thing as before."
            <footer className="text-right text-gray-600 dark:text-gray-400 mt-2 text-base">— Michel Foucault</footer>
          </blockquote>
          

        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {writings.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary dark:bg-primary/20 rounded-full mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  <a href={item.link} className="hover:text-primary transition-colors">
                    {item.title}
                  </a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{item.date}</span>
                  {item.publication && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{item.publication}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.excerpt}
                </p>
                <a 
                  href={item.link} 
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;