import { motion } from "framer-motion";
import { Link } from "wouter";
import { calculateReadingTime } from "../lib/utils";

const KitsuneEssay = () => {
  const essayText = `
    If April is the cruelest month, as T.S Eliot wrote in The Waste Land, September is the month where life's cup overflows with possibility. Especially in New York City. The cloying humidity of July and August recedes, the early morning and late evening chill is invigorating, and on sunny days the skies are a brilliant blue. Sweater weather.
    
    I am sitting and working at the street side tables outside Cafe Kitsune in the West Village. Cafe Kitsune is a Japanese-French collaboration, part wine bar and part cafe, where the small bites have a distinctly Japanese flavor. At first glance, it is an ode to rootless cosmopolitanism, the lives of the elites who drift from one metropolis to another, chic district to chic district. New York, Dubai, London, Mexico City, all in the space of a year. The lanes and street corners of the Village are dotted with boutique establishments that advertising the rituals of these elites: artisanal high end coffee, workout classes of all shades and stripes that seduce you to hyper-optimize your health, trendy dining experiences. Kitsune's patrons are elegantly dressed and strikingly beautiful. Snatches of Arabic, French, English, Spanish, and an Eastern European language I cannot identify, float on the breeze. For all this diversity, these patrons are remarkable only in their homogeneity. They are all 'global citizens,' kitted out in oversized white t-shirts, Alo and Lululemon pants, ON shoes, spending their months flitting between Roma Norte, West Village, and Santa Monica, with similar conceptions of the good life.
    
    The West Village's tree-clad cobblestone streets and stately townhouses are an oasis of calm amid the frenzy of Manhattan. Dusk is now settling, and there is a rising buzz on Hudson Street as visitors and residents wend their way towards an evening of revelry. Seated here, the mid 20th century bohemian sensibility of the Village is conspicuous only by its absence. After all, this neighborhood was the spiritual home of the anti-conformist Beatnik movement led by Jack Kerouac.
    
    If you look hard enough, the iconography of Cafe Kitsune retains a glimpse of the unconventional. Kitsune is the Japanese word for fox. The kitsune are impish creatures that flit between the physical and other more subtle realms, shapeshifters who are servants of the Shinto deity Inari. Stories starring the kitsune are peppered throughout Japanese folklore, with the interventions of these creatures ranging from acts of benevolence to a full-scale malevolent possession of the unwary. In the cultural imagination of Japan, kitsune are powerful beings, emissaries of significant unforeseen events. This is unsurprising. In older cultures and civilizations unfettered by the elevation of reason, you see a greater respect for potential worlds beyond the grasp of the senses or the intellect. Magical characters often rose from oral recitations and the pages of old texts, and wove themselves into our lives. Now, such characters exist as mere curiosities in the memories of secular moderns, little more than a reminder of a way of moving through the world that is dying. Though it is ubiquitous in the cafe's merchandise, the kitsune is out of step with the present tastes of the Village and its inhabitants.
    
    To believe in a hidden world populated by impish spirit animals, you require a capacity for radical imagination. For its many continued charms, I wonder if the Village lost this capacity to serve as a center for the reimagination of norms, ideas, and worlds when the bohemians and iconoclasts were pushed out to deep Brooklyn. Only the impish kitsune serve as a subtle reminder of a different past, a time when the bohemian and the unconventional prevailed in this neighborhood.
  `;
  
  const readingTime = calculateReadingTime(essayText);
  
  return (
    <div className="pt-24 pb-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <a href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Back to Home
            </a>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Kitsune</h1>
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              <time dateTime="2023-09-20">September 20, 2023</time> · New York City
            </div>
            
            {/* Reading Time Estimator */}
            <div className="mb-8 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span>
                  {readingTime.minutes} min read · {readingTime.words} words
                </span>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p>
                If April is the cruelest month, as T.S Eliot wrote in The Waste Land, September is the month where life's cup overflows with possibility. Especially in New York City. The cloying humidity of July and August recedes, the early morning and late evening chill is invigorating, and on sunny days the skies are a brilliant blue. Sweater weather.
              </p>
              <p>
                I am sitting and working at the street side tables outside Cafe Kitsune in the West Village. Cafe Kitsune is a Japanese-French collaboration, part wine bar and part cafe, where the small bites have a distinctly Japanese flavor. At first glance, it is an ode to rootless cosmopolitanism, the lives of the elites who drift from one metropolis to another, chic district to chic district. New York, Dubai, London, Mexico City, all in the space of a year. The lanes and street corners of the Village are dotted with boutique establishments that advertising the rituals of these elites: artisanal high end coffee, workout classes of all shades and stripes that seduce you to hyper-optimize your health, trendy dining experiences. Kitsune's patrons are elegantly dressed and strikingly beautiful. Snatches of Arabic, French, English, Spanish, and an Eastern European language I cannot identify, float on the breeze. For all this diversity, these patrons are remarkable only in their homogeneity. They are all 'global citizens,' kitted out in oversized white t-shirts, Alo and Lululemon pants, ON shoes, spending their months flitting between Roma Norte, West Village, and Santa Monica, with similar conceptions of the good life.
              </p>
              <p>
                The West Village's tree-clad cobblestone streets and stately townhouses are an oasis of calm amid the frenzy of Manhattan. Dusk is now settling, and there is a rising buzz on Hudson Street as visitors and residents wend their way towards an evening of revelry. Seated here, the mid 20th century bohemian sensibility of the Village is conspicuous only by its absence. After all, this neighborhood was the spiritual home of the anti-conformist Beatnik movement led by Jack Kerouac.
              </p>
              <p>
                If you look hard enough, the iconography of Cafe Kitsune retains a glimpse of the unconventional. <em>Kitsune</em> is the Japanese word for fox. The <em>kitsune</em> are impish creatures that flit between the physical and other more subtle realms, shapeshifters who are servants of the Shinto deity Inari. Stories starring the <em>kitsune</em> are peppered throughout Japanese folklore, with the interventions of these creatures ranging from acts of benevolence to a full-scale malevolent possession of the unwary. In the cultural imagination of Japan, kitsune are powerful beings, emissaries of significant unforeseen events. This is unsurprising. In older cultures and civilizations unfettered by the elevation of reason, you see a greater respect for potential worlds beyond the grasp of the senses or the intellect. Magical characters often rose from oral recitations and the pages of old texts, and wove themselves into our lives. Now, such characters exist as mere curiosities in the memories of secular moderns, little more than a reminder of a way of moving through the world that is dying. Though it is ubiquitous in the cafe's merchandise, the kitsune is out of step with the present tastes of the Village and its inhabitants.
              </p>
              <p>
                To believe in a hidden world populated by impish spirit animals, you require a capacity for radical imagination. For its many continued charms, I wonder if the Village lost this capacity to serve as a center for the reimagination of norms, ideas, and worlds when the bohemians and iconoclasts were pushed out to deep Brooklyn. Only the impish <em>kitsune</em> serve as a subtle reminder of a different past, a time when the bohemian and the unconventional prevailed in this neighborhood.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default KitsuneEssay;