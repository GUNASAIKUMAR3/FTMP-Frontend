import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  let [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  let handleInputChange = (event) => {
    setUserData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`https://ftmp-backend.onrender.com/api/auth/signup`, userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Data submitted:", response.data);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userData", JSON.stringify(userData));
        navigate("/Dashboard");
      })
      .catch((error) => {
        console.error("There was an error submitting the data:", error);
      });

    setUserData({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50/50 to-violet-100/60">
      <div className="pt-32 pb-16">
        <div className="max-w-md mx-auto">
          <div className="bg-white/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-violet-100 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-primary mb-2">
                Create Account
              </h1>
              <p className="text-primary">Start your fitness journey today</p>
            </div>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium text-primary"
                >
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="h-12 border-gray-200 focus:border-violet-300 focus:ring-violet-200 transition-colors"
                  name="fullName"
                  value={userData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-primary"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 border-gray-200 focus:border-violet-300 focus:ring-violet-200 transition-colors"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-primary"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Choose a password"
                  className="h-12 border-gray-200 focus:border-violet-300 focus:ring-violet-200 transition-colors"
                  name="password"
                  value={userData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="pt-2">
                <Button
                  className="w-full h-12 bg-primary/80 hover:bg-primary-dark/80 transition-all duration-300 shadow-md hover:shadow-lg group"
                  onClick={handleSubmit}
                >
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="text-center text-sm text-primary">
                Already have an account?
                <a
                  href="/login"
                  className="text-primary hover:text-violet-700 ml-1 font-medium"
                >
                  Log in
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
