import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, Linkedin, GraduationCap } from "lucide-react";
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
        {/* Name & Credentials */}
        <motion.header
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold mb-4 tracking-tight">Rutvij R. Merchant</h1>
          <div className="text-gray-600 dark:text-gray-400 mb-6 space-y-1">
            <p className="text-base font-semibold text-gray-800 dark:text-gray-200">MD MPH</p>
            <p className="text-base">Internal Medicine Resident, Beth Israel Deaconess Medical Center</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">Physician · Researcher · Writer</p>
          </div>
        </motion.header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Navigation */}
          <div className="md:col-span-1 md:border-r md:border-gray-300 md:dark:border-gray-600 md:pr-8">
            <nav className="sticky top-8">
              <ul className="space-y-3 text-sm">
                {[
                  { href: "#about", label: "About" },
                  { href: "#research", label: "Research" },
                  { href: "#writing", label: "Writing" },
                  { href: "#ideas", label: "Ideas" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Icons */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex gap-4 items-center">
                  <a
                    href="mailto:rutvij.merchant@gmail.com"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    title="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rutvij-merchant-0a687588/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=ju_E5LwAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                    title="Google Scholar"
                  >
                    <GraduationCap size={18} />
                  </a>
                </div>
              </div>
            </nav>
          </div>

          {/* Right Content */}
          <div className="md:col-span-3 space-y-16">

            {/* About Section */}
            <motion.section
              id="about"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold mb-5 uppercase tracking-widest text-gray-500 dark:text-gray-400">About</h2>
              <div className="space-y-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Hi, I'm Rutvij. A resident doctor with interests in internal medicine, oncology, and healthcare delivery. My work brings together training in clinical medicine, social science, public health, and consulting, with the goal of expanding access to high-quality care.
                </p>
                <p>
                  I received my MD from the Icahn School of Medicine at Mount Sinai and my MPH from the Harvard T.H. Chan School of Public Health. I completed my undergraduate studies at Northwestern University where I studied Political Science and Economics.
                </p>
                <p>
                  Outside of medicine, I moonlight as a writer. I also maintain a deep interest in Indian history and politics. Other enduring interests include Test cricket, wildlife conservation, literary fiction, and overpriced cups of coffee.
                </p>
                <p>
                  The header shows the view from the family home in Breach Candy, Mumbai, a vantage point from which many dreams have been conceived, discarded, and reimagined.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about-more"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white border-b border-gray-400 dark:border-gray-500 hover:border-gray-900 dark:hover:border-white transition-colors pb-0.5"
                  >
                    More about me →
                  </Link>
                </div>
              </div>
            </motion.section>

            {/* Research Section */}
            <motion.section
              id="research"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold mb-5 uppercase tracking-widest text-gray-500 dark:text-gray-400">Research</h2>

              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                My research examines how health systems can deliver high-quality, equitable care through innovations in clinical practice and policy design. This work is focused on two complementary areas:
              </p>

              <div className="space-y-4 mb-8">
                <div className="p-5 border-l-2 border-gray-900 dark:border-gray-200 bg-gray-50 dark:bg-gray-800/40 rounded-r-lg">
                  <p className="text-base font-semibold text-gray-900 dark:text-white mb-1.5">Technology-Enabled Care Delivery</p>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Developing and implementing technology-enabled models of care that expand access and improve outcomes. My primary focus is cancer care delivery, informed by prior work in global mental health.
                  </p>
                </div>

                <div className="p-5 border-l-2 border-gray-900 dark:border-gray-200 bg-gray-50 dark:bg-gray-800/40 rounded-r-lg">
                  <p className="text-base font-semibold text-gray-900 dark:text-white mb-1.5">Health System Reform</p>
                  <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    Examining how health system design shapes the ability of systems to deliver high-quality, equitable care. Areas of interest include strengthening state capacity to govern health systems and studying alternative value-based payment models.
                  </p>
                </div>
              </div>

              <p className="text-base text-gray-600 dark:text-gray-400">
                Academic and peer-reviewed publications are available on{" "}
                <a
                  href="https://scholar.google.com/citations?user=ju_E5LwAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-900 dark:text-white border-b border-gray-400 dark:border-gray-500 hover:border-gray-900 dark:hover:border-white transition-colors"
                >
                  Google Scholar
                </a>
                .
              </p>
            </motion.section>

            {/* Writing Section */}
            <motion.section
              id="writing"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold mb-5 uppercase tracking-widest text-gray-500 dark:text-gray-400">Writing</h2>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Writing Items */}
              <div className="space-y-8">
                {filteredItems.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400 italic">No pieces in this category yet.</p>
                ) : (
                  filteredItems.map((item, index) => (
                    <article key={index} className="border-b border-gray-100 dark:border-gray-800 pb-8 last:border-0">
                      <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <time>{item.date}</time>
                        <span>·</span>
                        <span className="uppercase tracking-wide">{item.category}</span>
                      </div>
                      <Link href={item.link} className="block group mb-2">
                        <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.excerpt}
                      </p>
                      <Link
                        href={item.link}
                        className="inline-block mt-3 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                      >
                        Read →
                      </Link>
                    </article>
                  ))
                )}
              </div>
            </motion.section>

            {/* Ideas Section */}
            <motion.section
              id="ideas"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-lg font-semibold mb-5 uppercase tracking-widest text-gray-500 dark:text-gray-400">Ideas</h2>
              <p className="text-base text-gray-500 dark:text-gray-400 italic">Coming soon.</p>
            </motion.section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TedStyleHome;
