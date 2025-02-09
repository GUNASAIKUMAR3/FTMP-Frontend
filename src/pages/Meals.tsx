import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, Utensils, Edit, Trash } from "lucide-react";
import Modal from "./Modal.tsx";

const Meals = () => {
  // Load meals from localStorage on component mount
  const loadMealsFromLocalStorage = () => {
    const storedMeals = localStorage.getItem("Meals");
    return storedMeals ? JSON.parse(storedMeals) : [];
  };

  const [meals, setMeals] = useState(loadMealsFromLocalStorage());
  const [newMeal, setNewMeal] = useState({
    id: null,
    type: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update localStorage whenever meals change
  useEffect(() => {
    localStorage.setItem("Meals", JSON.stringify(meals));
  }, [meals]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeal((prevMeal) => ({
      ...prevMeal,
      [name]: value,
    }));
  };

  // In your Meals component, update the handleAddMeal function:

  const handleAddMeal = (mealData) => {
    if (mealData.id === null) {
      // Adding a new meal
      const newMealData = {
        ...mealData,
        id: meals.length + 1,
        // Numbers are already converted in the Modal component
        calories: mealData.calories,
        protein: mealData.protein,
        carbs: mealData.carbs,
        fat: mealData.fat,
      };

      setMeals((prevMeals) => [...prevMeals, newMealData]);
    } else {
      // Updating an existing meal
      const updatedMeals = meals.map((meal) =>
        meal.id === mealData.id ? { ...mealData } : meal
      );
      setMeals(updatedMeals);
    }

    // Reset form
    setNewMeal({
      id: null,
      type: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    });

    setIsModalOpen(false);
  };
  const handleEditMeal = (meal) => {
    setNewMeal(meal);
    setIsModalOpen(true);
  };

  const handleDeleteMeal = (id) => {
    setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Meals</h1>
            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Meal Planner
              </Button>
              <Button
                onClick={() => {
                  setNewMeal({
                    id: null,
                    type: "",
                    calories: "",
                    protein: "",
                    carbs: "",
                    fat: "",
                  });
                  setIsModalOpen(true); // Open modal when adding new meal
                }}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                {newMeal.id ? "Update Meal" : "Add Meal"}
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal) => (
              <Card
                key={meal.id}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Utensils className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{meal.type}</h3>
                    <p className="text-sm text-gray-600">
                      {meal.calories} calories
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium">Protein</p>
                    <p>{meal.protein}g</p>
                  </div>
                  <div>
                    <p className="font-medium">Carbs</p>
                    <p>{meal.carbs}g</p>
                  </div>
                  <div>
                    <p className="font-medium">Fat</p>
                    <p>{meal.fat}g</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    variant="outline"
                    onClick={() => handleEditMeal(meal)}
                    className="flex items-center gap-2"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleDeleteMeal(meal.id)}
                    className="flex items-center gap-2"
                  >
                    <Trash className="h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddMeal}
        meal={newMeal}
      />
    </div>
  );
};

export default Meals;
