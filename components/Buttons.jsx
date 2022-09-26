import React, { useRef } from 'react'

export const Buttons = ({ name, color, setColor, id }) => {
  const refMenu = useRef(null)

  const handleToggle = () => {
    refMenu.current.classList.toggle('active')
  }
  // funcion para que a uno solo le aparezca la opcion de cambiar el color
  const handleHidden = (id) => {
    if (refMenu.current.matches('.active')) {
      // console.log('se la quite')
      refMenu.current.classList.remove('active')
      return
    }
    if (typeof window !== 'undefined') {
      const circlesCards = document.querySelectorAll('.menu')
      for (let i = 0; i < circlesCards.length; i++) {
        circlesCards[i].classList.remove('active')
      }
      refMenu.current.classList.toggle('active')
    }
    // console.log(refMenu)
  }
  return (
    <div
      className="menu z-20"
      ref={refMenu}
      id={id}
      onClick={() => handleHidden(id)}
    >
      <div className="toggle">{name}</div>
      <li className="rojo">
        <a
          className="w-6 h-6 bg-red-500 inline-block rounded-full cursor-pointer"
          onClick={() => setColor('#EF4444')}
        ></a>
      </li>
      <li className="amarillo">
        <a
          className="w-6 h-6 bg-yellow-500 inline-block rounded-full cursor-pointer"
          onClick={() => setColor('#EAB308')}
        ></a>
      </li>
      <li className="azul">
        <a
          className="w-6 h-6 bg-blue-500 inline-block rounded-full cursor-pointer"
          onClick={() => setColor('#3B82F6')}
        ></a>
      </li>
      <li className="verde ">
        <a
          className="w-6 h-6 bg-green-500 inline-block rounded-full cursor-pointer"
          onClick={() => setColor('#22C55E')}
        ></a>
      </li>
      <li className="rosado">
        <a
          className="w-6 h-6 bg-pink-500 inline-block rounded-full cursor-pointer"
          onClick={() => setColor('#EC4899')}
        ></a>
      </li>
      <li className="negro">
        <a
          className="w-6 h-6 bg-black inline-block rounded-full cursor-pointer"
          onClick={() => setColor('#000')}
        ></a>
      </li>
      <li className="blanco">
        <a
          className="w-6 h-6 bg-white inline-block rounded-full cursor-pointer"
          onClick={() => setColor('#fff')}
        ></a>
      </li>
    </div>
  )
}
