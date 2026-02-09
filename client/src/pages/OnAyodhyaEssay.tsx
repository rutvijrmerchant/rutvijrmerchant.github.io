import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock } from "lucide-react";
import { calculateReadingTime } from "@/lib/utils";

const OnAyodhyaEssay = () => {
  const essayText = `
    Today is Vijayadashami. A day for hot jalebi, piety, and reflecting on the many tellings of the Ramayana. Unlike in years past, the celebrations of this year's Dussehra are tied to the events of January — the consecration of the Ram temple in Ayodhya and its accompanying recasting of both Hinduism and the modern Indian republic.

    I first came across Nehru's The Discovery of India in college. Nehru famously writes, "India is an ancient palimpsest on which layer upon layer of thought and reverie had been inscribed, and yet no succeeding layer had completely hidden or erased what had been written previously." Many readers before me have reflected on that sentence; it provides an anchor for the republic's vision of itself. Importantly, this vision was a sharp break from the British understanding of the subcontinent's history. In his History of British India, James Mill divided Indian civilization into three distinct periods — Hindu, Muslim, and British. Each period was seen as a moment of deep cultural rupture. Nehru's understanding of the subcontinent's history rejected Mill's formulation, and ensured that the republic's image of its past at the founding moment constituted an act of intellectual renewal. Our collective imaginations looked back in time and glimpsed the contours of a syncretic civilization that acted as an open system — one that continually expanded to incorporate the practices of those who came to the subcontinent, while simultaneously transforming the practices of the communities who had arrived.

    The Ram temple movement is suffused with the idioms of decolonization, indigenous civilizational renaissance, and the reclamation of India's sacred geography. Yet, it paradoxically reproduces the colonial framing of the subcontinent's past. It also encompasses two illegal acts: the placement of the idol in 1949 and the demolition of the Babri Masjid in 1992. Over time, this movement has reshaped India's image of itself.

    I write all of this as someone with a deep affection for the Ramayana. I grew up with it and came to love it. One of my fondest memories from childhood is sitting in the evening with my dad, reading Tulsidas's Ramcharitmanas together. Our copy was a large tome, wrapped in bright green cloth, and every evening we sat with the book and commenced a little ritual. Dad would read a few chaupais (quatrains), first in the original Awadhi, then in the English translation. Chaupai by chaupai, we worked through the entire text and then reread my favorite parts. While I am no longer particularly religious, I continue to have an intimate relationship with both the Ramayana and the Mahabharata. As Javed Akhtar has repeatedly said, these epics are not only religious texts but also an integral part of our collective cultural inheritance.

    The many Ramayanas that emerged across the subcontinent and South-East Asia present very different versions of Ram: Ram as the human form of Vishnu, the object of devotion and worship; Ram as the human who strove to establish justice within the constraints of his time; Ram as the husband of Sita, who herself was more worthy of reverence; Ram as the flawed human who did not do enough to challenge injustice during his reign. The triumphalism surrounding the temple's consecration in Ayodhya narrows these tellings, and threatens to redefine Hinduism itself. It risks taking Hinduism down the path of becoming a more organized and centralized mass religion, its multiplicities and diffuse regional and familial practices whittled away in the quest for uniformity. The apparent success of this effort to craft a more internally cohesive Hindu identity is troubling.

    Yes, Hinduism is a pagan religion, and its comparatively plural, non-dogmatic character has helped foster the subcontinent's diversity. Yet religious identity has an inherent tendency to subsume other identities, leaving us vulnerable to what Amartya Sen calls "solitarism," the belief that human beings have one overriding identity above all others. As Ambedkar put it, "Religion is for man, and not man for religion."

    Theoretically, Hindutva is the intellectual heir to a crude colonial imagination of India and its praxis has made it an intimate partner of Islamism. It advances a reading of the subcontinent's history strikingly similar to the narrative used to justify the creation of Pakistan. As eighty years of political effort culminate in Ayodhya, consider what has been obscured: an ancient, diffuse religion and the idea of a capacious, plural republic that is a home for all who live in the subcontinent.

    If you identify as Hindu, then there is a special responsibility to think and speak more than the rest. The vandalism underlying the temple's establishment was rooted in a piety borne of a sense of victimhood and grievance, it was a narcissistic show of power rather than an attempt to restore faith. When a religion is mobilized to advance unpalatable ideas, it is primarily incumbent upon those who share that identity to recognize the transformation, understand it, and counter it — in ways both large and small.
  `;
  
  const readingTime = calculateReadingTime(essayText);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Essay Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            On Ayodhya
          </h1>
          
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <time className="font-medium">2024</time>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{readingTime.minutes} min read · {readingTime.words} words</span>
            </div>
          </div>
        </motion.header>

        {/* Essay Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg max-w-none dark:prose-invert prose-gray"
        >
          <p>
            Today is Vijayadashami. A day for hot <em>jalebi,</em> piety, and reflecting on the many tellings of the Ramayana. Unlike in years past, the celebrations of this year's Dussehra are tied to the events of January — the consecration of the Ram temple in Ayodhya and its accompanying recasting of both Hinduism and the modern Indian republic.
          </p>

          <p>
            I first came across Nehru's <em>The Discovery of India</em> in college. Nehru famously writes, <em>"India is an ancient palimpsest on which layer upon layer of thought and reverie had been inscribed, and yet no succeeding layer had completely hidden or erased what had been written previously."</em> Many readers before me have reflected on that sentence; it provides an anchor for the republic's vision of itself. Importantly, this vision was a sharp break from the British understanding of the subcontinent's history. In his <em>History of British India,</em> James Mill divided Indian civilization into three distinct periods — Hindu, Muslim, and British. Each period was seen as a moment of deep cultural rupture. Nehru's understanding of the subcontinent's history rejected Mill's formulation, and ensured that the republic's image of its past at the founding moment constituted an act of intellectual renewal. Our collective imaginations looked back in time and glimpsed the contours of a syncretic civilization that acted as an open system — one that continually expanded to incorporate the practices of those who came to the subcontinent, while simultaneously transforming the practices of the communities who had arrived.
          </p>

          <p>
            The Ram temple movement is suffused with the idioms of decolonization, indigenous civilizational renaissance, and the reclamation of India's sacred geography. Yet, it paradoxically reproduces the colonial framing of the subcontinent's past. It also encompasses two illegal acts: the placement of the idol in 1949 and the demolition of the Babri Masjid in 1992. Over time, this movement has reshaped India's image of itself.
          </p>

          <p>
            I write all of this as someone with a deep affection for the Ramayana. I grew up with it and came to love it. One of my fondest memories from childhood is sitting in the evening with my dad, reading Tulsidas's <em>Ramcharitmanas</em> together. Our copy was a large tome, wrapped in bright green cloth, and every evening we sat with the book and commenced a little ritual. Dad would read a few <em>chaupais</em> (quatrains), first in the original Awadhi, then in the English translation. <em>Chaupai</em> by <em>chaupai,</em> we worked through the entire text and then reread my favorite parts. While I am no longer particularly religious, I continue to have an intimate relationship with both the <em>Ramayana</em> and the <em>Mahabharata.</em> As Javed Akhtar has repeatedly said, these epics are not only religious texts but also an integral part of our collective cultural inheritance.
          </p>

          <p>
            The many Ramayanas that emerged across the subcontinent and South-East Asia present very different versions of Ram: Ram as the human form of Vishnu, the object of devotion and worship; Ram as the human who strove to establish justice within the constraints of his time; Ram as the husband of Sita, who herself was more worthy of reverence; Ram as the flawed human who did not do enough to challenge injustice during his reign. The triumphalism surrounding the temple's consecration in Ayodhya narrows these tellings, and threatens to redefine Hinduism itself. It risks taking Hinduism down the path of becoming a more organized and centralized mass religion, its multiplicities and diffuse regional and familial practices whittled away in the quest for uniformity. The apparent success of this effort to craft a more internally cohesive Hindu identity is troubling.
          </p>

          <p>
            Yes, Hinduism is a pagan religion, and its comparatively plural, non-dogmatic character has helped foster the subcontinent's diversity. Yet religious identity has an inherent tendency to subsume other identities, leaving us vulnerable to what Amartya Sen calls "solitarism," the belief that human beings have one overriding identity above all others. As Ambedkar put it, <em>"Religion is for man, and not man for religion."</em>
          </p>

          <p>
            Theoretically, Hindutva is the intellectual heir to a crude colonial imagination of India and its praxis has made it an intimate partner of Islamism. It advances a reading of the subcontinent's history strikingly similar to the narrative used to justify the creation of Pakistan. As eighty years of political effort culminate in Ayodhya, consider what has been obscured: an ancient, diffuse religion and the idea of a capacious, plural republic that is a home for all who live in the subcontinent.
          </p>

          <p>
            If you identify as Hindu, then there is a special responsibility to think and speak more than the rest. The vandalism underlying the temple's establishment was rooted in a piety borne of a sense of victimhood and grievance, it was a narcissistic show of power rather than an attempt to restore faith. When a religion is mobilized to advance unpalatable ideas, it is primarily incumbent upon those who share that identity to recognize the transformation, understand it, and counter it — in ways both large and small.
          </p>
        </motion.article>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              ← Back to Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OnAyodhyaEssay;