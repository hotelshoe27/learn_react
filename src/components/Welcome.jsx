import React from 'react'
import ButtonArea from './ButtonArea';

const Welcome = ({user_name, input_message}) => {
    // logic
    const handleClick = (data) => {
        console.log('click!', data);
    }

    // view
  return (
    <div className='border border-purple-400'>
        <h3 className='text-green-400'>안녕하세요, {user_name}님😙</h3>
        <p>{input_message}</p>
        <ButtonArea text="첫 번째 버튼" oneButtonClick={handleClick} />
        <ButtonArea text="두 번째 버튼" oneButtonClick={handleClick} />
    </div>
  )
}

export default Welcome