import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
    const [hits, setHits] = useState([])
    const [query,setQuery] = useState('query')
    const [loading, setLoading] = useState(true);
    const handleFetchData = useRef({})
    handleFetchData.current = async () => {
        try{
            setLoading(true)
            const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
    
            setHits(response.data?.hits || []);
            setLoading(false)
        }
        catch (error){
            console.log(error);
            setLoading(false)
        }
    }
    useEffect(()=>{
        handleFetchData.current();
    },[query]);
    return (
        <div>
            <input
                type = "text"
                className = "border border-green-500 text-black p-5 mb-5"
                value = {query}
                onChange={(e) => setQuery(e.target.value)}
            >
            </input>
            {
                loading 
                    && 
                <div className="loading w-8 h-8 rounded-full border-blue-400 border-2 border-r-4 border-r-transparent animate-spin"></div>
            }
            {
                !loading && hits.length > 0 &&
                hits.map((item, index) =>
                <h3 key={item.title}>{item.title}</h3>
                )
            }
        </div>
    );
};

export default HackerNews;