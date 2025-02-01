import React from "react";
import SkillSetsData from "../assets/data-infor/SkillSetsData";
console.log(SkillSetsData);

const SkillSets = () => {
  return (
    <div
      className="skill-set mt-2"
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "nowrap",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      {SkillSetsData.map((skill, index) => (
        <p
          key={index}
          className="bg-gray-800 text-black w-64 py-2 px-4 mt-2 rounded-md text-center shadow"
          style={{
            marginRight: "10px",
            border: "1px solid blue",
            borderRadius: "15px",
            padding: "5px",
            width: "100px",
            fontSize: "12px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {skill}
        </p>
      ))}
    </div>
  );
};

export default SkillSets;
