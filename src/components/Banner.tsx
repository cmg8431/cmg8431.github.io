import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import PortfolioImg from '../assets/img/PortfolioImg.png';

const BannerComponents: FunctionComponent = () => {
  return (
    <BannerWrapper>
      <BannerItemWrapper>
        <Title>
          블로그에 오신걸 환영합니다. <br /> 제가 궁금하시다면 아래 버튼을
          눌러주세요 !
        </Title>
        <Button>포트폴리오 보기</Button>
      </BannerItemWrapper>
      <Img src={PortfolioImg} />
    </BannerWrapper>
  );
};

const BannerItemWrapper = styled.div`
  @media (max-width: 668px) {
    padding: 0px 10px;
    font-size: 5px;
  }
`;

const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
  width: 100%;
  height: 36rem;
  margin-bottom: 2rem;
  align-items: center;
`;

const Img = styled.img`
  width: 300px;
  height: 310px;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Title = styled.h1`
  margin-top: 3rem;
  color: white;
  line-height: 1.6;
  font-size: 1.8rem;
  @media (max-width: 668px) {
    font-size: 1.5rem;
  }
`;

const Button = styled.button`
  margin-bottom: 3rem;
  margin-top: 2rem;
  color: #000000;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif !important;
  font-size: 1rem;
  border-radius: 1rem;
  width: 13rem;
  border: none;
  height: 3.1rem;
  background-color: white;
  transition: all 0.3s;
  :hover {
    border: 1px solid white;
    color: white;
    border-color: white;
    background-color: #000000;
  }
`;

export default BannerComponents;
