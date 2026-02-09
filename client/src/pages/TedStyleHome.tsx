import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import bannerImage from "@assets/3257D3DE-079F-4708-A347-4B1A64B5DDF5_1_105_c.jpeg";

const tabs = ["Cricket", "Cities", "Medicine and Healthcare", "Politics"] as const;
type Tab = typeof tabs[number];

const TedStyleHome = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Cities");

  const writingItems = [
    {
      title: "Wisps of Memory, Grains of Sand",
      date: "2025",
      excerpt: "\"Do I have another son? Where is he now?\" asked my grandmother. Her face was scrunched, worry lines plastered across her forehead. \"Yes, you do,\" said my uncle...",
      link: "/essays/wisps-of-memory",
      category: "Essay",
      tab: "Medicine and Healthcare" as Tab
    },
    {
      title: "Forts Amid Mounds of Garbage",
      date: "2024",
      excerpt: "What JK Galbraith wrote in 1958 about the US resonates in India today. \"In a community where public services have failed to keep abreast of private consumption, things are very different. Here, in an atmosphere of private opulence and public squalor, the private goods have full sway.\"",
      link: "/essays/forts-amid-mounds",
      category: "Essay",
      tab: "Cities" as Tab
    },
    {
      title: "Evenings at 14th Street",
      date: "2024",
      excerpt: "Every Tuesday evening, I exit the 14th Street subway and confront the squat, oblong silhouette of Lenox Health, the West Village outpost of Lenox Hill Hospital...",
      link: "/essays/lenox-hill",
      category: "Essay",
      tab: "Cities" as Tab
    },
    {
      title: "Kitsune",
      date: "2024",
      excerpt: "If April is the cruelest month, as T.S Eliot wrote in The Waste Land, September is the month where life's cup overflows with possibility. Especially in New York City...",
      link: "/essays/kitsune",
      category: "Essay",
      tab: "Cities" as Tab
    },
    {
      title: "Shifting Sands",
      date: "2020",
      excerpt: "Another swing from Tatenda Taibu, another boundary. In the space of a few minutes, the Zimbabwean teenager had silenced the highly partisan, largely Pakistani crowd...",
      link: "/essays/shifting-sands",
      category: "Article",
      tab: "Cricket" as Tab
    },
    {
      title: "On Ayodhya",
      date: "2024",
      excerpt: "Today is Vijayadashami. A day for hot jalebi, piety, and reflecting on the many tellings of the Ramayana. Unlike in years past, the celebrations of this year's Dussehra are tied to the events of January — the consecration of the Ram temple in Ayodhya and its accompanying recasting of both Hinduism and the modern Indian republic.",
      link: "/essays/on-ayodhya",
      category: "Essay",
      tab: "Politics" as Tab
    }
  ];

  const filteredItems = writingItems.filter(item => item.tab === activeTab);

  const publications = [
    {
      authors: "Merchant RR, Author B, Author C",
      title: "Technology-enabled care models for underserved populations",
      journal: "Health Affairs",
      year: "2024",
      doi: "10.1377/hlthaff.2024.example",
      status: "In press"
    },
    {
      authors: "Author A, Merchant RR, Author C",
      title: "Health system reform and state capacity building",
      journal: "New England Journal of Medicine",
      year: "2023",
      doi: "10.1056/NEJMp2300000",
      status: "Published"
    }
  ];

  const books = [
    {
      title: "The Remains of the Day",
      author: "Kazuo Ishiguro",
      description: "A haunting tale of duty, regret, and the quiet tragedy of a life unlived."
    },
    {
      title: "Educated",
      author: "Tara Westover",
      description: "A powerful memoir about education, family, and the struggle between loyalty and self-discovery."
    },
    {
      title: "The God of Small Things",
      author: "Arundhati Roy",
      description: "A lyrical exploration of love, loss, and the complexities of family in post-colonial India."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header Image */}
      <div className="w-full h-64 md:h-80 overflow-hidden">
        <img 
          src={bannerImage} 
          alt="View from Mumbai" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-4xl pl-4 pr-4 md:pl-8 md:pr-0 py-12">
        {/* Name */}
        <motion.header 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold mb-4">Rutvij R. Merchant</h1>
          <div className="text-gray-600 dark:text-gray-400 mb-6 space-y-1">
            <p className="text-lg font-medium">MD MPH</p>
            <p className="text-base">Internal Medicine Resident at BI Deaconess Medical Centre</p>
            <p className="text-base italic">Resident doctor, researcher, writer</p>
          </div>
        </motion.header>

        {/* Two Column Layout - Left aligned */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Navigation */}
          <div className="md:col-span-1 md:border-r-2 md:border-gray-400 md:dark:border-gray-500 md:pr-8">
            <nav className="sticky top-8">
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="font-bold hover:text-blue-600 transition-colors">About</a></li>
                <li><a href="#writing" className="font-bold hover:text-blue-600 transition-colors">Writing</a></li>
                <li><a href="#research" className="font-bold hover:text-blue-600 transition-colors">Research</a></li>
                <li><a href="#ideas" className="font-bold hover:text-blue-600 transition-colors">Ideas</a></li>
              </ul>
              
              {/* Contact Icons */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-3">
                  <a 
                    href="mailto:rutvij.merchant@gmail.com" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                    title="Email"
                  >
                    ✉️
                  </a>
                  <a 
                    href="https://www.linkedin.com/notifications/?filter=all" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                    title="LinkedIn"
                  >
                    💼
                  </a>
                  <a 
                    href="https://x.com/home" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-blue-600 transition-colors text-lg"
                    title="Twitter"
                  >
                    🐦
                  </a>
                </div>
              </div>
            </nav>
          </div>

          {/* Right Content */}
          <div className="md:col-span-3 space-y-12">
            {/* About Section - Updated */}
            <motion.section 
              id="about"
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-6">About</h2>
              <div className="prose max-w-none dark:prose-invert">
                <p className="mb-4">
                  Hi, I'm Rutvij. A resident doctor with interests in internal medicine, oncology, and healthcare delivery. My work brings together training in clinical medicine, social science, public health, and consulting, with the goal of expanding access to high-quality healthcare.
                </p>
                <p className="mb-4">
                  I earned my MD at the Icahn School of Medicine at Mount Sinai. I hold an MPH from the Harvard T.H. Chan School of Public Health, where I focused on healthcare delivery and health systems. I completed my undergraduate studies at Northwestern University, studying Political Science and Economics.
                </p>
                <p className="mb-4">
                  → Outside of medicine, I moonlight as a writer. I also maintain a deep interest in Indian history and politics. Some of my writing can be found below. Other enduring interests include Test cricket, wildlife conservation, literary fiction, and overpriced cups of coffee.
                </p>
                <p className="mb-4">
                  → The header shows the view from the window in the living room of the family home in Breach Candy, Mumbai, a vantage point from which many ideas and dreams have been conceived, discarded, and reimagined.
                </p>
                <div className="mt-6">
                  <Link href="/about-more">
                    <Button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg transition-colors duration-200">
                      More About Me →
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.section>

            {/* Writing Section - Blog Style */}
            <motion.section 
              id="writing"
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-6">Writing</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-primary text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="space-y-10">
                {filteredItems.map((item, index) => (
                  <article key={index} className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Link href={item.link} className="block group mb-4">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <time className="font-medium">{item.date}</time>
                      <span>•</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            </motion.section>

            {/* Research Section */}
            <motion.section 
              id="research"
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-6">Research</h2>

              <div className="prose max-w-none dark:prose-invert mb-6">
                <p className="mb-4">
                  My work examines how health systems can deliver high-quality, equitable care through innovations in clinical practice and policy design. My research centers on two main areas:
                </p>
              </div>

              {/* First Research Area - Callout Box */}
              <div className="mb-6 p-5 bg-sky-50 dark:bg-sky-900/20 border-l-4 border-sky-300 dark:border-sky-600 rounded-r-lg">
                <p className="text-base text-gray-900 dark:text-gray-100 font-semibold mb-2">Technology-Enabled Care Delivery</p>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Developing and implementing technology-enabled models of care that expand access and improve outcomes. My primary focus is now cancer care delivery, informed by my prior work in mental healthcare delivery.
                </p>
              </div>

              {/* Second Research Area - Callout Box */}
              <div className="mb-6 p-5 bg-sky-50 dark:bg-sky-900/20 border-l-4 border-sky-300 dark:border-sky-600 rounded-r-lg">
                <p className="text-base text-gray-900 dark:text-gray-100 font-semibold mb-2">Health System Reform</p>
                <div className="text-base text-gray-700 dark:text-gray-300">
                  <p className="mb-2">
                    Studying how governance and financing structures shape health system performance, including:
                  </p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Strengthening state capacity</li>
                    <li>Innovative financing models such as value-based care</li>
                  </ul>
                </div>
              </div>
              
              <div className="prose max-w-none dark:prose-invert mb-6">
                <p className="mb-6">
                  Academic and peer-reviewed publications can be found at{' '}
                  <a 
                    href="https://scholar.google.com/citations?user=YOUR_ID" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Google Scholar
                  </a>
                </p>
              </div>
            </motion.section>

            {/* Ideas Section */}
            <motion.section 
              id="ideas"
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-6">Ideas</h2>
              <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 text-center italic">
                  Coming soon
                </p>
              </div>
            </motion.section>


          </div>
        </div>
      </div>
    </div>
  );
};

export default TedStyleHome;