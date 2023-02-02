import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider=({children}) => {

    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(false)
    const [page,setPage] = useState({page:'',link:[] })
    const [location,setLocation]=useState({})



    return(

    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}