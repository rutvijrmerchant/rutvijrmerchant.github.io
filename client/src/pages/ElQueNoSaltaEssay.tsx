import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { calculateReadingTime } from "../lib/utils";

const ElQueNoSaltaEssay = () => {
  const essayText = `
    He who does not jump is English. This is one of the most commonly heard chants at an Argentinian football game. Where does this special love for the English come from?

    My first World Cup was in 2002. The first football match I ever watched was Argentina v England in Sapporo, Japan. It was a game in which David Beckham redeemed himself, four years after the debacle of Saint-Étienne, and sent England to the next round after scoring a penalty. At the time I knew nothing of what had happened in Saint-Étienne, or of the Hand of Diego, or of the most miraculous goal in World Cup history that followed it. I didn't know this was Bielsa's Argentina, a team that had come into the tournament as favourites. I probably couldn't even have placed Argentina on a map. But something drew me to Argentina. I think I fell in love with the culture and style of Argentine football — first with the myth of Diego Maradona, then with the reality of Lionel Messi.

    Following a team that is rooted in a place where you have no ties gives you a special glimpse into the imagination of a people that are not your own. Fiction does this too. A good literary novel slips you into the consciousness of another society, and you absorb an understanding of the society's collective myths, its dreams, and its scars.

    In Argentine football, the most powerful collective myth is the cultural and historical weight attached to the playmaker, the number 10. Argentina accords a unique importance to the maverick figure blessed with superior technique, skill, and vision who floats between the lines. Football is about beauty, creativity, and improvisation. No country has invested so much in the ideal of the number 10, or produced so many legendary number 10s. Omar Sivori, Ricardo Bochini, Diego Maradona, Pablo Aimar, Ariel Ortega, Juan Roman Riquelme, Lionel Messi, the list is long and regal. In the Argentine imagination, on a potrero somewhere in the country is the next number 10 on the production line, touched by the gods, head up with the ball at his feet, ready to dribble past opponents towards glory.

    The second idea is the embrace of the fight on the pitch, while throwing in a touch of pragmatic deception. Jorge Valdano, a World Cup winner in 1986, and a striker with the air of a philosopher, espoused a deeply romantic conception of how to play football. Yet, he also said in an interview to Der Spiegel that "the pitch is a jungle." The practice of the beautiful game is allied with a combative warrior mentality, the willingness to suffer for the shirt, and a 'fistful' of trickery. Most people who grow up in the Global South would recognize and respect these qualities, they are embedded in our societies. In an environment where you have to struggle continuously to advance, street smarts and fight are elevated, and while there may be a general recognition of the need for order, there is a continuous process of negotiation with the rules imposed by the system.

    That said, this is all a post-facto attempt at rationalisation. Like most things you love in life, I'm not sure that you really choose who you support. I felt sad in 2002 when Claudio López kept cutting in and hitting the side netting against Sweden, and when the 2006 side assembled by José Pékerman went out despite producing some of the most beautiful football in the tournament. I have been an Argentina supporter ever since.

    In 2001, Diego Maradona was speaking at La Bombonera, the home of his beloved club, Boca Juniors. He talks about his past and says, 'I made mistakes and I paid for them, but…la pelota, la pelota no se mancha.' The ball…the ball does not stain. Corruption, political interference, and corporatization have always swirled around football, but none of that has touched the relationship of the player with the ball. That has stayed pure, a precious and enduring bond. Yet, when it comes to Argentina v England, the ball has accumulated both memory and meaning.

    In the 1966 World Cup quarterfinal, England played Argentina at Wembley. Antonio Rattin, the Argentina captain, was sent off by the German referee for reasons that have never been ascertained. Apparently, Rattin had engaged in 'violence of the tongue' although Rattin and the referee spoke different languages and could not understand what they said to each other. Rattin was so confused at his sending off that he protested by sitting down on the red carpet in front of the Royal Box that was reserved for the Queen while being pelted with beer and food by the irate fans. The fracas around his dismissal led to the creation of the current system of yellow and red cards. After the game, the England manager, Sir Alf Ramsey, called the Argentines 'animals.'

    In 1982, Argentina invaded the Falkland Islands, a British territory in the South Atlantic. The war was short and decisive. It ended in 74 days with Argentine surrender and the islands returned to British control. This war in the Falklands, or the Islas Malvinas as they are known in Argentina, barely registers in the British consciousness. In Argentina, however, it represented a national humiliation.

    Four years after the disaster of the Malvinas, the two countries met again in a World Cup quarterfinal in the Azteca. Diego punched in the first goal, a brazen, spontaneous act of madness, somehow pulled off right in front of the linesman and referee. Four minutes later, he scored the Goal of the Century. The move started when he picked up the ball in his own half, dribbled at speed past five English defenders, then dummied the goalkeeper, Peter Shilton, and finished into an empty net, all accompanied by the soundtrack of Víctor Hugo Morales sobbing into his microphone.

    The Goal of the Century had a precursor. In 1980, Argentina played England in a friendly at Wembley. They lost 3-1 but Diego enacted a play that was eerily similar to the one in 1986. He picks up the ball in midfield, dribbles with an explosive burst of pace past four English defenders, and when confronted by an onrushing Ray Clemence, pulls the trigger on the shot and ends up sidefooting wide of the goal. After the game, Diego's 10-year old brother, Hugo, told him that he had made a mistake. He should have dribbled around the goalkeeper too. At the Azteca, Diego's subconscious remembered. He checked, dummied Shilton, and then finished, just as his brother had advised him six years earlier.

    In 1998, England and Argentina met again in the round of 16. Michael Owen, terrifyingly good for an 18-year old, scored one of the great World Cup goals. Then, early in the second half, Diego Simeone fouled David Beckham, Beckham kicked at him in response, and Simeone tumbled to the ground as if he had been assaulted. Beckham was shown a straight red and Argentina won on penalties. Beckham became a pantomime villain in England for the rest of that summer, and his redemption only came four years later in Sapporo.

    In Argentina and England, football is embedded in public life in a way that is true of few other countries. This is a rivalry rooted in the tales of Rattin and Ramsey, Maradona and the Malvinas, Simeone and Saint Etienne. Grievances have been nursed and passed on, from generation to generation.

    This version of England is the better side. The team is younger, with greater depth, more talent and pace on the wings, and hungry for success. And it has Jude. England has historically shackled and distrusted its creative talents, as the careers of Glenn Hoddle, John Barnes, and Paul Gascoigne can attest. That has changed in this World Cup with the freedom given to Bellingham.

    But, as Valdano said, the pitch is a jungle. This fixture always produces a unique kind of madness and chaos. On Wednesday, for the first and last time, Messi will encounter this chaos.

    El que no salta, es un inglés. And who, outside England, actually wants to support England? So, jump, and keep jumping.
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
                El Que No Salta, Es Un Inglés
              </h1>

              <time className="text-gray-500 dark:text-gray-500 mb-4">2026</time>

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
              <p>
                <em>He who does not jump is English.</em> This is one of the most commonly heard chants at an Argentinian football game. Where does this special love for the English come from?
              </p>

              <h2 className="text-2xl font-bold mb-4">Sapporo</h2>

              <p>
                My first World Cup was in 2002. The first football match I ever watched was Argentina v England in Sapporo, Japan. It was a game in which David Beckham redeemed himself, four years after the debacle of Saint-Étienne, and sent England to the next round after scoring a penalty. At the time I knew nothing of what had happened in Saint-Étienne, or of the Hand of Diego, or of the most miraculous goal in World Cup history that followed it. I didn't know this was Bielsa's Argentina, a team that had come into the tournament as favourites. I probably couldn't even have placed Argentina on a map. But something drew me to Argentina. I think I fell in love with the culture and style of Argentine football — first with the myth of Diego Maradona, then with the reality of Lionel Messi.
              </p>

              <h2 className="text-2xl font-bold mb-4">Sport and Myth</h2>

              <p>
                Following a team that is rooted in a place where you have no ties gives you a special glimpse into the imagination of a people that are not your own. Fiction does this too. A good literary novel slips you into the consciousness of another society, and you absorb an understanding of the society's collective myths, its dreams, and its scars.
              </p>

              <p>
                In Argentine football, the most powerful collective myth is the cultural and historical weight attached to the playmaker, the number 10. Argentina accords a unique importance to the maverick figure blessed with superior technique, skill, and vision who floats between the lines. Football is about beauty, creativity, and improvisation. No country has invested so much in the ideal of the number 10, or produced so many legendary number 10s. Omar Sivori, Ricardo Bochini, Diego Maradona, Pablo Aimar, Ariel Ortega, Juan Roman Riquelme, Lionel Messi, the list is long and regal. In the Argentine imagination, on a <em>potrero</em> somewhere in the country is the next number 10 on the production line, touched by the gods, head up with the ball at his feet, ready to dribble past opponents towards glory.
              </p>

              <p>
                The second idea is the embrace of the fight on the pitch, while throwing in a touch of pragmatic deception. Jorge Valdano, a World Cup winner in 1986, and a striker with the air of a philosopher, espoused a deeply romantic conception of how to play football. Yet, he also said in an interview to Der Spiegel that "the pitch is a jungle." The practice of the beautiful game is allied with a combative warrior mentality, the willingness to suffer for the shirt, and a 'fistful' of trickery. Most people who grow up in the Global South would recognize and respect these qualities, they are embedded in our societies. In an environment where you have to struggle continuously to advance, street smarts and fight are elevated, and while there may be a general recognition of the need for order, there is a continuous process of negotiation with the rules imposed by the system.
              </p>

              <p>
                That said, this is all a post-facto attempt at rationalisation. Like most things you love in life, I'm not sure that you really choose who you support. I felt sad in 2002 when Claudio López kept cutting in and hitting the side netting against Sweden, and when the 2006 side assembled by José Pékerman went out despite producing some of the most beautiful football in the tournament. I have been an Argentina supporter ever since.
              </p>

              <h2 className="text-2xl font-bold mb-4">Memory</h2>

              <p>
                In 2001, Diego Maradona was speaking at La Bombonera, the home of his beloved club, Boca Juniors. He talks about his past and says, 'I made mistakes and I paid for them, but…la pelota, la pelota no se mancha.' The ball…the ball does not stain. Corruption, political interference, and corporatization have always swirled around football, but none of that has touched the relationship of the player with the ball. That has stayed pure, a precious and enduring bond. Yet, when it comes to Argentina v England, the ball has accumulated both memory and meaning.
              </p>

              <h2 className="text-2xl font-bold mb-4">Wembley</h2>

              <p>
                In the 1966 World Cup quarterfinal, England played Argentina at Wembley. Antonio Rattin, the Argentina captain, was sent off by the German referee for reasons that have never been ascertained. Apparently, Rattin had engaged in 'violence of the tongue' although Rattin and the referee spoke different languages and could not understand what they said to each other. Rattin was so confused at his sending off that he protested by sitting down on the red carpet in front of the Royal Box that was reserved for the Queen while being pelted with beer and food by the irate fans. The fracas around his dismissal led to the creation of the current system of yellow and red cards. After the game, the England manager, Sir Alf Ramsey, called the Argentines 'animals.'
              </p>

              <h2 className="text-2xl font-bold mb-4">Azteca</h2>

              <p>
                In 1982, Argentina invaded the Falkland Islands, a British territory in the South Atlantic. The war was short and decisive. It ended in 74 days with Argentine surrender and the islands returned to British control. This war in the Falklands, or the Islas Malvinas as they are known in Argentina, barely registers in the British consciousness. In Argentina, however, it represented a national humiliation.
              </p>

              <p>
                Four years after the disaster of the Malvinas, the two countries met again in a World Cup quarterfinal in the Azteca. Diego punched in the first goal, a brazen, spontaneous act of madness, somehow pulled off right in front of the linesman and referee. Four minutes later, he scored the Goal of the Century. The move started when he picked up the ball in his own half, dribbled at speed past five English defenders, then dummied the goalkeeper, Peter Shilton, and finished into an empty net, all accompanied by the soundtrack of Víctor Hugo Morales sobbing into his microphone.
              </p>

              <p>
                The Goal of the Century had a precursor. In 1980, Argentina played England in a friendly at Wembley. They lost 3-1 but Diego enacted a play that was eerily similar to the one in 1986. He picks up the ball in midfield, dribbles with an explosive burst of pace past four English defenders, and when confronted by an onrushing Ray Clemence, pulls the trigger on the shot and ends up sidefooting wide of the goal. After the game, Diego's 10-year old brother, Hugo, told him that he had made a mistake. He should have dribbled around the goalkeeper too. At the Azteca, Diego's subconscious remembered. He checked, dummied Shilton, and then finished, just as his brother had advised him six years earlier.
              </p>

              <h2 className="text-2xl font-bold mb-4">Saint-Étienne</h2>

              <p>
                In 1998, England and Argentina met again in the round of 16. Michael Owen, terrifyingly good for an 18-year old, scored one of the great World Cup goals. Then, early in the second half, Diego Simeone fouled David Beckham, Beckham kicked at him in response, and Simeone tumbled to the ground as if he had been assaulted. Beckham was shown a straight red and Argentina won on penalties. Beckham became a pantomime villain in England for the rest of that summer, and his redemption only came four years later in Sapporo.
              </p>

              <h2 className="text-2xl font-bold mb-4">El que no salta...</h2>

              <p>
                In Argentina and England, football is embedded in public life in a way that is true of few other countries. This is a rivalry rooted in the tales of Rattin and Ramsey, Maradona and the Malvinas, Simeone and Saint Etienne. Grievances have been nursed and passed on, from generation to generation.
              </p>

              <p>
                This version of England is the better side. The team is younger, with greater depth, more talent and pace on the wings, and hungry for success. And it has Jude. England has historically shackled and distrusted its creative talents, as the careers of Glenn Hoddle, John Barnes, and Paul Gascoigne can attest. That has changed in this World Cup with the freedom given to Bellingham.
              </p>

              <p>
                But, as Valdano said, the pitch is a jungle. This fixture always produces a unique kind of madness and chaos. On Wednesday, for the first and last time, Messi will encounter this chaos.
              </p>

              <p>
                El que no salta, es un inglés. And who, outside England, actually wants to support England? So, jump, and keep jumping.
              </p>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  );
};

export default ElQueNoSaltaEssay;
