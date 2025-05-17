
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function Header() {
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    toast({
      title: "Logged out",
      description: "You've been successfully logged out.",
    });
    navigate('/');
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <span className="h-8 w-8 rounded-full bg-agro-primary flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
                <path d="M12 2a10 10 0 0 0-10 10h10V2z"/>
                <path d="M12 12l0 10"/>
                <path d="M12 12l10 0"/>
              </svg>
            </span>
            <span className="ml-2 text-xl font-bold text-agro-dark">AgroBloom</span>
          </Link>
        </div>

        <div className="flex items-center">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Hi, {user.name}</span>
              <Button 
                variant="ghost" 
                onClick={handleLogout}
                className="text-agro-primary hover:text-agro-dark hover:bg-agro-light/20"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="space-x-2">
              <Button 
                variant="ghost" 
                className="text-agro-primary hover:text-agro-dark hover:bg-agro-light/20"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button 
                className="bg-agro-primary hover:bg-agro-dark"
                onClick={() => navigate('/register')}
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
