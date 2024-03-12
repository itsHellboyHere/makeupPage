import { createContext ,useContext,useState,useEffect} from "react";

const AppContext=createContext();

const getIntialDarkMode = ()=>{
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
    const storedDarkMode = localStorage.getItem('darkTheme');
 
    if (storedDarkMode === null) {
        return prefersDarkMode;
    }
 
    return storedDarkMode === 'true';
}
export const AppProvider =({children})=>{
const[isDarkTheme,setIsDarkTheme]=useState(getIntialDarkMode());

const toggleDarkTheme =()=>{
    const newDarkTheme=!isDarkTheme;
    setIsDarkTheme(newDarkTheme)
    // const body =document.querySelector('body');
    // body.classList.toggle( 'dark-theme',newDarkTheme );
    localStorage.setItem('darkTheme',newDarkTheme)
};
useEffect(()=>{
    document.documentElement.classList.toggle('dark', isDarkTheme);
},[isDarkTheme])
return <AppContext.Provider value={{isDarkTheme,toggleDarkTheme }}>
    {children}
</AppContext.Provider>
}
export const useGlobalContext= ()=> useContext(AppContext);
