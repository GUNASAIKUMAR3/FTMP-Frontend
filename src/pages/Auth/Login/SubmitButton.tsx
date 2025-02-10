import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SubmitButton = ({ onClick }) => {
  return (
    <Button
      className="w-full h-12 bg-primary/80 hover:bg-primary-dark/80 transition-all duration-300 shadow-md hover:shadow-lg group"
      onClick={onClick}
    >
      Log In
      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  );
};

export default SubmitButton;
