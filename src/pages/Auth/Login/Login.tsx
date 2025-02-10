import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleInputChange, handleSubmit } from "./helper.js";
import FormSection from "./FormSection";
import Heading from "./Heading";

const Login = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);  
  const [loading, setLoading] = useState(false);  

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50/50 to-violet-100/60">
      <div className="pt-32 pb-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-violet-100 animate-fade-in">
            <Heading
              title="Welcome Back"
              subtitle="Sign in to continue your fitness journey"
            />
            <FormSection
              userData={userData}
              handleInputChange={(e) => handleInputChange(e, setUserData)}
              handleSubmit={() =>
                handleSubmit(userData, setUserData, navigate, setError, setLoading)
              }
            />
            {error && (
              <div className="mt-4 text-red-500 text-sm text-center">
                {error}
              </div>
            )}
            {loading && (
              <div className="mt-4 text-center text-primary">Logging in...</div>
            )}
            <div className="text-center text-sm text-primary">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-primary hover:text-violet-700 ml-1 font-medium"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
