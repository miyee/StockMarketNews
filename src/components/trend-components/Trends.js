import React, { useState } from 'react'
import IndividualTrend from './IndividualTrend';

const Trends = ({stocks}) => {

    return (
        <div style={{display:"center"}}>
            <ul style={{'listStyleType':'none'}}>
                {
                    stocks.map( stock => {
                        return (
                            <IndividualTrend key={stock} stock={stock}/>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Trends
