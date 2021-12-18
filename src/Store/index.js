import { createContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

export const GlobalStoreContext = createContext({});

// Setting up the Global Store
function GlobalStoreContextProvider(props) {
    const [store, setStore] = useState({
        dummy: false,
    });

    const history = useHistory();

    return (
        <GlobalStoreContext.Provider value={{
            store
        }}>
            {props.children}
        </GlobalStoreContext.Provider>
    );
}

export default GlobalStoreContext;
export { GlobalStoreContextProvider };
