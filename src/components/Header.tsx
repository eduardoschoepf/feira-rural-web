import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">🌱</span>
            </div>
            <span className="text-xl font-bold text-primary">Feira Rural</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors ${
                location.pathname === "/" ? "text-primary" : "text-foreground"
              }`}
            >
              Início
            </Link>
            <Link 
              to="/produtos" 
              className={`hover:text-primary transition-colors ${
                location.pathname === "/produtos" ? "text-primary" : "text-foreground"
              }`}
            >
              Produtos
            </Link>
            <Link 
              to="/produtores" 
              className={`hover:text-primary transition-colors ${
                location.pathname === "/produtores" ? "text-primary" : "text-foreground"
              }`}
            >
              Produtores
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button variant="outline" className="hidden md:flex">
                <User className="h-4 w-4 mr-2" />
                Entrar
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary">
                Início
              </Link>
              <Link to="/produtos" className="text-foreground hover:text-primary">
                Produtos
              </Link>
              <Link to="/produtores" className="text-foreground hover:text-primary">
                Produtores
              </Link>
              <Link to="/login" className="text-foreground hover:text-primary">
                Entrar
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;