import { motion } from "framer-motion";

const Banner = () => {
  // Your personal image
  const bannerImage = "https://i.imgur.com/eggYp82.jpeg";
  
  // Fallback Mumbai cityscape image
  const fallbackImage = "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&h=600";

  return (
    <section className="w-full bg-gradient-to-r from-primary/10 to-accent/10 py-16 mt-16 dark:from-gray-800/50 dark:to-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="w-full overflow-hidden rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src={bannerImage} 
            alt="Banner" 
            className="w-full h-64 md:h-80 object-cover"
            onError={(e) => {
              // If local image fails to load, use the fallback
              e.currentTarget.src = fallbackImage;
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;