import React, { useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';
//import lodash from 'lodash';

const initialState = {
    hits: [],
    query: '',
    loading: true,
    errorMessage: '',
    url: "https://hn.algolia.com/api/v1/search?query=''"
}
const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case 'SET_HITS':
            return {...state, hits: action.payload};
        case 'SET_LOADING':
            return {...state, loading: action.payload};
        case 'SET_ERRORMESSAGE':
            return {...state, errorMessage: action.payload};
        case 'SET_QUERY':
            return {...state, query: action.payload};
        case 'SET_URL':
            return {...state, url: action.payload};
        default:
            break;
    }
}
const HackerNews2 = () => {
    const handleFetchData = useRef({})
    const [state, dispatch] = useReducer(reducer, initialState)
    handleFetchData.current = async () => {
        dispatch({
            type: 'SET_LOADING',
            payload: true
        })
        try{
            const response = await axios.get(state.url);
            dispatch({
                type: 'SET_HITS',
                payload: response.data?.hits || []
            })
            dispatch({
                type: 'SET_LOADING',
                payload: false
            })
        }
        catch (error){
            dispatch({
                type: 'SET_LOADING',
                payload: false
            })
            dispatch({
                type: 'SET_ERRORMESSAGE',
                payload: `The error happened ${error}`
            })
        }
    }
    useEffect(()=>{
        handleFetchData.current();
    },[state.url]);
    return (
        <div className="bg-white mx-auto mt-5 mb-5 p-5 rounded-lg shadow-md w-6/12">
            <div className="flex mb-5 gap-x-5">
                <input
                    type = "text"
                    className = "border border-green-500 p-5 block w-full rounded-lg focus:border-blue-500 transition-all"
                    placeholder='typing your keyword...'
                    defaultValue = {state.query}
                     onChange={
                          //handleUpdateQuery
                         (e) => dispatch({
                                type: 'SET_QUERY',
                                payload: e.target.value
                            })
                     }
                />
                <button 
                    className="px-8 text-white font-semibold bg-blue-400 rounded-lg"
                    onClick={
                        () => dispatch({
                                type: 'SET_URL',
                                payload: `https://hn.algolia.com/api/v1/search?query=${state.query}`
                        })
                    }
                    disabled = {state.loading}
                    styled={{
                        opacity: state.loading ? '0' : '1',
                    }}
                >
                Search
                </button>
            </div>
            
            {
                state.loading 
                    && 
                <div className="loading mx-auto w-8 h-8 rounded-full border-blue-400 border-2 border-r-4 border-r-transparent animate-spin my-10"></div>
            }
            {!state.loading && state.errorMessage && <p className="my-5 text-red-600">{state.errorMessage}</p>}
            
            <div className="flex flex-wrap gap-5">
            {
                !state.loading && state.hits.length > 0 &&
                state.hits.map((item, index) =>
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

export default HackerNews2;