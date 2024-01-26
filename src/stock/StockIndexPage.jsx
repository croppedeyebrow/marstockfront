import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  StockIndexPageContainer,
  StockListContainer,
  StockHeadTitle,
  StockHeadTitle01,
  StockHeadTitle02,
  StockHeadTitle03,
  IndexPageTop,
  IndexTopLeft,
  LeftPointZone,
  Point01,
  Point02,
  Point03,
  Kospi,
  PointInfo,
  Num,
  Value,
  Percent,
  Kosdaq,
  Kospi200,
  LeftIndexZone,
  IndexTopRight,
  MiddleContainer,
  IndexPageBottom,
  BottomTitleBox,
  BoTitle,
  KategorieTitle,
  Kategorie01,
  Kategorie02,
  Kategorie03,
  Kategorie04,
  Kategorie05,
  Kategorie06,
  Kategorie07,
  Kategorie08,
  Kategorie09,
  KategorieInfo,
  KInfo01,
  KInfo0101,
  KInfo02,
  KInfo03,
  KInfo04,
  KInfo05,
  KInfo06,
  KInfo07,
  KInfo08,
  KInfo09,
} from "./StockIndexStyle";

const StockIndexPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  const [selectedHeadTitle, setSelectedHeadTitle] = useState(null);
  const [selectedKategorie, setSelectedKategorie] = useState(null);

  const handleHeadTitleClick = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
  };

  const handleKategorieClick = (event) => {
    if (selectedKategorie) {
      selectedKategorie.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedKategorie(event.target);
  };

  const data = Array.from({ length: 10 }, (_, i) => ({
    rank: (i + 1).toString(),
    continuous: (i + 1).toString(),
    cumulative: (i + 1).toString(),
    name: "일번전자",
    value1: "12,345",
    value2: "▲345",
    value3: "+2.87%",
    value4: "37,884,276",
    value5: "12,100",
    value6: "12,345",
    value7: "11,780",
  }));

  return (
    <>
      <Header />
      <StockIndexPageContainer>
        <StockHeadTitle>
          <StockHeadTitle01 onClick={handleHeadTitleClick}>
            주식
          </StockHeadTitle01>
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
              <IndexPageTop>
                <IndexTopLeft>
                  <LeftPointZone>
                    <Point01>
                      <Kospi>KOSPI</Kospi>
                      <PointInfo>
                        <Num value="+2,525.83">2,525.83</Num>
                        <Value value="▲ 1.73">▲ 1.73</Value>
                        <Percent value="+0.06%">+0.06%</Percent>
                      </PointInfo>
                    </Point01>
                    <Point02>
                      <Kosdaq>KOSDAQ</Kosdaq>
                      <PointInfo>
                        <Num value="-858.25">858.25</Num>
                        <Value value="-▼ 9.83">▼ 9.83</Value>
                        <Percent value="-1.14%">-1.14%</Percent>
                      </PointInfo>
                    </Point02>
                    <Point03>
                      <Kospi200>KOSPI 200</Kospi200>
                      <PointInfo>
                        <Num value="+338.75">338.75</Num>
                        <Value value="▲ 0.69">▲ 0.69</Value>
                        <Percent value="+0.20%">+0.20%</Percent>
                      </PointInfo>
                    </Point03>
                  </LeftPointZone>

                  <LeftIndexZone></LeftIndexZone>
                </IndexTopLeft>
                <IndexTopRight></IndexTopRight>
              </IndexPageTop>
              <MiddleContainer>TOP 종목</MiddleContainer>

              <IndexPageBottom>
                <BottomTitleBox>
                  <BoTitle onClick={handleKategorieClick}>상한가</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>하한가</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>상승</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>보합</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>하락</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>거래량상위</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>고가대비급락</BoTitle>
                  <BoTitle onClick={handleKategorieClick}>시가총액상위</BoTitle>
                </BottomTitleBox>

                <KategorieTitle>
                  <Kategorie01>순위</Kategorie01>
                  <Kategorie01>연속</Kategorie01>
                  <Kategorie01>누적</Kategorie01>
                  <Kategorie02>종목명</Kategorie02>
                  <Kategorie03>현재가</Kategorie03>
                  <Kategorie04>전일비</Kategorie04>
                  <Kategorie05>등락률</Kategorie05>
                  <Kategorie06>거래량</Kategorie06>
                  <Kategorie07>시가</Kategorie07>
                  <Kategorie08>고가</Kategorie08>
                  <Kategorie09>저가</Kategorie09>
                </KategorieTitle>

                {data.map((item, index) => (
                  <KategorieInfo key={index}>
                    <KInfo01>{item.rank}</KInfo01>
                    <KInfo0101>{item.continuous}</KInfo0101>
                    <KInfo0101>{item.cumulative}</KInfo0101>
                    <KInfo02>{item.name}</KInfo02>
                    <KInfo03>{item.value1}</KInfo03>
                    <KInfo04>{item.value2}</KInfo04>
                    <KInfo05>{item.value3}</KInfo05>
                    <KInfo06>{item.value4}</KInfo06>
                    <KInfo07>{item.value5}</KInfo07>
                    <KInfo08>{item.value6}</KInfo08>
                    <KInfo09>{item.value7}</KInfo09>
                  </KategorieInfo>
                ))}
              </IndexPageBottom>
            </StockListContainer>
          }
        ></InlineContainer>
      </StockIndexPageContainer>
      <Footer />
    </>
  );
};

export default StockIndexPage;
