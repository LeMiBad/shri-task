"use client"

import { usePathname } from 'next/navigation';
import Link from "next/link"
import styled from "styled-components"


const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  box-sizing: border-box;
  background-color: rgba(51, 51, 51, 1);
  width: 100%;
  max-height: 60px;
  height: 60px;
  a {
    text-decoration: none;
    font-weight: 400;
    color: white;
    cursor: pointer;
    font-size: 12px;
  }
`

const Footer = () => {
  const path = usePathname();

  return (
    <Wrapper>
      <Link href={path === "/q&a"? "/" : "q&a"}>{path === "/q&a"? "На главную" : "Вопросы и ответы"}</Link>
      <Link href={path === "/about"? "/" : "/about"}>{path === "/about"? "На главную" : "О нас"}</Link>
    </Wrapper>
  )
}

export default Footer