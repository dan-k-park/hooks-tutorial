import React, { useEffect } from "react";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  // Whenever the password is changed, the console log will fire off
  useEffect(() => {
    console.log("render");

    // cleanup function
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          name="firstName"
          placeholder="first Name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default App;
