import logo from "../assets/logo.jpeg";
import { Button } from "../components/Button";
import { MenuIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4">
        
        {/* glass container */}
        <div className="glass-strong flex justify-between items-center px-6 py-3 rounded-2xl">

          {/* logo */}
          <div className="flex items-center gap-3">
            {/* <img src={logo} alt="logo" className="w-10 h-10 rounded-full glow-border" /> */}
            <h1 className="font-bold text-lg tracking-wide">
              Araka<span className="text-primary glow-text">haraka</span>
            </h1>
          </div>

          {/* nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition">Services</a>
            <a href="#partners" className="hover:text-primary transition">Partners</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button size="sm">
                Get Started
              </Button>
            </a>
          </div>

          {/* mobile icon */}
          <div className="md:hidden">
            <MenuIcon className="w-6 h-6 text-primary" />
          </div>

        </div>
      </div>
    </nav>
  );
}