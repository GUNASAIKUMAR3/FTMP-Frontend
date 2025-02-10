import Navigation from "../../components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Award,
  Edit,
  UserCircle,
  Target,
  Activity,
  Calendar,
  Dumbbell,
  Trophy,
} from "lucide-react";

const achievements = [
  {
    id: 1,
    name: "First Workout",
    description: "Completed your first workout",
    icon: <Activity className="h-6 w-6" />,
  },
  {
    id: 2,
    name: "Goal Setter",
    description: "Set your first fitness goal",
    icon: <Target className="h-6 w-6" />,
  },
  {
    id: 3,
    name: "Workout Warrior",
    description: "Completed 10 workouts",
    icon: <Dumbbell className="h-6 w-6" />,
  },
  {
    id: 4,
    name: "Consistency King",
    description: "Worked out 5 days in a row",
    icon: <Calendar className="h-6 w-6" />,
  },
  {
    id: 5,
    name: "Champion",
    description: "Reached your first goal",
    icon: <Trophy className="h-6 w-6" />,
  },
];

const Profile = () => {
  const storedUserData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative group">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-r from-primary to-primary-light flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <UserCircle className="w-28 h-28 text-white" />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-center md:text-left space-y-3">
                  <h1 className="text-4xl font-bold text-gray-900">
                    {storedUserData.fullName.toUpperCase()}
                  </h1>
                  <p className="text-lg text-gray-600">Fitness Enthusiast</p>
                  <p className="text-sm text-gray-500">
                    Member since January 2024
                  </p>
                  <div className="flex flex-wrap gap-4 mt-6">
                    <Button
                      variant="default"
                      className="bg-primary hover:bg-primary-hover transition-colors"
                    >
                      Edit Profile
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary-light"
                    >
                      Connect Device
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Fitness Goals
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Weight Goal
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      75 kg
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      Weekly Workouts
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      3/5
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-gradient-to-r from-primary to-primary-light rounded-full transition-all duration-500"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Activity className="h-6 w-6 text-primary" />
                Statistics
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-gradient-to-br from-primary-light to-white rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Total Workouts</p>
                  <p className="text-3xl font-bold text-primary">24</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary-light to-white rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Active Days</p>
                  <p className="text-3xl font-bold text-primary">18</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary-light to-white rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Calories Burned</p>
                  <p className="text-3xl font-bold text-primary">2.4k</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary-light to-white rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Hours Active</p>
                  <p className="text-3xl font-bold text-primary">32</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Achievements
              </h2>
              <span className="text-sm text-gray-500">5 of 12 completed</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="p-4 border border-gray-100 rounded-lg flex items-center gap-4 hover:shadow-md transition-shadow duration-300 hover:border-primary/20"
                >
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {achievement.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
