import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const FormSection = ({ userData, handleInputChange, handleSubmit }) => {
  return (
    <form className="space-y-6">
      <InputField
        id="email"
        type="email"
        label="Email"
        name="email"
        value={userData.email}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />
      <InputField
        id="password"
        type="password"
        label="Password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
        placeholder="Enter your password"
      />
      <div className="pt-2">
        <SubmitButton onClick={handleSubmit} />
      </div>
    </form>
  );
};

export default FormSection;
