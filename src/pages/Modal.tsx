import { Button } from "@/components/ui/button";
import { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit, meal }) => {
  if (!isOpen) return null;

  // Local state to track form values
  const [formData, setFormData] = useState({
    ...meal,
    // Ensure empty strings for new meals instead of undefined
    calories: meal.calories || "",
    protein: meal.protein || "",
    carbs: meal.carbs || "",
    fat: meal.fat || "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission with number conversion
  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert string values to numbers before submitting
    const processedData = {
      ...formData,
      calories: formData.calories ? parseInt(formData.calories, 10) : 0,
      protein: formData.protein ? parseInt(formData.protein, 10) : 0,
      carbs: formData.carbs ? parseInt(formData.carbs, 10) : 0,
      fat: formData.fat ? parseInt(formData.fat, 10) : 0,
    };
    onSubmit(processedData);
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-xl font-semibold mb-4">
          {meal.id ? "Update Meal" : "Add Meal"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            placeholder="Meal Type"
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleChange}
            placeholder="Calories"
            className="w-full p-2 border border-gray-300 rounded-lg"
            min="0"
            required
          />
          <input
            type="number"
            name="protein"
            value={formData.protein}
            onChange={handleChange}
            placeholder="Protein (g)"
            className="w-full p-2 border border-gray-300 rounded-lg"
            min="0"
            required
          />
          <input
            type="number"
            name="carbs"
            value={formData.carbs}
            onChange={handleChange}
            placeholder="Carbs (g)"
            className="w-full p-2 border border-gray-300 rounded-lg"
            min="0"
            required
          />
          <input
            type="number"
            name="fat"
            value={formData.fat}
            onChange={handleChange}
            placeholder="Fat (g)"
            className="w-full p-2 border border-gray-300 rounded-lg"
            min="0"
            required
          />
          <div className="flex justify-end gap-2 mt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {meal.id ? "Update Meal" : "Add Meal"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
