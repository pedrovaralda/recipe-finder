import React from 'react';
import { useTranslation } from 'react-i18next';
import './RecipeDetail.css';

interface RecipeDetailProps {
  recipe: any;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  const { t } = useTranslation(); // Hook para tradução

  if (!recipe) return null;

  return (
    <div className="recipe-detail">
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="recipe-detail-image" />
      <h3>{t('ingredients')}</h3> {/* Texto traduzido */}
      <ul>
        {recipe.extendedIngredients.map((ingredient: any) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>{t('instructions')}</h3> {/* Texto traduzido */}
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
