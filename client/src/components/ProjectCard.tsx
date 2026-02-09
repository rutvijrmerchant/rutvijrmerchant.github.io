import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  delay?: number;
}

const ProjectCard = ({
  image,
  title,
  description,
  tags,
  demoLink,
  codeLink,
  delay = 0
}: ProjectCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <img 
        src={image} 
        alt={`${title} Project Screenshot`} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => {
            // Generate color classes based on tag name for variety
            const colorClasses = [
              "bg-blue-100 text-blue-700",
              "bg-green-100 text-green-700",
              "bg-purple-100 text-purple-700",
              "bg-yellow-100 text-yellow-700",
              "bg-red-100 text-red-700",
              "bg-indigo-100 text-indigo-700"
            ];
            
            const colorIndex = index % colorClasses.length;
            
            return (
              <Badge 
                key={index} 
                variant="outline" 
                className={`text-xs font-medium ${colorClasses[colorIndex]} px-2 py-1 rounded`}
              >
                {tag}
              </Badge>
            );
          })}
        </div>
        <div className="flex gap-3">
          <a 
            href={demoLink} 
            className="text-primary hover:text-accent transition duration-300 font-medium flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-link text-sm"></i> Live Demo
          </a>
          <a 
            href={codeLink} 
            className="text-primary hover:text-accent transition duration-300 font-medium flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-sm"></i> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
