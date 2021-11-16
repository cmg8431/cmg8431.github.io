import React, { useRef, ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  message: string;
  timeout: number;
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ClipModal = ({
  message,
  timeout,
  state,
  setState,
}: Props): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);

  if (state) {
    return (
      <Wrapper
        timeout={timeout}
        ref={ref}
        onAnimationEnd={(): void => setState(false)}
      >
        <Message>{message}</Message>
        <div />
      </Wrapper>
    );
  }

  return <></>;
};

const ToastAnimation = keyframes`
  /* from {
    margin-left: 100%;
    top: 50%;
  }
  to {
    margin-left: 0%;
    top: 50%;
  } */
`;

export const Wrapper = styled.section<{ timeout: number }>`
  top: 1rem;
  right: 1rem;
  margin-right: 1rem;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 20rem;
  background-color: #5c5c5c;
  border-radius: 0.2rem;
  animation-name: ${ToastAnimation};
  animation-duration: ${({ timeout }): string => `${timeout / 2}s`};
  animation-iteration-count: 2;
  animation-direction: alternate;
  z-index: 10;
  ::before {
    box-shadow: inset 0 0 0 1000px rgba(255, 255, 255, 0.3);
    filter: blur(15px);
  }
`;

export const Message = styled.p`
  width: auto;
  font-size: 1rem;
`;
