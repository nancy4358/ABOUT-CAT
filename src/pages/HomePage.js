import React, { useEffect, useState, useRef } from 'react';
import "./HomePage.css";

function HomePage() {
  const [visibleItems, setVisibleItems] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleItems(prev => {
              if (!prev.includes(index)) return [...prev, index];
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    imageRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: "/hs01.png",
      title: "橘貓",
      desc: (
        <>
          溫柔好相處，大多以公貓居多，活潑又愛玩，還很話癆。每次放飯時間就會特別吵，還會邊吃邊講話。
          <span style={{ color: '#d13f0f', fontWeight: 'bold' }}>
            十隻橘貓九隻胖，還有一隻準備胖。
          </span>
        </>
      )
    },
    {
      src: "/hs02.png",
      title: "三花",
      desc: (
        <>
          獨立自主又外冷內熱的牠們，不喜歡生人，看似對熟人若即若離，但其實更會撒嬌。
          <span style={{ color: '#d13f0f', fontWeight: 'bold' }}>
            三花貓大多數都是美女
          </span>，
          母貓的叫聲也相較容易發出柔軟細微的聲音。
        </>
      )
    },
    {
      src: "/hs03.png",
      title: "黑貓",
      desc: 
      <>
       有些長輩認為黑貓不吉利因此比較排斥養黑貓，是養貓時常會被極力反對的貓。但是其實<span style={{ color: '#d13f0f', fontWeight: 'bold' }}>黑貓聰明、學習力極強</span>，與牠們外表不同的<span style={{ color: '#d13f0f', fontWeight: 'bold' }}>愛撒嬌</span>，不禁懷疑牠們骨子裡根本就是黏人小孩。

      </>
     
    },
    {
      src: "/hs04.png",
      title: "虎斑",
      desc: 
      <>
        花色交雜、顏色大多屬於深色，這種花色應該是台灣最常見的類型，相較其他花色的貓都要來得有野性，<span style={{ color: '#d13f0f', fontWeight: 'bold' }}>運動神經強，從小就很調皮好奇，也善於狩獵，在家裡爆衝是常有的事</span>。
      </>

    }
  ];
  

  return (
    <div className="homepage">
      <div className="content">
        <div className="text-content">
          <h1>歡迎來到＿貓研所</h1>
          <p>帶你瞭解更多關於貓的世界</p>
        </div>
        <div className="image-content">
          <img src="/01.png" alt="Cat" />
        </div>
      </div>

      <div className='image-d'>
        <img src='/h1.png' alt='' />
      </div>
      <div className='space' style={{height:"100px"}}></div>

      <div className="scroll-images">
        {images.map((image, index) => (
          <React.Fragment key={index}>
            <div
              className={`scroll-image-item ${index % 2 === 0 ? 'left-img' : 'right-img'}`}
              ref={el => (imageRefs.current[index] = el)}
              data-index={index}
            >
              {index % 2 === 0 ? (
                <>
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`scroll-img ${visibleItems.includes(index) ? 'visible' : ''}`}
                  />
                  <div className={`scroll-image-text ${visibleItems.includes(index) ? 'visible' : ''}`}>
                    <h3>{image.title}</h3>
                    <p>{image.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className={`scroll-image-text ${visibleItems.includes(index) ? 'visible' : ''}`}>
                    <h3>{image.title}</h3>
                    <p>{image.desc}</p>
                  </div>
                  <img
                    src={image.src}
                    alt={image.title}
                    className={`scroll-img ${visibleItems.includes(index) ? 'visible' : ''}`}
                  />
                </>
              )}
            </div>
            {index < images.length - 1 && (
              <div className="decoration-icon">🐾</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
