import React from 'react';

const Favorites = ({ favorites, onSelect }) => (
    <div>
        <h2>Your Favorites</h2>
        {favorites.length === 0 ? (
            <p>No favorites yet.</p>
        ) : (
            favorites.map((recipe) => (
                <div key={recipe.id} onClick={() => onSelect(recipe)}>
                    {recipe.name}
                </div>
            ))
        )}
    </div>
);

export default Favorites;
