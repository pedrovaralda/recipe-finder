import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';
import { searchRecipes, getRecipeDetails } from './api/api';
import './styles.css';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<any | null>(null);

  const handleSearch = async (ingredients: string) => {
    if (ingredients.length > 0) {
      const results = await searchRecipes(ingredients);
      setRecipes(results);
    } else {
      setRecipes([]);
    }
  };

  const handleSelectRecipe = async (id: number) => {
    const recipeDetails = await getRecipeDetails(id);
    setSelectedRecipe(recipeDetails);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            onClick={() => handleSelectRecipe(recipe.id)}
          />
        ))}
      </div>
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
    </div>
  );
};

export default App;
