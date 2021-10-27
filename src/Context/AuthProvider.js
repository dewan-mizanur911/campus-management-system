import React from 'react';
import useFirebase from '../hooks/useFirebase';

 export const  CampusContext = React.createContext();

const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <CampusContext.Provider value={allContext}>
            {
                children
            }
        </CampusContext.Provider>
    );
};

export default AuthProvider;