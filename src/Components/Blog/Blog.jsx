import React, { useEffect, useState } from "react";
import "./Blog.css";
import programmer from "../../assets/programmer.jpg"; // Ensure this path is correct
import blog from "../../assets/blog.avif"; // Ensure this path is correct
import { Link } from "react-router-dom";

const Blog = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch("http://localhost:3000/submissions");

        // Check if the response is okay
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        // Parse the JSON data
        const data = await response.json();

        // Assuming data is the array of submissions
        setCardData(data); // Directly set the data array
      } catch (error) {
        console.error("Error loading blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  // Date formatting function
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Check if cardData is available before mapping
  if (!cardData || cardData.length === 0) {
    return <p>No blog posts available.</p>; // Show a message if there are no posts
  }

  return (
    <section id="blog">
      <img src={programmer} alt="programmer" />
      <div className="card_container">
        {cardData.map((card) => (
          <div className="card" key={card.id}>
            <h5>{card.category}</h5>
            {/* Format the date here */}
            <p>{formatDate(card.date)}</p>
            <img src={blog} alt="Blog post" id="card_image" />
            <h3>{card.name}</h3>

           
            <Link to={`/blog/${card.slug}`}>Explore Link</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
