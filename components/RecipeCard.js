import React from 'react';

const RecipeCard = ({ recipe, onSelect }) => (
    <div className="recipe-card" onClick={() => onSelect(recipe)}>
        <img src={recipe.image} alt={recipe.name} />
        <h3>{recipe.name}</h3>
        <p>{recipe.cuisine} | {recipe.dietary}</p>
    </div>
);

export default RecipeCard;
