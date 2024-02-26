import React from "react";
import Carousel from "./Carousel";
import { Card } from "flowbite-react"; 
const Home = () => {
  return (
    <div style={{ backgroundColor: "#00A7F8", minHeight: "100vh" }}>
      <div className="profile">
        <img
          src="https://cdn-icons-png.freepik.com/256/552/552721.png?ga=GA1.1.1087236438.1705424804&"
          width="50"
          alt="profile"
        />
      </div>
      <h2 style={{ color: "white" }}>Hi Thushar</h2>
      <Carousel />

      <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" horizontal style={{ width: 300, height: 200, margin:"25px",  borderRadius: "25px", alignItems:"center"
    }} 
    >
          

    </Card>
    <p style={{color:"white"}}>what do you want to learn today thushar?</p>
    </div>
  );
};

export default Home;
