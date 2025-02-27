import React from 'react'
import './Herro.scss'
import Hero_img from '../Herro/gril.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import barg from '../Herro/barg.png'

const Herro = () => {
  return (
<>

    <div className="hero conteiner">
      <div className="herro_txt">
          <h3>
          Вкусная  <br />
        еда ждет <br />
        тебя!
          </h3>
          <button>Посмотреть меню  <FaArrowRightLong /> </button>
      </div>

        <div className="herro_img">
            <img src= {Hero_img} alt="tovuq go'shti" />
        </div>
        
        <div className="falling-leaves">
          <img src={barg} className="leaf" alt="leaf" />
          <img src={barg} className="leaf" alt="leaf" />
          <img src={barg} className="leaf" alt="leaf" />
          <img src={barg} className="leaf" alt="leaf" />
          <img src={barg} className="leaf" alt="leaf" />
</div>
    </div>



















</>
  )
}

export default Herro