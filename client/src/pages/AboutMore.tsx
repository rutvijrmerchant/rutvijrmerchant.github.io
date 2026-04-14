import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const AboutMore: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-2xl font-bold tracking-tight">More About Me</h1>
            <Link href="/">
              <a className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                &larr; Back to Home
              </a>
            </Link>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="text-lg font-semibold mb-4 uppercase tracking-widest text-gray-500 dark:text-gray-400">Home</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed list-disc pl-5">
                <li>I was born in Mumbai, India and grew up primarily in Dubai, U.A.E. Since leaving home for college, I have lived in Chicago, Toronto, Boston, Bhopal (briefly), and New York City.</li>
                <li>NYC is comfortably my favorite city, it is a special place.</li>
                <li>Home in the US is presently Boston, MA.</li>
                <li>'Home in the world,' to echo Amartya Sen's memoirs but depart from them in spirit, is Mumbai.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4 uppercase tracking-widest text-gray-500 dark:text-gray-400">Work Experience</h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed list-disc pl-5">
                <li>Contributions to global mental health research as part of the Mental Health for All Lab at Harvard Medical School and the non-profit Sangath, during 2019–2021</li>
                <li>Two years as a healthcare consultant at Deloitte, during 2016–2018</li>
                <li>A summer internship with the Ebola response team at the WHO during the 2014–16 Ebola pandemic</li>
                <li>An internship at the American Enterprise Institute as a health policy analyst in 2016</li>
                <li>A fellowship with the value-based care team at Mount Sinai working to integrate behavioral health services with primary care</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMore;