import React, { createContext, useState } from 'react'

export const addData = createContext("");
export const updateData = createContext("");

const ContextProvider = ({children}) => {

    const [uData, setUData] = useState("");
    const [upData, setUpData] = useState("");

  return (
    <addData.Provider value={{uData,setUData}}>
        {/* <updateData.Provider value={{upData, setUpData}}> */}
        {children}
        {/* </updateData.Provider> */}
    </addData.Provider>
  )
}

export default ContextProvider