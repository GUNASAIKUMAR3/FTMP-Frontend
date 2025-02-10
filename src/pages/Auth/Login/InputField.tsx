import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const InputField = ({ id, type, label, name, value, onChange, placeholder }) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium text-primary">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="h-12 border-violet-200 focus:border-violet-300 focus:ring-violet-200 transition-colors"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
