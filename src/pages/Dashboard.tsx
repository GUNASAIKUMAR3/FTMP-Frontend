import { useEffect } from "react";
import Navigation from "../components/Navigation";
import { Card } from "@/components/ui/card";
import {
  Activity,
  Flame,
  FootprintsIcon,
  HeartPulse,
  Target,
  Timer,
  Utensils,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

// Mock data for the chart
const weeklyProgress = [
  { day: "Mon", calories: 2100, steps: 8000, activeMinutes: 45 },
  { day: "Tue", calories: 2300, steps: 10000, activeMinutes: 60 },
  { day: "Wed", calories: 1900, steps: 7500, activeMinutes: 30 },
  { day: "Thu", calories: 2200, steps: 9000, activeMinutes: 50 },
  { day: "Fri", calories: 2400, steps: 11000, activeMinutes: 65 },
  { day: "Sat", calories: 2000, steps: 8500, activeMinutes: 40 },
  { day: "Sun", calories: 1800, steps: 6000, activeMinutes: 25 },
];

const Dashboard = () => {
  const storedUserData = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();

  useEffect(() => {
    if (storedUserData === null) {
      navigate("/signup");
    }
  }, [storedUserData, navigate]);

  if (storedUserData === null) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome back, {storedUserData.fullName.toUpperCase()}!
            </h1>
            <p className="text-gray-600 mt-2">
              Here's your fitness overview for today
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Calories Burned
                  </p>
                  <p className="text-2xl font-bold text-primary mt-1">2,345</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-full">
                  <Flame className="h-6 w-6 text-primary" />
                </div>
              </div>
              <Progress value={78} className="mt-4" />
              <p className="text-sm text-gray-600 mt-2">78% of daily goal</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Steps</p>
                  <p className="text-2xl font-bold text-secondary mt-1">
                    8,546
                  </p>
                </div>
                <div className="p-3 bg-secondary/10 rounded-full">
                  <FootprintsIcon className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <Progress value={65} className="mt-4" />
              <p className="text-sm text-gray-600 mt-2">65% of daily goal</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Active Minutes
                  </p>
                  <p className="text-2xl font-bold text-accent mt-1">45</p>
                </div>
                <div className="p-3 bg-accent/10 rounded-full">
                  <Timer className="h-6 w-6 text-accent" />
                </div>
              </div>
              <Progress value={45} className="mt-4" />
              <p className="text-sm text-gray-600 mt-2">45% of daily goal</p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    Heart Rate
                  </p>
                  <p className="text-2xl font-bold text-red-500 mt-1">72 BPM</p>
                </div>
                <div className="p-3 bg-red-50 rounded-full">
                  <HeartPulse className="h-6 w-6 text-red-500" />
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-4">
                Normal resting rate
              </div>
            </Card>
          </div>

          {/* Weekly Progress Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="col-span-2 p-6">
              <h2 className="text-xl font-semibold mb-4">Weekly Progress</h2>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weeklyProgress}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="calories"
                      stroke="#4CAF9D"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="steps"
                      stroke="#FF7F7F"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card>

            {/* Today's Goals */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Today's Goals</h2>
                <Target className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Workout
                    </span>
                    <span className="text-sm text-primary">1/2 completed</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Water Intake
                    </span>
                    <span className="text-sm text-primary">1.5/2L</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Calories
                    </span>
                    <span className="text-sm text-primary">1800/2200</span>
                  </div>
                  <Progress value={82} className="h-2" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
