import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './BreedPage.css';

function BreedPage() {
  const itemsPerPage = 8;

  const catBreeds = [
    { id: 1, name: '英國短毛貓', image: '/t01.png', detailsLink: '/breed/1' },
    { id: 2, name: '美國短毛貓', image: '/t02.png', detailsLink: '/breed/2' },
    { id: 3, name: '曼赤肯', image: '/t03.png', detailsLink: '/breed/3' },
    { id: 4, name: '緬因貓', image: '/t04.png', detailsLink: '/breed/4' },
    { id: 5, name: '布偶貓', image: '/t05.png', detailsLink: '/breed/5' },
    { id: 6, name: '暹羅猫', image: '/t06.png', detailsLink: '/breed/6' },
    { id: 7, name: '波斯貓', image: '/t07.png', detailsLink: '/breed/7' },
    { id: 8, name: '蘇格蘭摺耳貓', image: '/t08.png', detailsLink: '/breed/8' },
    { id: 9, name: '斯芬克斯貓', image: '/t09.png', detailsLink: '/breed/9' },
    { id: 10, name: '異國短毛貓', image: '/t10.png', detailsLink: '/breed/10' },
    { id: 11, name: '俄羅斯藍貓', image: '/t11.png', detailsLink: '/breed/11' },
    { id: 12, name: '西伯利亞貓', image: '/t12.png', detailsLink: '/breed/12' },
    { id: 13, name: '阿比西尼亞貓', image: '/t13.png', detailsLink: '/breed/13' },
    { id: 14, name: '挪威森林貓', image: '/t14.png', detailsLink: '/breed/14' },
    { id: 15, name: '德文卷毛貓', image: '/t15.png', detailsLink: '/breed/15' },
    { id: 16, name: '孟加拉貓', image: '/t16.png', detailsLink: '/breed/16' },
    { id: 17, name: '東方短毛貓', image: '/t17.png', detailsLink: '/breed/17' },
    { id: 18, name: '賽爾凱克卷毛貓', image: '/t18.png', detailsLink: '/breed/18' },
  ];

  const location = useLocation();
  const navigate = useNavigate();


  const query = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(query.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  const totalPages = Math.ceil(catBreeds.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;
  const breedsToDisplay = catBreeds.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      navigate(`?page=${newPage}`); 
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      navigate(`?page=${newPage}`); 
    }
  };

  return (
    <div className="breed-page">
      <h1>貓咪品種</h1>
      <p>世界上有超過70種已被認證的貓品種.....</p>

      <div className="breed-grid">
        {breedsToDisplay.map((breed) => (
          <div key={breed.id} className="breed-item">
            <img src={breed.image} alt={breed.name} className="breed-image" />
            <h3>{breed.name}</h3>
            <Link to={breed.detailsLink} className="details-link">查看詳情 >></Link>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>上一頁</button>
        <span>頁面 {currentPage} / {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>下一頁</button>
      </div>
    </div>
  );
}

export default BreedPage;
