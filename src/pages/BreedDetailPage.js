import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { catBreeds } from '../pages/catBreedsData'; 
import "./BreedDetailPage.css"; 

function BreedDetailPage() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const breed = catBreeds.find((breed) => breed.id === parseInt(id)); 

  if (!breed) {
    return <div>找不到该猫咪品种的详细信息</div>; 
  }

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className="breed-detail-page">
         <button className="back-button" onClick={handleBackClick}>
         <i className="fa fa-arrow-left" style={{ color: '#e26a32', fontSize: '24px' }}></i>
      </button>
      <h1>{breed.name} </h1>
      

      <div className="breed-detail-content">
        <img src={breed.image} alt={breed.name} className="breed-image" />
        <div className="breed-info">
          <p><strong>原產地：</strong>{breed.origin}</p>
          <p><strong>體重：</strong>{breed.weight}</p>
          <p><strong>壽命：</strong>{breed.lifespan}</p>
          <p><strong>個性：</strong>{breed.personality}</p>
          <p><strong>介紹：</strong>{breed.description}</p>
          
        </div>
      </div>
    </div>
  );
}

export default BreedDetailPage;
