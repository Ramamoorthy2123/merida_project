import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetail.css"; 
import blog from "../../assets/blog.avif"

const BlogDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const [blogDetail, setBlogDetail] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/submissions?slug=${slug}`
        );

        // Check if the response is okay
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Assuming data is an array, get the first matching blog post
        setBlogDetail(data[0]);
      } catch (error) {
        console.error("Error loading blog detail:", error);
      }
    };

    fetchBlogDetail();
  }, [slug]);

  if (!blogDetail) {
    return <p>Loading...</p>; // Show a loading message while fetching
  }

  return (
    <section id="blog-detail">
      <h2>{blogDetail.name}</h2>
      <p>
        <strong>Category:</strong> {blogDetail.category}
      </p>
      <p>
        <strong>Date:</strong> {new Date(blogDetail.date).toLocaleDateString()}
      </p>
      <img src={blog} alt="" />

      <h3>{blogDetail.heading1}</h3>
      <ul>
        {blogDetail.paragraphs1.map((para, index) => (
          <li key={index}>{para}</li>
        ))}
      </ul>

      <h3>{blogDetail.heading2}</h3>
      <ul>
        {blogDetail.paragraphs2.map((para, index) => (
          <li key={index}>{para}</li>
        ))}
      </ul>
    </section>
  );
};

export default BlogDetail;
