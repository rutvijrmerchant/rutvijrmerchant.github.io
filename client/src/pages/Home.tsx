import Header from "@/components/Header";
import Banner from "@/components/Banner";
import AboutMe from "@/components/AboutMe";
import Publications from "@/components/Publications";
import Writing from "@/components/Writing";
import Reading from "@/components/Reading";
import ImportantIdeas from "@/components/ImportantIdeas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useMobileMenu } from "@/contexts/MobileMenuContext";

const Home = () => {
  const { closeMenu } = useMobileMenu();
  
  useEffect(() => {
    // Handle hash in URL for direct navigation
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };
    
    // Run on mount for direct URLs with hash
    handleHashChange();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Close mobile menu when clicking anywhere on the page
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('button') && !target.closest('#mobile-menu')) {
        closeMenu();
      }
    };
    
    document.addEventListener('click', handleDocumentClick);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [closeMenu]);
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Banner />
        <AboutMe />
        <Writing />
        <Publications />
        <Reading />
        <ImportantIdeas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
