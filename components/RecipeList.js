import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, onSelect }) => (
    <div>
        {recipes.map((recipe) => (
            <RecipeCard
                key={recipe.id}
                recipe={recipe}
                onSelect={onSelect}
            />
        ))}
    </div>
);

export default RecipeList;
