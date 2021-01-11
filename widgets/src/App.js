import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";

const items = [
  {
    tittle: "Core Java",
    content:
      "Core Java® has long been recognized as the leading, no-nonsense tutorial and reference for experienced programmers who want to write robust Java code for real-world applications. Now, Core Java®, Volume I–Fundamentals, Tenth Edition, has been extensively updated to reflect the most eagerly awaited and innovative version of Java in years: Java SE 8. Rewritten and reorganized to illuminate new Java SE 8 features, idioms, and best practices, it contains hundreds of example programs–all carefully crafted for easy understanding and practical applicability."
  },
  {
    tittle: "Professional JavaScript for Web Developers",
    content:
      "Professional JavaScript for Web Developers is the essential guide to next-level JavaScript development. At 1,200 pages, this book is the most comprehensive JavaScript reference available anywhere. Written for intermediate-to-advanced programmers, this book jumps right into the technical details to help you clean up your code and become a more sophisticated JavaScript developer. "
  },
  {
    tittle: "Computer Networking: A Top-Down Approach",
    content:
      "Computer Networking: A Top Down Approach builds on the author’s long tradition of teaching this complex subject through a layered approach in a “top-down manner.” The text works its way from the application layer down toward the physical layer, motivating readers by exposing them to important concepts early in their study of networking. Focusing on the Internet and the fundamentally important issues of networking, this text provides an excellent foundation for readers interested in computer science and electrical engineering, without requiring extensive knowledge of programming or mathematics. The Seventh Edition has been updated to reflect the most important and exciting recent advances in networking."
  }
];

const options = [
  {
    label: "The Color Red",
    value: "red"
  },
  {
    label: "The Color Green",
    value: "green"
  },
  {
    label: "The Color Blue",
    value: "blue"
  }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        Toggle Dropdown
      </button>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  );
};
