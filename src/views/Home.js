import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import video1 from "../assets/video1.mp4";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  const handleExerciseClick = () => {
    navigate("/exercises");
  };

  const handleRecipeClick = () => {
    navigate("/recipes");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      position="relative"
      marginBottom="100px"
    >
      <video autoPlay muted loop className="background-video" style={{ marginBottom: "50px" }}>
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box className="content-container">
        <Box className="about-us-container">
          <h2 style={{ marginBottom: "20px" }}>About Us</h2>
          <p>
            Welcome to UltimateFit - your ultimate fitness companion! Whether you're just starting your fitness journey or aiming for specific fitness goals, UltimateFit is here to help you every step of the way. With personalized workout plans, comprehensive nutrition guidance, and a supportive community, achieving your fitness aspirations has never been easier.
          </p>
          <p style={{ marginBottom: "20px", fontStyle: "italic" }}>Our slogan: "Empowering you to reach your ultimate fitness goals."</p>
        </Box>

        <Box className="fixed-buttons-container" style={{ display: "flex", justifyContent: "center" }}>
          {/* <Button
            variant="contained"
            // disabled // Disable the Exercise button
            sx={{
              bgcolor: "#12AF57",
              color: "#fff",
              marginRight: "10px",
              "&:hover": {
                bgcolor: "#fff",
                color: "#12AF57",
              },
            }}
            onClick={handleExerciseClick}
          >
            Exercises
          </Button> */}
          {/* <Button
            variant="contained"
            // disabled // Disable the Recipe button
            sx={{
              bgcolor: "#12AF57",
              color: "#fff",
              "&:hover": {
                bgcolor: "#fff",
                color: "#12AF57",
              },
            }}
            onClick={handleRecipeClick}
          >
            Recipes
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
