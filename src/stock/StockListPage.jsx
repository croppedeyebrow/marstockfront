import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StockPage from "./StockPage";
import {
  StockListContainer,
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

const StockListPage = ({ stock, setStockList }) => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleCategoryClick = (event) => {
    if (selectedCategory) {
      selectedCategory.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ffffff";
    setSelectedCategory(event.target);
    setStockList(event.target.textContent);
  };

  const StyledLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <>
      {/* <StockPage /> */}

      <InlineContainer
        contents={
          <StockListContainer>
            <StockCategory>
              <Category01 onClick={handleCategoryClick}>고가</Category01>
              <Category02 onClick={handleCategoryClick}>EPS</Category02>
              <Category03 onClick={handleCategoryClick}>PER</Category03>
              <Category03 onClick={handleCategoryClick}>DIV</Category03>
            </StockCategory>
            <StockInfoBackboard>
              <StockTitleBox>
                <StockTitle01>순위</StockTitle01>
                <StockTitle02>종목명</StockTitle02>
                <StockTitle03>고가</StockTitle03>
                <StockTitle04>등락률</StockTitle04>
                <StockTitle05>bps</StockTitle05>
                <StockTitle06>per</StockTitle06>
                <StockTitle07>div</StockTitle07>
                <StockTitle08>eps</StockTitle08>
              </StockTitleBox>
              {stock.map((data, index) => (
                <StockInfoList key={index}>
                  <StockInfo01>{index + 1}</StockInfo01>
                  <StyledLink to={`/stockInfo/${data.종목명}`}>
                    <StockInfo02>{data.종목명}</StockInfo02>
                  </StyledLink>
                  <StockInfo03>{data.고가}</StockInfo03>
                  <StockInfo04>{data.등락률}</StockInfo04>
                  <StockInfo05>{data.BPS}</StockInfo05>
                  <StockInfo06>{data.PER}</StockInfo06>
                  <StockInfo07>{data.DIV}</StockInfo07>
                  <StockInfo08>{data.EPS}</StockInfo08>
                </StockInfoList>
              ))}
            </StockInfoBackboard>
          </StockListContainer>
        }
      ></InlineContainer>
    </>
  );
};

export default StockListPage;
