"use client"
import { createGlobalStyle } from "styled-components"


const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    background-color: #ebe9e9;
  }
`

const GlobalStyles = () => {
  return <Global/>
}

export default GlobalStyles