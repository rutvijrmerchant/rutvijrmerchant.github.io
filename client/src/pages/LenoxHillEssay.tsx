import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { calculateReadingTime } from "../lib/utils";

const LenoxHillEssay = () => {
  const essayText = `
    Every Tuesday evening, I exit the 14th Street subway and confront the squat, oblong silhouette of Lenox Health, the West Village outpost of Lenox Hill Hospital. The first time I saw it, the building caught me by surprise—not for its beauty, but for what it stirred: the memory of a poem titled Lenox Hill by Agha Shahid Ali, Kashmir's most celebrated poet. Shahid's mother, for him the living embodiment of all Kashmir, passed away at the Lenox Hill Hospital on 77th Street. Both buildings share the same name, both hold the weight of memory and loss.

    Shahid's dying mother, perhaps delirious, hears sirens and imagines elephants—creatures both ancient and strangely modern. Conflict and war in the Pir Panjal are equally ancient and modern. The mountain range sits at the foot of the Himalayas, running southeast to northwest, separating Jammu from the Kashmir Valley. The coming of the Huns under Mihirakula, the Durrani Afghans, the Sikh conquest, Dogra rule, and the apparently interminable India-Pakistan wars and skirmishes—the Pir Panjal has witnessed them all. Mihirakula was a Hun king known for his cruelty, who ruled over parts of the Indian subcontinent in the 6th century. According to historical accounts, he would force his war elephants off cliffs as a form of twisted entertainment.

    What kind of intoxication and hubris must engulf a man to drive his war elephants off a cliff for sport? It is a senseless act, violence as performative spectacle, revealing the depths of human malevolence. No wonder Shahid's mother conflates the screams of the elephants with New York's sirens—both hint at devastation, both portend suffering.

    All winter, every Tuesday, I've arrived at the flashing red "Emergency" sign of Lenox Health and walked a little faster. Hospitals are places of healing, but also of death. As ambulances sweep down 7th Avenue, their sirens wailing, it becomes hard to shake off a sudden gloom—directed toward the doomed elephants, Shahid's troubled homeland, or the struggles of New York's multitudes.

    Yet last Tuesday, with spring's arrival, the city's sirens and the hospital took on a different quality. The same sirens felt like harbingers of hope, heralding a season ripe with renewal's promise. One World Trade Center loomed in the distance— a symbol of resilience and rebirth, if there ever was one. I stopped and stared at Lenox Health, the same ugly shape now rendered gentler by the warmth of a spring evening. After all, Mihirakula, his men, and his dynasty are forgotten, but elephants still endure in the Himalayan foothills.
  `;
  
  const readingTime = calculateReadingTime(essayText);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mb-8">
              <ArrowLeft size={20} />
              Back to Home
            </button>
          </Link>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-8">
              <p className="text-gray-600 dark:text-gray-400 italic text-center mb-6">
                <strong>(In Lenox Hill Hospital, after surgery,<br />
                my mother said the sirens sounded like the<br />
                elephants of Mihiragula when his men drove<br />
                them off cliffs in the Pir Panjal Range.)</strong>
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                <em>- Agha Shahid Ali</em>
              </p>
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

            <div className="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
              <p>
                Every Tuesday evening, I exit the 14th Street subway and confront the squat, oblong silhouette of Lenox Health, the West Village outpost of Lenox Hill Hospital. The first time I saw it, the building caught me by surprise—not for its beauty, but for what it stirred: the memory of a poem titled <em>Lenox Hill</em> by Agha Shahid Ali, Kashmir's most celebrated poet. Shahid's mother, for him the living embodiment of all Kashmir, passed away at the Lenox Hill Hospital on 77th Street. Both buildings share the same name, both hold the weight of memory and loss.
              </p>

              <p>
                Shahid's dying mother, perhaps delirious, hears sirens and imagines elephants—creatures both ancient and strangely modern. Conflict and war in the Pir Panjal are equally ancient and modern. The mountain range sits at the foot of the Himalayas, running southeast to northwest, separating Jammu from the Kashmir Valley. The coming of the Huns under Mihirakula, the Durrani Afghans, the Sikh conquest, Dogra rule, and the apparently interminable India-Pakistan wars and skirmishes—the Pir Panjal has witnessed them all. Mihirakula was a Hun king known for his cruelty, who ruled over parts of the Indian subcontinent in the 6th century. According to historical accounts, he would force his war elephants off cliffs as a form of twisted entertainment.
              </p>

              <p>
                What kind of intoxication and hubris must engulf a man to drive his war elephants off a cliff for sport? It is a senseless act, violence as performative spectacle, revealing the depths of human malevolence. No wonder Shahid's mother conflates the screams of the elephants with New York's sirens—both hint at devastation, both portend suffering.
              </p>

              <p>
                All winter, every Tuesday, I've arrived at the flashing red "Emergency" sign of Lenox Health and walked a little faster. Hospitals are places of healing, but also of death. As ambulances sweep down 7th Avenue, their sirens wailing, it becomes hard to shake off a sudden gloom—directed toward the doomed elephants, Shahid's troubled homeland, or the struggles of New York's multitudes.
              </p>

              <p>
                Yet last Tuesday, with spring's arrival, the city's sirens and the hospital took on a different quality. The same sirens felt like harbingers of hope, heralding a season ripe with renewal's promise. One World Trade Center loomed in the distance— a symbol of resilience and rebirth, if there ever was one. I stopped and stared at Lenox Health, the same ugly shape now rendered gentler by the warmth of a spring evening. After all, Mihirakula, his men, and his dynasty are forgotten, but elephants still endure in the Himalayan foothills.
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default LenoxHillEssay;