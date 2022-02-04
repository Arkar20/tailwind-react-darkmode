import {useEffect,useState} from 'react';

export default function useDarkMode() {

    const [darkmode, setDarkmode] = useState(localStorage.theme);

    console.log(darkmode);

    useEffect(() => {
//        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//             document.documentElement.classList.add('dark')
//             } else {
//             document.documentElement.classList.remove('dark')
        
// }
        darkmode === "dark" && document.documentElement.classList.add('dark')
        darkmode === "light" && document.documentElement.classList.remove('dark')

        

        
    }, [darkmode])
    
    const toggleDarkMode = () => {
        setDarkmode(()=>darkmode === 'dark' ?'light':'dark')
    }

    return {toggleDarkMode}
    
}
