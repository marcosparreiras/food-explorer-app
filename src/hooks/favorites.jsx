import { createContext, useContext, useState, useEffect } from 'react';

/* eslint-disable */
const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    function toggleFavorite(data) {
        setFavorites((prevState) => {
            const alreadyExists = prevState.find((fav) => fav.id === data.id);
            let newState = [];
            if (!alreadyExists) {
                newState = [...prevState, data];
            } else {
                newState = prevState.filter((fav) => fav.id !== data.id);
            }
            localStorage.setItem(
                '@foodexplorer:favs',
                JSON.stringify(newState)
            );
            return newState;
        });
    }

    function checkIfIsFav(data) {
        const isFav = favorites.find((fav) => fav.id === data.id);
        if (isFav) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem('@foodexplorer:favs'));
        if (Array.isArray(favs)) {
            setFavorites(favs);
        }
    }, []);

    return (
        <FavoritesContext.Provider
            value={{ favorites, toggleFavorite, checkIfIsFav }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

function useFavorites() {
    const context = useContext(FavoritesContext);
    return context;
}

export { FavoritesContext, FavoritesProvider, useFavorites };
