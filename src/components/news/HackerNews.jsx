import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import lodash from 'lodash';
//https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
    const [hits, setHits] = useState([])
    const [query,setQuery] = useState('')
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [url,setUrl] = useState(`https://hn.algolia.com/api/v1/search?query=${query}`)
    const handleFetchData = useRef({})
    handleFetchData.current = async () => {
        try{
            setLoading(true)
            const response = await axios.get(url)
            setHits(response.data?.hits || [])
            setLoading(false)
        }
        catch (error){
            console.log(error)
            setLoading(false)
            setErrorMessage(`co loi xay ra ${error}`)
        }
    }
    // const handleUpdateQuery = lodash.debounce((e) => {
    //     setQuery(e.target.value)
    // },1000)
    useEffect(()=>{
        handleFetchData.current();
    },[url]);
    return (
        <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-6/12">
            <div className="flex mb-5 gap-x-5">
                <input
                    type = "text"
                    className = "border border-green-500 p-5 block w-full rounded-lg focus:border-blue-500 transition-all"
                    placeholder='typing your keyword...'
                    defaultValue = {query}
                    onChange={
                        // handleUpdateQuery
                        (e) => setQuery(e.target.value) 
                    }
                />
                <button 
                    className="px-8 text-white font-semibold bg-blue-400 rounded-lg hover:bg-red-400"
                    onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}
                >
                Search
                </button>
            </div>
            
            {
                loading 
                    && 
                <div className="loading mx-auto w-8 h-8 rounded-full border-blue-400 border-2 border-r-4 border-r-transparent animate-spin my-10"></div>
            }
            {!loading && errorMessage && <p className="my-5 text-red-600">{errorMessage}</p>}
            
            <div className="flex flex-wrap gap-5">
            {
                !loading && hits.length > 0 &&
                hits.map((item, index) =>
                    {    
                    if(!item.title || item.title.length <=0)
                        return null
                    else
                        return <h3 className="bg-gray-200 rounded-md p-2" key={item.title}>{item.title}</h3>
                        
                    }
                )
            }
            </div>
        </div>
    );
};

export default HackerNews;