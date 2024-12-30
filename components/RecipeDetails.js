import React from 'react';

const RecipeDetails = ({ recipe, onClose }) => (
    <div className="recipe-details">
        <button onClick={onClose}>Back</button>
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} />
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Dietary:</strong> {recipe.dietary}</p>
        <p><strong>Ingredients:</strong></p>
        <ul>
            {recipe.ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)}
        </ul>
        <p><strong>Steps:</strong></p>
        <ol>
            {recipe.steps.map((step, idx) => <li key={idx}>{step}</li>)}
        </ol>
    </div>
);

export default RecipeDetails;
