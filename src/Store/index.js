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

    // Determine the starting tab
    const path = window.location.pathname;

    let defaultTab = TabType.HOME;
    if (path.includes(RouteType.ABOUTME))
        defaultTab = TabType.ABOUTME;
    else if (path.includes(RouteType.RESUME))
        defaultTab = TabType.RESUME;
    else if (path.includes(RouteType.FINDME))
        defaultTab = TabType.FINDME;
    else if (path.includes(RouteType.SHADOW))
        defaultTab = TabType.SHADOW;

    // The global store/state
    const [store, setStore] = useState({
        currTab: defaultTab,
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

            case TabType.RESUME:
                history.push(RouteType.RESUME);
                break;

            case TabType.FINDME:
                history.push(RouteType.FINDME);
                break;

            case TabType.SHADOW:
                history.push(RouteType.SHADOW);
                break;
        }
    }, [store.currTab, history]);

    // Sets the current tab by changing the tab state variable
    //      This does not actually change the route, instead the useEffect function
    //      above does the actual routing once the state changes.
    store.setTab = function (tab) {
        storeReducer({
            type: GlobalStoreActionType.SET_TAB,
            payload: tab
        });
    }


    // Store Functions and constants related to screen size
    store.desktopMinWidthQuery = '(min-width: 993px)';
    store.makeMediaQuery = function (minWidth) {
        return '(min-width: ' + minWidth + 'px)';
    }


    // API Calls and server related information

    // Server constants ------------------------------------
    const maxCharacters = 500;
    const endPoint = "https://88wgvu7tt2.execute-api.us-east-1.amazonaws.com/default/ContactMe";
    const server_NotSoSecret_secret = "IT-IS-NO-SECRET-THAT-SHADOW-IS-THE-CUTEST-DOG-ALIVE-!9976802140!";

    store.submitContactForm = async function (name, reply_to, body) {
        console.log("Sending contact form...");

        name = name.trim();
        reply_to = reply_to.trim();
        body = body.trim();

        // TODO: Modal
        if (!name || !reply_to || !body)
            return false;

        // TODO: Modal
        if (!reply_to.includes('@'))
            return false;

        const myHeaders = {
            shadowbestdog: server_NotSoSecret_secret
        };

        const data = {
            sender: name,
            senderEmail: reply_to,
            text: body
        };

        const request = new Request(endPoint, {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers(myHeaders),
        });

        const response = await fetch(request);

        if (!response.ok) {
            alert("The server could not process the request.");
        }
        else {
            alert("Success, message sent!");
        }
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
