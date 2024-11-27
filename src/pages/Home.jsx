import React from 'react'
import ButtonArea from '../components/ButtonArea'
import Messaege from './../components/Messaege';
import Counter from './../components/Counter';
import Welcome from './../components/Welcome';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <div>
    Home💒

    <Link className='block bg-slate-600' to={'/login'}>
        Login 이동
    </Link>
    <ButtonArea />
    <Messaege />
    <Counter />
    <Welcome user_name="saul" input_message="오늘도 좋은 하루 보내세요~" />
  </div>
  )
}

export default Home