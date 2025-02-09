
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">HealthPath</span>
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Your comprehensive health and fitness companion. Track workouts, plan meals, and achieve your wellness goals.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Features</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/workouts" className="text-gray-600 hover:text-primary transition-colors">
                  Workout Tracking
                </Link>
              </li>
              <li>
                <Link to="/meals" className="text-gray-600 hover:text-primary transition-colors">
                  Meal Planning
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-primary transition-colors">
                  Progress Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} HealthPath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
