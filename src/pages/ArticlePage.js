import React from 'react';
import { Link } from 'react-router-dom'; 
import './ArticlePage.css';

function ArticlePage() {

  
  return (
    <div className="article-page">
      <h1>文章導覽</h1>

      <div className="article">
        <div className="article-content">
          <img src="/art2.png" alt="文章图片" className="article-image" />
          <div className="text-content">
            <h2>新手養貓</h2>
            <p>新手養貓需要做哪些準備？讓你快速掌握養貓必備物品及養貓前須知，幫助你在貓咪入屋第一天就做好所有準備，讓貓咪適應良好....</p>
            <Link to="/article/1" className="read-more-link">了解更多</Link> 
          </div>
        </div>
      </div>

      <div className="article reverse">
        <div className="article-content">
          <div className="text-content">
            <h2>品種貓、米克斯，我適合養哪種貓？</h2>
            <p>不論是領養還是購買，臺灣可以獲取貓咪的管道相當多元，分別有收容所、中途之家、寵物店及合法貓舍，大家可依據自身需求來挑選獲取管道......</p>
            <Link to="/article/2" className="read-more-link">了解更多</Link> 
          </div>
          <img src="/art3.png" alt="文章图片" className="article-image" />
        </div>
      </div>

      <div className="article">
        <div className="article-content">
          <img src="/art1.png" alt="文章图片" className="article-image" />
          <div className="text-content">
            <h2>貓平均壽命有多長？</h2>
            <p>貓咪的平均壽命通常落在 13-17 歲之間，但仍會受到品種、飲食營養、生活環境與習慣等多項因素而異。以較少受到遺傳疾病影響的混種貓（米克斯）及部分品種貓（如暹羅貓）來說，活到 20 歲（相當於人類 96 歲）也是很有可能的....</p>
            <Link to="/article/3" className="read-more-link">了解更多</Link> 
          </div>
        </div>
      </div>

      <div className="article reverse">
        <div className="article-content">
          <div className="text-content">
            <h2>貓咪不能吃什麼？</h2>
            <p>貓不能吃的東西有哪些？蔬菜、水果、海鮮中有哪些是不能餵食的？......</p>
            <Link to="/article/4" className="read-more-link">了解更多</Link> 
          </div>
          <img src="/art5.png" alt="文章图片" className="article-image" />
        </div>
      </div>
      <div className="article">
        <div className="article-content">
          <img src="/art6.png" alt="文章图片" className="article-image" />
          <div className="text-content">
            <h2>貓愛滋是什麼？</h2>
            <p>貓愛滋是貓常見的病毒感染，不過專家指出，貓愛滋不是絕症，只要好好照顧，還是能跟一般貓有一樣的壽命和生活品質....</p>
            <Link to="/article/5" className="read-more-link">了解更多</Link> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlePage;
