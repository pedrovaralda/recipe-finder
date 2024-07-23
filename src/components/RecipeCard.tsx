import React from 'react';
import './RecipeCard.css';

interface RecipeCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, image, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={image} alt={title} className="recipe-card-image" />
      <h3 className="recipe-card-title">{title}</h3>
    </div>
  );
};

export default RecipeCard;
