import React from "react";

const User = ({name, city, role, skills, online, image}) => {
  return (
    <div className="card-container">
      <span className={`pro ${online ? "online" : "offline"}`}>{online ? "ONLINE" : "OFFLINE"}</span>
      <img src={image} alt="user" />
      <h3>{name}</h3>
      <h3>{city}</h3>
      <p>{role}</p>
      <div className="buttons">
        <button>Message</button>
        <button className="outline">Following</button>
      </div>
      <div className="skills">
        <h6>Skills:</h6>
        <ul>
          {skills.map((skill,index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
