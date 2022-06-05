import { createContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { TabType, RouteType } from '../Common/Types'

export const GlobalStoreContext = createContext({});

const GlobalStoreActionType = {
    SET_TAB: "SET_TAB",
    CHANGE_MODAL: "CHANGE_MODAL",
    TOGGLE_LOADING: "TOGGLE_LOADING"
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
        modal: null,
        loading: false,
    });

    const storeReducer = ({ type, payload }) => {
        return setStore(oldStore => {
            const newStore = {
                ...oldStore
            };

            switch (type) {
                // Change the name of the current 'Edit List'
                case GlobalStoreActionType.SET_TAB:
                    newStore.currTab = payload;
                    break;

                case GlobalStoreActionType.CHANGE_MODAL:
                    newStore.modal = payload;
                    break;

                case GlobalStoreActionType.TOGGLE_LOADING:
                    newStore.loading = !oldStore.loading;
                    break;

                default:
                    break;
            }

            return newStore;
        });
    };

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
    store.desktopMinWidth = 993;
    store.makeMediaQuery = function (minWidth) {
        return `(min-width: ${minWidth ?? store.desktopMinWidth}px)`;
    }
    store.desktopMinWidthQuery = store.makeMediaQuery(store.desktopMinWidth);


    // API Calls and server related information

    // Server constants ------------------------------------
    store.maxCharacters = 500;
    const endPoint = "https://88wgvu7tt2.execute-api.us-east-1.amazonaws.com/default/ContactMe";
    const server_NotSoSecret_secret = "IT-IS-NO-SECRET-THAT-SHADOW-IS-THE-CUTEST-DOG-ALIVE-!9976802140!";

    store.submitContactForm = async function (name, reply_to, body, hook) {
        console.log("Sending contact form...", name, reply_to, body);

        name = name.trim();
        reply_to = reply_to.trim();
        body = body.trim();

        if (!name || !reply_to || !body) {
            store.createModal({
                title: "Error in form",
                body: "One of the fields is missing content.",
            }, function () {
                if (hook)
                    hook("Error in form");
            });

            return false;
        }

        if (!reply_to.includes('@')) {
            store.createModal({
                title: "Error with Email",
                body: "Please provide a valid email address.",
            }, function () {
                if (hook)
                    hook("Error with Email");
            });

            return false;
        }

        if (body.length > store.maxCharacters) {
            store.createModal({
                title: "Error with Body Text",
                body: `Please keep the number of characters to less than ${store.maxCharacters}`,
            }, function () {
                if (hook)
                    hook("Error with Body Text");
            });

            return false;
        }

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

        try {
            storeReducer({
                type: GlobalStoreActionType.TOGGLE_LOADING
            });

            const response = await fetch(request);

            if (response.ok) {
                store.createModal({
                    title: "Success!",
                    body: `${name}, thank you for reaching out to me!  A confirmation email has been sent to your address.`,
                }, function () {
                    if (hook)
                        hook();

                    storeReducer({
                        type: GlobalStoreActionType.TOGGLE_LOADING
                    });
                });

                return true;
            }
        }
        catch (err) { /* Pass down error */ }

        store.createModal({
            title: "Server Error",
            body: "The server could not process the request, feel free to contact Shaan directly at contactshaankhan@gmail.com",
        }, function () {
            if (hook)
                hook("Server Error");

            storeReducer({
                type: GlobalStoreActionType.TOGGLE_LOADING
            });
        });

        return false;
    }

    // Modal Related Functions

    // Modal Related Functions ------------------------------------
    store.createModal = function (metadata, closeCallback = null, callback = null) {
        const { title, body, action } = metadata;

        const modalInfo = {
            title: title,
            body: body,

            // Supply action with a string if you want an option besides just `close`
            action: action,
            hook: callback,
            closeHook: closeCallback
        };

        storeReducer({
            type: GlobalStoreActionType.CHANGE_MODAL,
            payload: modalInfo
        });
    }

    store.closeModal = function () {
        if (!store.modal)
            return;

        storeReducer({
            type: GlobalStoreActionType.CHANGE_MODAL,
            payload: null
        });
    }

    //Return the context provider

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
