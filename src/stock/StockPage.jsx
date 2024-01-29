import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  StockContainer,
  StockHeadTitle,
  StockHeadTitle01,
  StockHeadTitle02,
  StockHeadTitle03,
} from "./StockStyle";
import StockIndexPage from "./StockIndexPage";
import StockListPage from "./StockListPage";

const StockPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  const [selectedHeadTitle, setSelectedHeadTitle] = useState(null);
  const [showStockListPage, setShowStockListPage] = useState(false);
  const [showStockIndexPage, setShowStockIndexPage] = useState(false);
  //   const [showStockDiscussionPage, setShowStockDiscussionPage] = useState(false);

  const handleHeadTitleClick01 = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
    setShowStockListPage(true);
    setShowStockIndexPage(false);
  };

  const handleHeadTitleClick02 = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
  };

  const handleHeadTitleClick03 = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
    setShowStockListPage(false);
    setShowStockIndexPage(true);
  };

  return (
    <>
      <Header />
      <StockContainer>
        <StockHeadTitle>
          <StockHeadTitle01 onClick={handleHeadTitleClick01}>
            주식
          </StockHeadTitle01>
          <StockHeadTitle02 onClick={handleHeadTitleClick02}>
            종목토론
          </StockHeadTitle02>
          <StockHeadTitle03 onClick={handleHeadTitleClick03}>
            시장지표
          </StockHeadTitle03>
        </StockHeadTitle>
        {showStockListPage && <StockListPage />}
        {showStockIndexPage && <StockIndexPage />}
      </StockContainer>

      {/* <InlineContainer color=""></InlineContainer> */}

      <Footer />
    </>
  );
};

export default StockPage;
