import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  // State to track user data status
  const [storedUserData, setStoredUserData] = useState(null);

  // Fetch user data from localStorage and check its existence
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (!userData) {
      // Redirect if no user data found
      navigate("/");
    } else {
      setStoredUserData(userData);
    }
  }, [navigate]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">
                HealthPath
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!storedUserData ? (
              <>
                <Link to="/login">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/workouts"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Workouts
                </Link>
                <Link
                  to="/meals"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Meals
                </Link>
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <User className="h-5 w-5" />
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-100">
            {storedUserData ? (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/workouts"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Workouts
                </Link>
                <Link
                  to="/meals"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Meals
                </Link>
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
