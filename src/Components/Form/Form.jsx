import React, { useState } from "react";
import "./Form.css";
import Navbar from "../Navbar/Navbar";

const Form = () => {
  const [date, setDate] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");

  // State for two headings and their paragraphs
  const [heading1, setHeading1] = useState("");
  const [heading2, setHeading2] = useState("");
  const [paragraphs1, setParagraphs1] = useState([""]);
  const [paragraphs2, setParagraphs2] = useState([""]);

  const handleAddParagraph1 = () => {
    setParagraphs1([...paragraphs1, ""]); // Add an empty paragraph
  };

  const handleAddParagraph2 = () => {
    setParagraphs2([...paragraphs2, ""]); // Add an empty paragraph
  };

  const handleParagraphChange1 = (index, value) => {
    const updatedParagraphs = [...paragraphs1];
    updatedParagraphs[index] = value; // Update specific paragraph
    setParagraphs1(updatedParagraphs);
  };

  const handleParagraphChange2 = (index, value) => {
    const updatedParagraphs = [...paragraphs2];
    updatedParagraphs[index] = value; // Update specific paragraph
    setParagraphs2(updatedParagraphs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      date,
      slug,
      category,
      name,
      heading1,
      heading2,
      paragraphs1,
      paragraphs2,
    };

    // Send data to the JSON server
    try {
      const response = await fetch("http://localhost:3000/submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);

      // Clear the form
      setDate("");
      setSlug("");
      setCategory("");
      setName("");
      setHeading1("");
      setHeading2("");
      setParagraphs1([""]); // Reset to initial state
      setParagraphs2([""]); // Reset to initial state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <section id="form">
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Slug Name:
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </label>
          <br />

          
          <label>
            Heading 1:
            <input
              type="text"
              value={heading1}
              onChange={(e) => setHeading1(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="button" onClick={handleAddParagraph1}>
            Add Paragraph to Heading 1
          </button>
          <br />
          {paragraphs1.map((paragraph, index) => (
            <div key={index}>
              <label>
                Paragraph {index + 1} for Heading 1:
                <input
                  type="text"
                  value={paragraph}
                  onChange={(e) =>
                    handleParagraphChange1(index, e.target.value)
                  }
                  required
                />
              </label>
            </div>
          ))}

         
          <label>
            Heading 2:
            <input
              type="text"
              value={heading2}
              onChange={(e) => setHeading2(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="button" onClick={handleAddParagraph2}>
            Add Paragraph to Heading 2
          </button>
          <br />
          {paragraphs2.map((paragraph, index) => (
            <div key={index}>
              <label>
                Paragraph {index + 1} for Heading 2:
                <input
                  type="text"
                  value={paragraph}
                  onChange={(e) =>
                    handleParagraphChange2(index, e.target.value)
                  }
                  required
                />
              </label>
            </div>
          ))}

          <br />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Form;
