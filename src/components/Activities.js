import React from 'react';


const Activities = ({ activities }) => {
    return (
        // <h1>Activities</h1>
        
            activities.map((activity) => {
                const { name, id, description } = activity
    
                return (
                    <div key={id}>
                        <h3>{name}</h3>
                        <p>description: {description}</p>
                    </div>
                )
            }) 
        
       
    )
}

export default Activities;