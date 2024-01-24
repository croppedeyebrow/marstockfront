import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import React, { useState } from "react";

import {
  StockListContainer,
  StockHeadTitle,
  StockHeadTitle01,
  StockHeadTitle02,
  StockHeadTitle03,
  StockCategory,
  Category01,
  Category02,
  Category03,
  Category04,
  StockInfoBackboard,
  StockDiv,
} from "./StockInfoStyle";

const StockInfoPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  const [selectedHeadTitle, setSelectedHeadTitle] = useState(null);

  const handleHeadTitleClick = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
  };

  return (
    <>
      <Header />
      <StockHeadTitle>
        <StockHeadTitle01 onClick={handleHeadTitleClick}>주식</StockHeadTitle01>
        <StockHeadTitle02 onClick={handleHeadTitleClick}>
          종목토론
        </StockHeadTitle02>
        <StockHeadTitle03 onClick={handleHeadTitleClick}>
          시장지표
        </StockHeadTitle03>
      </StockHeadTitle>

      <InlineContainer
        color=""
        contents={
          <StockListContainer>
            <StockCategory>
              <Category01>종목명</Category01>
              <Category02>종목코드</Category02>
              <Category03>KOSPI</Category03>
              <Category04>날짜</Category04>
            </StockCategory>

            <StockInfoBackboard>
              <StockDiv></StockDiv>
            </StockInfoBackboard>
          </StockListContainer>
        }
      ></InlineContainer>
      <Footer />
    </>
  );
};

export default StockInfoPage;
