import { useState, useEffect } from "react";
import { Menu, X, Home, User, ShoppingBag, Truck, Image as ImageIcon, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getActivePage = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    return path.substring(1); // Remove leading slash
  };

  const navLinks = [
    { label: "Home", path: "/", id: "home", icon: Home },
    { label: "About", path: "/about", id: "about", icon: User },
    { label: "Products", path: "/products", id: "products", icon: ShoppingBag },
    { label: "Services", path: "/services", id: "services", icon: Truck },
    { label: "Gallery", path: "/gallery", id: "gallery", icon: ImageIcon },
    { label: "Contact", path: "/contact", id: "contact", icon: Mail },
  ];

  return (
    <div className="w-full">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
            : "bg-background/80 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Central Africa Trading Company Home"
          >
            <img
              src={logo}
              alt="Central Africa Trading Company Logo"
              className="h-14 w-auto max-w-[200px] object-contain"
            />
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="bg-muted/50 backdrop-blur-sm rounded-full p-1.5 border border-border/50">
              <ToggleGroup type="single" value={getActivePage()} className="gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link to={link.path} key={link.id}>
                      <ToggleGroupItem
                        value={link.id}
                        className={cn(
                          "px-4 py-2 rounded-full transition-all duration-200 text-sm font-medium",
                          getActivePage() === link.id
                            ? "text-primary-foreground bg-primary shadow-sm"
                            : "text-muted-foreground hover:text-foreground hover:bg-background"
                        )}
                      >
                        <Icon size={16} className="inline-block mr-1.5" />
                        {link.label}
                      </ToggleGroupItem>
                    </Link>
                  );
                })}
              </ToggleGroup>
            </div>
          </nav>

          <div className="hidden md:block w-12" /> {/* Spacer for balance */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg animate-fade-in">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.id}
                    to={link.path}
                    className={cn(
                      "px-3 py-2 text-sm rounded-lg transition-colors flex items-center",
                      getActivePage() === link.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={16} className="inline-block mr-2" />
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};
