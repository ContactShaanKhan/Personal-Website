import { createContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { TabType, RouteType } from '../Common/Types'

export const GlobalStoreContext = createContext({});

const GlobalStoreActionType = {
    SET_TAB: 0,
}

// Setting up the Global Store
function GlobalStoreContextProvider(props) {
    // Global State

    const [store, setStore] = useState({
        currTab: TabType.HOME,
    });

    const storeReducer = (action) => {
        const { type, payload } = action;
        switch (type) {
            // Change the name of the current 'Edit List'
            case GlobalStoreActionType.SET_TAB: {
                return setStore({
                    currTab: payload,
                });
            }

            default:
                return store;
        }
    }

    // Auxilliary Information

    const history = useHistory();

    // Store functions

    // Once the state changes, now actually change the tab
    useEffect(() => {
        // Change the Page
        switch (store.currTab) {
            default:
            case TabType.HOME:
                history.push(RouteType.HOME);
                break;

            case TabType.ABOUTME:
                history.push(RouteType.ABOUTME);
                break;

            case TabType.FINDME:
                history.push(RouteType.FINDME);
                break;
        }
    }, [ store.currTab ]);

    // Sets the current tab by changing the tab state variable
    //      This does not actually change the route, instead the useEffect function
    //      above does the actual routing once the state changes.
    store.setTab = function (tab) {
        storeReducer({
            type: GlobalStoreActionType.SET_TAB,
            payload: tab
        });
    }

    //Return the contect provider

    return (
        <GlobalStoreContext.Provider
            value={{ store }}
        >
            {props.children}
        </GlobalStoreContext.Provider>
    );
}

export default GlobalStoreContext;
export { GlobalStoreContextProvider };
