import React from 'react';
import './Budget.css'

const Budget = (props) => {
    let totalSalary=0;
    const player = props.budget;
    let length = player.length;
    const exists=[];
    const players=[];
    for (let i = 0; i < player.length; i++) {
        const id = player[i].id;
        if (exists.indexOf(id)==-1){
            exists.push(id);

            const selectedPlayer ={
                "name":player[i].name,
                "salary":player[i].salary
            }
            players.push(selectedPlayer);


        const salary = player[i].salary;
        totalSalary += salary;
        }
        else {
            length= length-1;
            alert("already selected");
        }
        
    }
    return (
        <div>
            <div className="selected">
            <h5>Total Selected: {length}</h5>
            <h5>Total Budget: {totalSalary}</h5>
            </div>
            {
                players.map(name => <p>{name.name}, salary: {name.salary}</p>)
               
            }
        </div>
    );
};

export default Budget;