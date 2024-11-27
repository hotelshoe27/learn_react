import React from 'react'

const ButtonArea = ({text, oneButtonClick}) => {
    // logic
    const name = 'saul';
    console.log('button name: ', name)

    const href = "https://www.naver.com";
    const handleClick = () => {
        oneButtonClick(text);

    }
    // view
  return (
    <div className="button">
        <button type="button" onClick={handleClick}>
            {text}
        </button>
        <a href={href}>링크이동</a>
        <p>안녕하세요 {name}님!</p>
    </div>
        
  );
};

export default ButtonArea;