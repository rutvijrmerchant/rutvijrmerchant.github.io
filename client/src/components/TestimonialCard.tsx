import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  rating: number;
  delay?: number;
}

const TestimonialCard = ({ quote, author, rating, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-xl shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex gap-1 text-yellow-400 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <i 
            key={i} 
            className={i < Math.floor(rating) ? "fas fa-star" : i + 0.5 === rating ? "fas fa-star-half-alt" : "far fa-star"}
          ></i>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      <div className="flex items-center">
        <img 
          src={author.image} 
          alt={author.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{author.name}</h4>
          <p className="text-sm text-gray-600">{author.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
