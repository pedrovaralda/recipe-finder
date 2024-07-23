import axios from 'axios';

const API_KEY = 'YOUR_SPOONACULAR_KEY';

export const searchRecipes = async (ingredients: string) => {
  const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients`, {
    params: {
      ingredients,
      number: 10,
      apiKey: API_KEY,
    },
  });
  return response.data;
};

export const getRecipeDetails = async (id: number) => {
  const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
    params: {
      apiKey: API_KEY,
    },
  });
  return response.data;
};
