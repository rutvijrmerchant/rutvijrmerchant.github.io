import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const AboutMore: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-card rounded-xl shadow-sm p-8"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-foreground">More About Me</h2>
            <Link href="/">
              <a className="text-primary hover:text-primary/80 transition-colors">
                &larr; Back to Home
              </a>
            </Link>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Home</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>I was born in Mumbai, India and grew up primarily in Dubai, U.A.E. Since leaving home for college, I have lived in Chicago, Toronto, Boston, Bhopal (briefly), and New York City.</li>
                <li>NYC is comfortably my favorite city, it is a special place.</li>
                <li>Home in the US is presently Boston, MA.</li>
                <li>'Home in the world,' to echo Amartya Sen's memoirs but depart from them in spirit, is Mumbai.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Work Experience</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                <li>Contributions to global mental health research as part of the Mental Health for All Lab at Harvard Medical School and the non-profit Sangath, during 2019-2021</li>
                <li>Two years as a healthcare consultant at Deloitte, during 2016-2018</li>
                <li>An summer internship with the ebola response team at the WHO during the 2014-16 ebola pandemic</li>
                <li>An internship at the American Enterprise Institute as a health policy analyst in 2016</li>
                <li>A fellowship with the value-based care team at Mount Sinai working to integrate behavioral health services with primary care.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMore;