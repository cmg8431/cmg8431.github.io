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
      </Wrapper>
    );
  }

  return <></>;
};

const ToastAnimation = keyframes`
  from {
    top: 50%;
  }
  to {
    top: 50%;
  }
`;

export const Wrapper = styled.section<{ timeout: number }>`
  left: 80%;
  bottom: -2900%;

  display: flex;
  position: fixed;
  /* position: fixed;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  font-family: 'SpoqaHanSans';
  font-size: 50%;
 */
  display: flex;
  justify-content: center;
  align-items: center;
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
  font-size: 100rem;
`;
