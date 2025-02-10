import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation.tsx";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dumbbell,
  Activity,
  Timer,
  Filter,
  Plus,
  Edit,
  Trash,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

const defaultWorkouts = [
  {
    id: 1,
    name: "Strength Training",
    duration: "45",
    intensity: "Medium",
    icon: "dumbbell",
  },
  {
    id: 2,
    name: "Cardio",
    duration: "30",
    intensity: "High",
    icon: "activity",
  },
];

const getIconComponent = (iconName) => {
  const icons = {
    dumbbell: <Dumbbell className="h-6 w-6" />,
    activity: <Activity className="h-6 w-6" />,
  };
  return icons[iconName] || <Dumbbell className="h-6 w-6" />;
};

const WorkoutTimer = ({ duration, onClose }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsActive(false);
            alert("Workout Complete!");
            onClose();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, onClose]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <div className="text-6xl font-bold">{formatTime(timeLeft)}</div>
      <div className="flex gap-4">
        <Button
          onClick={() => setIsActive(!isActive)}
          className="flex items-center gap-2"
        >
          {isActive ? (
            <>
              <Pause className="h-4 w-4" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-4 w-4" />
              Start
            </>
          )}
        </Button>
        <Button
          variant="outline"
          onClick={() => setTimeLeft(duration * 60)}
          className="flex items-center gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>
    </div>
  );
};

const WorkoutForm = ({ onSubmit, initialData = null, onClose }) => {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      duration: "",
      intensity: "",
      icon: "dumbbell",
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Exercise Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Label htmlFor="duration">Duration (minutes)</Label>
        <Input
          id="duration"
          type="number"
          value={formData.duration}
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
          required
        />
      </div>
      <div>
        <Label htmlFor="intensity">Intensity</Label>
        <Select
          value={formData.intensity}
          onValueChange={(value) =>
            setFormData({ ...formData, intensity: value })
          }
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select intensity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Low">Low</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="High">High</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="icon">Icon</Label>
        <Select
          value={formData.icon}
          onValueChange={(value) => setFormData({ ...formData, icon: value })}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select icon" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="dumbbell">Strength</SelectItem>
            <SelectItem value="activity">Cardio</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="w-full">
        {initialData ? "Update Workout" : "Add Workout"}
      </Button>
    </form>
  );
};

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);
  const [intensityFilter, setIntensityFilter] = useState("All");
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editWorkout, setEditWorkout] = useState(null);
  const [activeWorkout, setActiveWorkout] = useState(null);

  useEffect(() => {
    const savedWorkouts = localStorage.getItem("workouts");
    if (savedWorkouts) {
      setWorkouts(JSON.parse(savedWorkouts));
      setFilteredWorkouts(JSON.parse(savedWorkouts));
    } else {
      setWorkouts(defaultWorkouts);
      setFilteredWorkouts(defaultWorkouts);
      localStorage.setItem("workouts", JSON.stringify(defaultWorkouts));
    }
  }, []);

  useEffect(() => {
    if (intensityFilter === "All") {
      setFilteredWorkouts(workouts);
    } else {
      setFilteredWorkouts(
        workouts.filter((workout) => workout.intensity === intensityFilter)
      );
    }
  }, [intensityFilter, workouts]);

  const addWorkout = (workoutData) => {
    const newWorkout = {
      ...workoutData,
      id: Date.now(),
    };
    const updatedWorkouts = [...workouts, newWorkout];
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  };

  const updateWorkout = (workoutData) => {
    const updatedWorkouts = workouts.map((workout) =>
      workout.id === editWorkout.id
        ? { ...workoutData, id: workout.id }
        : workout
    );
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
    setEditWorkout(null);
  };

  const deleteWorkout = (id) => {
    const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
    setWorkouts(updatedWorkouts);
    localStorage.setItem("workouts", JSON.stringify(updatedWorkouts));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Workouts</h1>
            <div className="flex gap-2">
              <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Workout
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Workout</DialogTitle>
                  </DialogHeader>
                  <WorkoutForm
                    onSubmit={addWorkout}
                    onClose={() => setIsAddOpen(false)}
                  />
                </DialogContent>
              </Dialog>

              <Select
                value={intensityFilter}
                onValueChange={setIntensityFilter}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by intensity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Intensities</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkouts.map((workout) => (
              <Card
                key={workout.id}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    {getIconComponent(workout.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{workout.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Timer className="h-4 w-4" />
                      {workout.duration} min
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Intensity: {workout.intensity}
                  </span>
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setEditWorkout(workout)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Edit Workout</DialogTitle>
                        </DialogHeader>
                        <WorkoutForm
                          initialData={workout}
                          onSubmit={updateWorkout}
                          onClose={() => setEditWorkout(null)}
                        />
                      </DialogContent>
                    </Dialog>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => deleteWorkout(workout.id)}
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          onClick={() => setActiveWorkout(workout)}
                        >
                          Start
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{workout.name}</DialogTitle>
                        </DialogHeader>
                        <WorkoutTimer
                          duration={parseInt(workout.duration)}
                          onClose={() => setActiveWorkout(null)}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
