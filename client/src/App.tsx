import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutMore from "@/pages/AboutMore";
import KitsuneEssay from "@/pages/KitsuneEssay";
import LenoxHillEssay from "@/pages/LenoxHillEssay";
import WispsOfMemoryEssay from "@/pages/WispsOfMemoryEssay";
import ShiftingSandsEssay from "@/pages/ShiftingSandsEssay";
import FortsAmidMoundsEssay from "@/pages/FortsAmidMoundsEssay";
import OnAyodhyaEssay from "@/pages/OnAyodhyaEssay";
import TedStyleHome from "@/pages/TedStyleHome";
import { MobileMenuProvider } from "./contexts/MobileMenuContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={TedStyleHome} />
      <Route path="/original" component={Home} />
      <Route path="/about-more" component={AboutMore} />
      <Route path="/essays/kitsune" component={KitsuneEssay} />
      <Route path="/essays/lenox-hill" component={LenoxHillEssay} />
      <Route path="/essays/wisps-of-memory" component={WispsOfMemoryEssay} />
      <Route path="/essays/shifting-sands" component={ShiftingSandsEssay} />
      <Route path="/essays/forts-amid-mounds" component={FortsAmidMoundsEssay} />
      <Route path="/essays/on-ayodhya" component={OnAyodhyaEssay} />
      <Route path="/ted-style" component={TedStyleHome} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <MobileMenuProvider>
          <Toaster />
          <Router />
        </MobileMenuProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
