import { motion } from "framer-motion";

interface SkillCardProps {
  icon: string;
  name: string;
  delay?: number;
}

const SkillCard = ({ icon, name, delay = 0 }: SkillCardProps) => {
  return (
    <motion.div 
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex items-center gap-3">
        <span className="text-primary text-xl" dangerouslySetInnerHTML={{ __html: icon }}></span>
        <span className="font-medium">{name}</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
