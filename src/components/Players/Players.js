import React from 'react';
import './Players.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faPlusCircle } from '@fortawesome/free-solid-svg-icons';
const Players = (props) => {
    const {name,img,salary, id}= props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="player-page">
            <img className="playerImg" src={img} alt=""/>
            <h4>Name: {name}</h4>
            <p>Salary: {salary} </p>
            <button className="btn btn-primary" onClick={()=>handleAddPlayer(props.player)}> <FontAwesomeIcon icon={faPlusCircle} /> Select</button>
        </div>
    );
};

export default Players;