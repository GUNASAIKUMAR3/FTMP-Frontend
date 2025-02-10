import axios from "axios";

export const handleInputChange = (event, setUserData) => {
  setUserData((prevData) => ({
    ...prevData,
    [event.target.name]: event.target.value,
  }));
};

export const validateForm = (userData) => {
  if (!userData.email || !userData.password) {
    return "Email and password are required.";
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(userData.email)) {
    return "Please enter a valid email address.";
  }

  return null;
};

export const handleSubmit = async (userData, setUserData, navigate, setError, setLoading) => {
  const error = validateForm(userData);
  if (error) {
    setError(error);
    return;
  }

  setLoading(true);

  try {
    const response = await axios.post("https://render.com/api/auth/login", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Data submitted:", response.data);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/Dashboard");
  } catch (error) {
    console.error("There was an error submitting the data:", error);
    setError("An error occurred while logging in. Please try again.");
  } finally {
    setLoading(false);
  }

  setUserData({
    email: "",
    password: "",
  });
};
