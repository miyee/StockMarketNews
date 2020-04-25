import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card';
import Slider from '@material-ui/core/Slider'
import { LineChart } from 'react-chartkick';
import 'chart.js';

import { getDailyValues } from '../../api/useStockValueApi'

const DailyTrend = ({stock}) => {
    
    const [latestDate, setLatestDate] = useState(false);
    const [priceMap, setPriceMap] = useState(false);
    const [age, setAge] = useState("20")

    function handleChange(event, value) {
        setAge(value)
    }

    useEffect(() => {
        parseData()
    }, [stock]);

    const parseData = () => {

        (async () => {
            const [date, priceMap] = await getDailyValues(stock);
            setLatestDate(date);
            setPriceMap(priceMap);
        })()
    }

    const updatePriceMap = (map, age) => {

        var result = {};
        // console.log("Full map is " + JSON.stringify(map) + " with length " + Object.keys(map).length)

        for (var index = 0; index < age && index < Object.keys(map).length; index++) {
            var key = Object.keys(map)[index];
            result[key] = map[key];
        }
        return result;
    } 

    return (
        <li>
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
            <Card style={{
                display:"center",
                backgroundColor:"#ededed",
            }}>
                <b>{stock}</b><br/>
                Last Updated: {latestDate}
            </Card>
            <LineChart data={updatePriceMap(priceMap, age)} curve={false} prefix="$" messages={{empty: "No data"}} />
            <br/>
        </li>
    )
}

export default DailyTrend
