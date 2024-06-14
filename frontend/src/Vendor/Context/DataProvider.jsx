import { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [account, setAccount] = useState(null);
    const [firmName, setFirmName] = useState(null);

    return (
        <DataContext.Provider value={{ account, setAccount, firmName, setFirmName }}>
            {children}
        </DataContext.Provider>
    );
};


export default DataProvider;
