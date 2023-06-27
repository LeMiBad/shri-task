"use client"

import { title } from 'process';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import CrossIcon from '../Icons/CrossIcon';

interface Props {
  title?: string
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background-color: #0000005e;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
`

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
`

const Modal: FC<Props> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <Wrapper>
        <MainWrapper>
          <TitleWrapper>
            <h3>{title? title : ""}</h3>
            <CrossIcon onClick={onClose} />
          </TitleWrapper>
          {children}
        </MainWrapper>
      </Wrapper>
    </>,
    document.getElementById('modal-root')!
  );
};

export default Modal;
