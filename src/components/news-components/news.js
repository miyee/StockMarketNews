import React, {useState, useEffect} from 'react';
import IndividualNews from './components/invidualNews';

const URL_HEADER = 'https://newsapi.org/v2';
const SEARCH_URL = '/everything?q=';
const NEWS_API_KEY = 'a2976be66da94d908ee37e8a22718f4e';

const News = ({stocks}) => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        if(stocks.length) {
            callNewsAPI();
        } else {
            setNewsList([]);
        }
    }, [stocks]);

    async function callNewsAPI() {
        var req = new Request(generateRequestURL());
        var result = await fetch(req).then(function(response) {
            return response.json();
        });

        if(result) {
            setNewsList(result.articles);
        }
    };

    function generateRequestURL() {
        const requestURL =  URL_HEADER + SEARCH_URL + combineAllSearches() + '&sortBy=popularity' + '&apiKey=' + NEWS_API_KEY;
        return requestURL;
    }

    function combineAllSearches() {
        let totalSearchString = '';
        stocks.forEach((stockName, index) => {
            if(index === stocks.length - 1) {
                totalSearchString += stockName;
            } else {
                totalSearchString += stockName + ' OR ';
            }        
        });

        return '(' + totalSearchString + ')';
    }

    return (
        <div>
            <div>
                {newsList.map(news => <IndividualNews key={news.url} news={news}></IndividualNews>)}
            </div>
        </div>

    )
}

export default News;