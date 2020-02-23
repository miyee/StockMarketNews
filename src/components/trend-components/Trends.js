import React, { useState } from 'react'
import Slider from '@material-ui/core/Slider'
import IndividualTrend from './IndividualTrend';

const Trends = ({stocks}) => {

    const [age, setAge] = useState("20")
    function handleChange(event, value) {
        setAge(value)
    }

    return (
        <div style={{display:"center"}}>
            <Slider
                defaultValue={20}
                aria-labelledby="discrete-slider-small-steps"
                step={1}
                marks
                min={1}
                max={100}
                valueLabelDisplay="auto"
                onChange={handleChange}
            />
            <ul style={{'listStyleType':'none'}}>
                {
                    stocks.map( stock => {
                        return (
                            <IndividualTrend key={stock} stock={stock} age={age}/>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default Trends
