import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { calculateReadingTime } from "../lib/utils";

const ShiftingSandsEssay = () => {
  const essayText = `
    Another swing from Tatenda Taibu, another boundary. In the space of a few minutes, the Zimbabwean teenager had silenced the highly partisan, largely Pakistani crowd. Only my father was up on his feet, cheering and clapping, his voice magnified by the silence that had descended on the stands. A group of men to our right, evidently Pathans, glared balefully. "Kaunsa mulk?" (Which country?) asked the nearest one, his voice conveying displeasure and more than a hint of threat. "India," my father replied, his tone unwavering.

    A stony silence followed as Taibu continued to swing merrily. My father and I were only separated from the knot of men by three garishly painted bucket seats, but a chasm had opened.

    We were at Sharjah Stadium, and Pakistan were playing Zimbabwe in the final of the Cherry Blossom Cup in 2003. I was nine years old, and a fan of Mohammad Sami — him of the short, shuffling run-up and searing pace, and, of course, the Pakistani fast bowler's birthright: magnificent, flowing locks.

    It had taken a lot of pleading to convince my father to drive from Dubai to watch Pakistan play. As the desert crept closer on our right and the narrower streets of Sharjah came into view, he had grumbled continuously. Now that he was there, he intended to take pleasure in every moment of Pakistan's struggles.

    Since the two countries were carved out of the Indian subcontinent in 1947, India and Pakistan have fought three wars. Regular border skirmishes continue to this day. In the worldview of the Pakistani state, anti-Indianism is the fulcrum of the idea of Pakistan. Likewise, the changing nature of the Indian state has made dislike for Pakistan a key component of being labelled a patriot. Delhi and Islamabad frown at each other across the Line of Control, trading barbs, incendiary rhetoric, and the occasional missile.

    Thirteen years on from that evening at Sharjah, I found myself watching a titanic India-Pakistan battle in the Asia Cup. I had moved to the United States by then and was crammed into a small room on a university campus with 20 other students, all of us riveted to a fuzzy livestream. Across the world in Dhaka, Mohammad Amir was running in to Virat Kohli, and the outcome of the game hinged on the next six balls.

    Amir did what he does, slanting the ball across Kohli at pace, before bending it back impossibly late. With an exaggerated shuffle, Kohli shaped to flick and was hit in front of the stumps. The room exploded. A wall of noise commanded that Kohli be sent on his way. The shake of the head that followed from the umpire was met with disbelief, and then anger, the features of every Pakistani in the room twisted with rage. Sitting next to the only other Indian in that group of students, I felt the temperature rise.

    Yet, under the garb of one-upmanship, there is a rich tapestry of intimacy and unity that sport breeds. This aspect of sport is often overlooked, and it comes to the fore only in isolated moments. That image of Flintoff consoling Lee after the Edgbaston Test of 2005; the standing ovation given by the Chennai crowd to Wasim Akram's Pakistanis in 1999; that football match between the English and the Germans during the World War I Christmas truce — a glimmer of life amid the drudgery of war.

    Let's return to that evening at Sharjah Stadium. Zimbabwe had been bundled out cheaply and any latent tension in the crowd had dissipated. Cricket had become the sideshow. The crowd loosened up, conversing and enjoying their night out. The occasional Pakistan Zindabad (Long Live Pakistan) reverberated across the stadium, but it lacked fervor. My father and the group of Pathans had struck up conversation, and with the easy intimacy that often characterizes meetings between people from the subcontinent, they were soon chatting about everything from the relative merits of different biryanis to the sorry state of Pakistani batting.

    In an hour, a sense of community was built, enabling a feeling of contentment that lasted throughout my ride home. This is what a sporting experience can do; the best moments foster intimate connections, whether with a group of 11 individuals standing on a field or one's fellow spectators.

    The sense of community is even more pronounced when one is a participant, as opposed to just a spectator. Although international sport stars represent their nation, the shared quest for excellence in a chosen skill trumps narrow national interests. When confounded repeatedly by spin bowling in Bangladesh, Kevin Pietersen reached out to Rahul Dravid for help. India's No.3 wrote back and provided a detailed manual on how Pietersen should look to improve. Two years later in 2012, Pietersen was batting against India in the very conditions that had troubled him, and he made a magnificent 186.

    We live in a world where a number of the old certainties are crumbling. Nation, home, and community are all now seen as accidents of birth, with people looking to root their identity in a diversity that goes beyond their immediate surroundings. In such a context, sport can represent a unifying force — pulling together disparate groups within a country behind a single flag, and drawing together people from different countries behind a shared appreciation for a skill that transcends boundaries.

    The glamorous heyday of cricket in Sharjah is long gone. Yet the stadium leaves a legacy beyond runs scored and wickets taken. The unique experience of attending India-Pakistan clashes amid Sharjah's bipartisan crowd meant that a generation of fans instinctively learned that there was more to the sport than jingoism. The unity fostered by a shared love for sport meant that Sharjah was the setting for Indians and Pakistanis to overcome inherited tensions and connect on a human level.
  `;
  
  const readingTime = calculateReadingTime(essayText);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </motion.button>
          </Link>

          <article className="prose prose-lg max-w-none dark:prose-invert">
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Shifting Sands
              </h1>
              
              <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-primary">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Publication:</strong> This article was published in the 4th issue of the Pinch Hitter, an interactive digital magazine published for a short while by Wisden, which aimed to support freelance cricket writers during the Covid-19 pandemic.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  <a 
                    href="https://www.thenightwatchman.net/pinch-hitter/issue-4/4-Sharjah_PH4_1.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline"
                  >
                    View the published version here
                  </a>
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Text has been reproduced below.
                </p>
              </div>
              
              <time className="text-gray-500 dark:text-gray-500 mb-4">2024</time>
              
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
            </header>

            <div className="text-gray-700 dark:text-gray-300 space-y-6 leading-relaxed">
              <h2 className="text-2xl font-bold mb-4">Sharjah: A Memory of Cricket, Identity, and Connection</h2>
              
              <p>
                Another swing from Tatenda Taibu, another boundary. In the space of a few minutes, the Zimbabwean teenager had silenced the highly partisan, largely Pakistani crowd. Only my father was up on his feet, cheering and clapping, his voice magnified by the silence that had descended on the stands. A group of men to our right, evidently Pathans, glared balefully. "Kaunsa mulk?" (Which country?) asked the nearest one, his voice conveying displeasure and more than a hint of threat. "India," my father replied, his tone unwavering.
              </p>

              <p>
                A stony silence followed as Taibu continued to swing merrily. My father and I were only separated from the knot of men by three garishly painted bucket seats, but a chasm had opened.
              </p>

              <p>
                We were at Sharjah Stadium, and Pakistan were playing Zimbabwe in the final of the Cherry Blossom Cup in 2003. I was nine years old, and a fan of Mohammad Sami — him of the short, shuffling run-up and searing pace, and, of course, the Pakistani fast bowler's birthright: magnificent, flowing locks.
              </p>

              <p>
                It had taken a lot of pleading to convince my father to drive from Dubai to watch Pakistan play. As the desert crept closer on our right and the narrower streets of Sharjah came into view, he had grumbled continuously. Now that he was there, he intended to take pleasure in every moment of Pakistan's struggles.
              </p>

              <p>
                Since the two countries were carved out of the Indian subcontinent in 1947, India and Pakistan have fought three wars. Regular border skirmishes continue to this day. In the worldview of the Pakistani state, anti-Indianism is the fulcrum of the idea of Pakistan. Likewise, the changing nature of the Indian state has made dislike for Pakistan a key component of being labelled a patriot. Delhi and Islamabad frown at each other across the Line of Control, trading barbs, incendiary rhetoric, and the occasional missile.
              </p>

              <p>
                Thirteen years on from that evening at Sharjah, I found myself watching a titanic India-Pakistan battle in the Asia Cup. I had moved to the United States by then and was crammed into a small room on a university campus with 20 other students, all of us riveted to a fuzzy livestream. Across the world in Dhaka, Mohammad Amir was running in to Virat Kohli, and the outcome of the game hinged on the next six balls.
              </p>

              <p>
                Amir did what he does, slanting the ball across Kohli at pace, before bending it back impossibly late. With an exaggerated shuffle, Kohli shaped to flick and was hit in front of the stumps. The room exploded. A wall of noise commanded that Kohli be sent on his way. The shake of the head that followed from the umpire was met with disbelief, and then anger, the features of every Pakistani in the room twisted with rage. Sitting next to the only other Indian in that group of students, I felt the temperature rise.
              </p>

              <p>
                Yet, under the garb of one-upmanship, there is a rich tapestry of intimacy and unity that sport breeds. This aspect of sport is often overlooked, and it comes to the fore only in isolated moments. That image of Flintoff consoling Lee after the Edgbaston Test of 2005; the standing ovation given by the Chennai crowd to Wasim Akram's Pakistanis in 1999; that football match between the English and the Germans during the World War I Christmas truce — a glimmer of life amid the drudgery of war.
              </p>

              <p>
                Let's return to that evening at Sharjah Stadium. Zimbabwe had been bundled out cheaply and any latent tension in the crowd had dissipated. Cricket had become the sideshow. The crowd loosened up, conversing and enjoying their night out. The occasional Pakistan Zindabad (Long Live Pakistan) reverberated across the stadium, but it lacked fervor. My father and the group of Pathans had struck up conversation, and with the easy intimacy that often characterizes meetings between people from the subcontinent, they were soon chatting about everything from the relative merits of different biryanis to the sorry state of Pakistani batting.
              </p>

              <p>
                In an hour, a sense of community was built, enabling a feeling of contentment that lasted throughout my ride home. This is what a sporting experience can do; the best moments foster intimate connections, whether with a group of 11 individuals standing on a field or one's fellow spectators.
              </p>

              <p>
                The sense of community is even more pronounced when one is a participant, as opposed to just a spectator. Although international sport stars represent their nation, the shared quest for excellence in a chosen skill trumps narrow national interests. When confounded repeatedly by spin bowling in Bangladesh, Kevin Pietersen reached out to Rahul Dravid for help. India's No.3 wrote back and provided a detailed manual on how Pietersen should look to improve. Two years later in 2012, Pietersen was batting against India in the very conditions that had troubled him, and he made a magnificent 186.
              </p>

              <p>
                We live in a world where a number of the old certainties are crumbling. Nation, home, and community are all now seen as accidents of birth, with people looking to root their identity in a diversity that goes beyond their immediate surroundings. In such a context, sport can represent a unifying force — pulling together disparate groups within a country behind a single flag, and drawing together people from different countries behind a shared appreciation for a skill that transcends boundaries.
              </p>

              <p>
                The glamorous heyday of cricket in Sharjah is long gone. Yet the stadium leaves a legacy beyond runs scored and wickets taken. The unique experience of attending India-Pakistan clashes amid Sharjah's bipartisan crowd meant that a generation of fans instinctively learned that there was more to the sport than jingoism. The unity fostered by a shared love for sport meant that Sharjah was the setting for Indians and Pakistanis to overcome inherited tensions and connect on a human level.
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default ShiftingSandsEssay;