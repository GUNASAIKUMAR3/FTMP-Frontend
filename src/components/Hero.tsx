
import { ArrowRight, Activity, Utensils, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight mb-8 animate-fade-in">
            Transform Your Health Journey
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-12 animate-fade-in">
            Track workouts, plan meals, and achieve your fitness goals with our comprehensive health and wellness platform.
          </p>
          <div className="flex justify-center space-x-4 mb-16 animate-fade-in">
            <button 
              onClick={() => navigate('/dashboard')}
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary hover:bg-primary-hover transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-6">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Workouts</h3>
            <p className="text-gray-600">Log and monitor your fitness activities with detailed progress tracking.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-secondary-light rounded-xl flex items-center justify-center mb-6">
              <Utensils className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Plan Meals</h3>
            <p className="text-gray-600">Create personalized meal plans that align with your dietary preferences.</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center mb-6">
              <Calendar className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Set Goals</h3>
            <p className="text-gray-600">Define and track your fitness goals with our comprehensive tools.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
