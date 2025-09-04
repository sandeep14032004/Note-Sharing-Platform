import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["features", "about"];
      let currentSection = "";

      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-300/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-uninote-blue to-uninote-purple p-2 rounded-xl shadow-md">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-uninote-blue to-uninote-purple bg-clip-text text-transparent">
              UniNote
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className={`font-medium transition-all border-b-2 pb-1 ${
                activeSection === "features"
                  ? "text-uninote-blue border-uninote-blue"
                  : "text-gray-700 border-transparent hover:text-uninote-blue"
              }`}
            >
              Features
            </a>
            <a
              href="#about"
              className={`font-medium transition-all border-b-2 pb-1 ${
                activeSection === "about"
                  ? "text-uninote-purple border-uninote-purple"
                  : "text-gray-700 border-transparent hover:text-uninote-purple"
              }`}
            >
              About
            </a>
            <Link to="/auth">
              <Button
                variant="outline"
                className="border-2 border-uninote-blue text-uninote-blue hover:bg-uninote-blue hover:text-white rounded-xl"
              >
                Login
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-gradient-to-r from-uninote-blue to-uninote-purple hover:from-uninote-purple hover:to-uninote-blue text-white font-semibold rounded-xl">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-uninote-purple transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 py-4 bg-white/80 backdrop-blur-lg rounded-b-xl shadow-md">
            <div className="flex flex-col space-y-4">
              <a href="#features" className={`font-medium px-4 ${
                activeSection === "features"
                  ? "text-uninote-blue underline"
                  : "text-gray-700 hover:text-uninote-blue"
              }`}>
                Features
              </a>
              <a href="#about" className={`font-medium px-4 ${
                activeSection === "about"
                  ? "text-uninote-purple underline"
                  : "text-gray-700 hover:text-uninote-purple"
              }`}>
                About
              </a>
              <div className="flex flex-col space-y-2 px-4">
                <Link to="/auth">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-uninote-blue text-uninote-blue hover:bg-uninote-blue hover:text-white rounded-xl"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="w-full bg-gradient-to-r from-uninote-blue to-uninote-purple hover:from-uninote-purple hover:to-uninote-blue text-white font-semibold rounded-xl">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;