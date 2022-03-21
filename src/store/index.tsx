import React from 'react';

export const defaultStore = {
    alert: {
        status: '',
        text: '',
        active: false
    },
};



export const StateContext = React.createContext({} as any);
export const DispatchContext = React.createContext({} as any);
export const LanguageContext = React.createContext({} as any);