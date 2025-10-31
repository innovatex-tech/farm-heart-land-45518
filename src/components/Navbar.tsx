import { useState, useEffect } from "react";
import { Menu, X, Home, User, ShoppingBag, Truck, Image as ImageIcon, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

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
            ? "bg-white/90 backdrop-blur-2xl shadow-lg border-b border-white/80"
            : "bg-white/60 backdrop-blur-2xl border-b border-white/50"
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
            aria-label="Central Africa Trading Company Home"
          >
            <img
              src={logo}
              alt="Central Africa Trading Company Logo"
              className="h-12 w-auto max-w-[240px] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            />
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-900 hover:bg-black/5"
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
            <div className="rounded-full border border-black/5 bg-white/70 px-2 py-1.5 backdrop-blur-xl shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
              <ToggleGroup type="single" value={getActivePage()} className="gap-1">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link to={link.path} key={link.id}>
                      <ToggleGroupItem
                        value={link.id}
                        className={cn(
                          "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 text-slate-600 hover:text-slate-900",
                          getActivePage() === link.id
                            ? "bg-[hsl(var(--accent))] text-black shadow-lg"
                            : "hover:bg-white/70"
                        )}
                      >
                        <Icon size={16} className="inline-block text-current" />
                        {link.label}
                      </ToggleGroupItem>
                    </Link>
                  );
                })}
              </ToggleGroup>
            </div>
          </nav>

          <div className="hidden w-12 md:block" /> {/* Spacer for balance */}
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="animate-fade-in absolute top-20 left-4 right-4 rounded-3xl border border-black/5 bg-white/90 px-6 py-4 backdrop-blur-2xl shadow-2xl md:hidden">
            <div className="flex flex-col gap-3 py-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.id}
                    to={link.path}
                    className={cn(
                      "flex items-center rounded-2xl px-4 py-3 text-sm transition-colors",
                      getActivePage() === link.id
                        ? "bg-[hsl(var(--accent))] text-black shadow-lg"
                        : "text-slate-600 hover:bg-white/70 hover:text-slate-900"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={16} className="mr-2 inline-block text-current" />
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
