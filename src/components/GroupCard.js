import React from "react";
import "../styles/GroupCard.css";

const GroupCard = ({ groupname }) => {
    return (
        <div className="group-card">
            <h3>{groupname}</h3>
            <p>Description of {groupname}</p>
        </div>
    );
};

export default GroupCard;