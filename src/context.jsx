import React, { useContext, useEffect, useState } from "react";
const key = import.meta.env.VITE_APP_API_KEY;
const API = `https://www.omdbapi.com/?apikey=${key}`;
const AppContext = React.createContext();

const AppProvider = ({children})=>{

    const[isLoading, setIsLoading] = useState(true);
    const [isError , setIsError] = useState({
        show : false,
        msg : ""
    })
    const [movie , setMovie] = useState([]);
    const [query , setQuery] = useState("")


    const getMovies = async(url)=>{
        setIsLoading(true);
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search);
                setIsError({
                    show : false,
                    msg : ""
                })
            }
            else{
                setIsError({
                    show : true,
                    msg : data.Error
                })
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(() => {
        let timerOut = setTimeout(() => {
            getMovies(`${API}&s=${query}`);
        },200);

        return ()=> clearTimeout(timerOut);
    }, [query])
    
    return <AppContext.Provider value={{isLoading , isError , movie , query, setQuery}}>{children}</AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
}
export {AppContext , AppProvider , useGlobalContext};