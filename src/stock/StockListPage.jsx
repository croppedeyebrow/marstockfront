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
  StockInfoBackboard,
  StockDiv,
  Div01,
  Div02,
  StockTitleBox,
  StockTitle01,
  StockTitle02,
  StockTitle03,
  StockTitle04,
  StockTitle05,
  StockTitle06,
  StockTitle07,
  StockTitle08,
  StockInfoList,
  StockInfo01,
  StockInfo02,
  StockInfo03,
  StockInfo04,
  StockInfo05,
  StockInfo06,
  StockInfo07,
  StockInfo08,
} from "./StockListStyle";

const StockListPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  const [selectedHeadTitle, setSelectedHeadTitle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStockDiv, setSelectedStockDiv] = useState(null);

  const handleHeadTitleClick = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
  };

  const handleCategoryClick = (event) => {
    if (selectedCategory) {
      selectedCategory.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ffffff";
    setSelectedCategory(event.target);
  };

  const handleStockDivClick = (event) => {
    if (selectedStockDiv) {
      selectedStockDiv.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ffffff";
    setSelectedStockDiv(event.target);
  };

  const stockInfoData = Array(30).fill({
    rank: "순위",
    name: "종목명",
    currentPrice: "현재가",
    difference: "전일비",
    fluctuation: "등락률",
    volume: "거래량",
    bidPrice: "매수호가",
    askPrice: "매도호가",
  });

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
              <Category01 onClick={handleCategoryClick}>상승</Category01>
              <Category02 onClick={handleCategoryClick}>외국인매매</Category02>
              <Category03 onClick={handleCategoryClick}>기관매매</Category03>
            </StockCategory>

            <StockInfoBackboard>
              <StockDiv>
                <Div01 onClick={handleStockDivClick}>KOSPI</Div01>
                <Div02 onClick={handleStockDivClick}>KOSDAQ</Div02>
              </StockDiv>

              <StockTitleBox>
                <StockTitle01>순위</StockTitle01>
                <StockTitle02>종목명</StockTitle02>
                <StockTitle03>현재가</StockTitle03>
                <StockTitle04>전일비</StockTitle04>
                <StockTitle05>등락률</StockTitle05>
                <StockTitle06>거래량</StockTitle06>
                <StockTitle07>매수호가</StockTitle07>
                <StockTitle08>매도호가</StockTitle08>
              </StockTitleBox>

              {stockInfoData.map((data, index) => (
                <StockInfoList key={index}>
                  <StockInfo01>{data.rank}</StockInfo01>
                  <StockInfo02>{data.name}</StockInfo02>
                  <StockInfo03>{data.currentPrice}</StockInfo03>
                  <StockInfo04>{data.difference}</StockInfo04>
                  <StockInfo05>{data.fluctuation}</StockInfo05>
                  <StockInfo06>{data.volume}</StockInfo06>
                  <StockInfo07>{data.bidPrice}</StockInfo07>
                  <StockInfo08>{data.askPrice}</StockInfo08>
                </StockInfoList>
              ))}
            </StockInfoBackboard>
          </StockListContainer>
        }
      ></InlineContainer>
      <Footer />
    </>
  );
};

export default StockListPage;
