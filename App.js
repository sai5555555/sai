import React, { useState } from 'react';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Favorites from './components/Favorites';
import recipesData from './data/recipes';

const App = () => {
    const [recipes, setRecipes] = useState(recipesData);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [favorites, setFavorites] = useState([]);

    const handleSelectRecipe = (recipe) => setSelectedRecipe(recipe);
    const handleCloseDetails = () => setSelectedRecipe(null);
    const handleAddFavorite = (recipe) => {
        if (!favorites.includes(recipe)) {
            setFavorites([...favorites, recipe]);
        }
    };

    return (
        <div>
            <Header />
            {selectedRecipe ? (
                <RecipeDetails recipe={selectedRecipe} onClose={handleCloseDetails} />
            ) : (
                <>
                    <Favorites favorites={favorites} onSelect={handleSelectRecipe} />
                    <RecipeList recipes={recipes} onSelect={handleSelectRecipe} />
                </>
            )}
        </div>
    );
};

export default App;
