import React, { useRef } from 'react'

export const Buttons = ({ name, color, setColor }) => {
  const refMenu = useRef(null)

  const handleToggle = () => {
    refMenu.current.classList.toggle('active')
  }
  return (
    <div className="menu z-20" ref={refMenu}>
      <div className="toggle" onClick={handleToggle}>
        {name}
      </div>
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
    </div>
  )
}
