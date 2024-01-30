import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import newssumb from "../images/tvnewsimg.png";
import styled from "styled-components";
import React, { useState } from "react";

import {
  NewsPageContainer,
  NewsContainer,
  NewsTitle,
  NewsTopContainer,
  Realtimezone,
  MostViewZone,
  TopTitile,
  RealTimeBox,
  TopBox,
  BottomBox,
  MostViewBox,
  MostNewsName,
  NewsUploadTime,
  RealNewsName,
  RealTime,
  NewsBottomTitle,
  NewsBottomContainer,
  TvNewsBox,
  NewsImgBox,
  NewsInfoBox,
  TvNewsTitle,
  TvnewsInfo,
} from "./NewsStyle";
import NewsSearch from "./newscomponent/NewsSearch";

const NewsPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  const [searchTerm, setSearchTerm] = useState("");

  const newsItem = {
    title: "미래에셋운용 '원년멤버' 최경주 부회장, 고문으로 물러난다",
    content:
      "미래에셋의 ‘원년 멤버’인 최경주 부회장이 일선에서 물러나 고문 역할을 맡기로 했다. 김성진 사장과 김원 시장도 함께 자리를 옮긴다. 15일 금...",
    time: "2024-01-15 16:39",
    source: "뉴스1",
    imgSrc: newssumb,
  };

  const mostViewedNewsItem = {
    title: "많이본뉴스 많이본뉴스많이본누스맘많이본뉴스많...",
    time: "2024-01-15 14:18",
    source: "위클리 뉴스",
  };

  const newsData = Array(5).fill(newsItem);
  const mostViewedNewsData = Array(12).fill(mostViewedNewsItem);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNews = newsData.filter(
    (news) =>
      news.title.includes(searchTerm) || news.content.includes(searchTerm)
  );

  const filteredMostViewedNews = mostViewedNewsData.filter((news) =>
    news.title.includes(searchTerm)
  );

  return (
    <>
      <Header />
      <NewsPageContainer>
        <NewsTitle>뉴스</NewsTitle>
        <InlineContainer
          color="orange"
          contents={
            <NewsContainer>
              <NewsSearch value={searchTerm} onchange={handleSearch} />
              <NewsTopContainer>
                <Realtimezone>
                  <TopTitile>실시간 속보</TopTitile>

                  {filteredNews.map((news, index) => (
                    <RealTimeBox key={index}>
                      <TopBox>
                        {news.title}|<RealNewsName>{news.source}</RealNewsName>
                      </TopBox>

                      <BottomBox>
                        {news.content} |<RealTime>{news.time}</RealTime>
                      </BottomBox>
                    </RealTimeBox>
                  ))}
                </Realtimezone>

                <MostViewZone>
                  <TopTitile>가장 많이 본 뉴스</TopTitile>

                  {filteredMostViewedNews.map((news, index) => (
                    <MostViewBox key={index}>
                      {news.title} |<MostNewsName>{news.source}</MostNewsName>|
                      <NewsUploadTime>{news.time}</NewsUploadTime>
                    </MostViewBox>
                  ))}
                </MostViewZone>
              </NewsTopContainer>

              <NewsBottomTitle>TV뉴스</NewsBottomTitle>

              <NewsBottomContainer>
                {Array(8)
                  .fill(newsItem)
                  .map((newsItem, index) => (
                    <TvNewsBox key={index}>
                      <NewsImgBox
                        alt="뉴스썸네일"
                        src={newsItem.imgSrc}
                      ></NewsImgBox>

                      <NewsInfoBox>
                        <TvNewsTitle>{newsItem.title}</TvNewsTitle>
                        <TvnewsInfo>{newsItem.content}</TvnewsInfo>
                      </NewsInfoBox>
                    </TvNewsBox>
                  ))}
              </NewsBottomContainer>
            </NewsContainer>
          }
        ></InlineContainer>
      </NewsPageContainer>
      <Footer />
    </>
  );
};

export default NewsPage;
