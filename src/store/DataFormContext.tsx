import React, { createContext, useContext, useState } from 'react'

interface IContextProps {
    data: any;
    setValues: ({ type }: { type: string }) => void;
}

const DataContext = createContext({} as IContextProps);

export const DataProvider = ({ children }: JSX.ElementChildrenAttribute) => {
    const [data, setData] = useState({})

    const setValues = (values: any) => {
        setData((prevData) => ({
            ...prevData,
            ...values
        }))
    }
    return (
        <DataContext.Provider value={{ data, setValues }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext)