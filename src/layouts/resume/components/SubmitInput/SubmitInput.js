import React, { useState } from "react";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import MDAlert from "components/MDAlert";

function SubmitInput() {
  const [inputValue, setInputValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      setShowAlert(true);
    } else {
      setShowAlert(false);
      alert(`You submitted: ${inputValue}`);
      //enter API call there
    }
  };

  return (
    <MDBox
      color="white"
      bgColor="text"
      variant="gradient"
      borderRadius="lg"
      shadow="lg"
      opacity={1}
      p={2}
      style={{
        display: "flex",
        justifyContent: "space-between",
        variant: "contained",
        gap: "20px",
        width: "400px",
      }}
    >
      {showAlert && (
        <MDAlert
          color="error"
          style={{
            zIndex: 9999,
            position: "absolute",
            top: 50,
            left: "50%",
            transform: "translateX(-50%)",
          }}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Job Title Field cannot be empty
        </MDAlert>
      )}

      <MDInput
        fullWidth
        lid="fullWidth"
        backgroundSize="large"
        error={showAlert}
        variant="outlined"
        label="Type your Job Title there..."
        size="large"
        value={inputValue}
        onChange={handleInputChange}
      />
      <MDButton variant="outlined" color="info" onClick={handleSubmit}>
        Submit
      </MDButton>
    </MDBox>
  );
}

export default SubmitInput;
