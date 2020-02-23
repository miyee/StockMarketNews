import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card';
import { LineChart } from 'react-chartkick';
import 'chart.js';

import { getDailyValues } from '../../api/useStockValueApi'

const DailyTrend = ({stock,age}) => {
    
    const [latestDate, setLatestDate] = useState(false);
    const [priceMap, setPriceMap] = useState(false);
    

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
