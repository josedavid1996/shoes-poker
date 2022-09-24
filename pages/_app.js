import { useState } from 'react'
import { ColorContext } from '../context'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  // color de las partes
  const [colorCordones, setColorCordones] = useState('#ffffff')
  const [colorMalla, setColorMalla] = useState('#ffffff')
  const [colorBotonesCordones, setBotonesCordones] = useState('#ffffff')
  const [colorInterior, setInterior] = useState('#ffffff')
  const [colorSuela, setColorSuela] = useState('#ffffff')
  const [colorLateralDecoration, setLateralDecoration] = useState('#ffffff')
  const [colorSuperiorDecoration, setSuperiorDecoration] = useState('#ffffff')
  const [colorTraseraDecoration, setTraseraDecoration] = useState('#ffffff')

  return (
    <>
      <ColorContext.Provider
        value={{
          colorSuela,
          setColorSuela,
          colorCordones,
          setColorCordones,
          colorMalla,
          setColorMalla,
          colorBotonesCordones,
          setBotonesCordones,
          colorInterior,
          setInterior,
          colorLateralDecoration,
          setLateralDecoration,
          colorSuperiorDecoration,
          setSuperiorDecoration,
          colorTraseraDecoration,
          setTraseraDecoration
        }}
      >
        <Component {...pageProps} />
      </ColorContext.Provider>
    </>
  )
}

export default MyApp
