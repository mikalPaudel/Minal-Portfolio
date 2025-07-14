// app/page.tsx

import Navbar from "./components/Navbar";
import AboutSection from "./pages/About";
import ContactSection from "./pages/Contact";
import HomePageContent from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import Tools from "./pages/Tools";

export default function HomePage() {
  return (
    <>  

      {/* Homepage Content */}
      <HomePageContent />

    {/* About Section */}
    <AboutSection />

    {/* Projects Section */}
    <ProjectsPage />

    {/* Tools Section */}
    <Tools/>

    {/* Contact Section */}
    <ContactSection />
    </>

  );
}
