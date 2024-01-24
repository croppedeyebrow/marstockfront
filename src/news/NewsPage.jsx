import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import newssumb from "../images/tvnewsimg.png";
import styled from "styled-components";

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

const NewsPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.

  const newsItem = {
    title: "소액 연체 다 갚으면 이력삭제해준다... 신용점수...",
    info: "■ 제보하기 ▷ 전화 : 02-781-1234, 4444 ▷ 이메일 : kbs1234@kbs.co.kr ▷ 카카오톡 : 'KBS제보' 검색, 채널 추가 KBS | 2024-01-15 17:07",
    imgSrc: newssumb,
  };

  const newsData = Array(8).fill(newsItem);

  return (
    <>
      <Header />
      <NewsPageContainer>
        <NewsTitle>뉴스</NewsTitle>
        <InlineContainer
          color="orange"
          contents={
            <NewsContainer>
              <NewsTopContainer>
                <Realtimezone>
                  <TopTitile>실시간 속보</TopTitile>

                  {[1, 2, 3, 4, 5].map((item, index) => (
                    <RealTimeBox key={index}>
                      <TopBox>
                        미래에셋운용 '원년멤버' 최경주 부회장, 고문으로 물러난다
                        |<RealNewsName>뉴스1</RealNewsName>
                      </TopBox>

                      <BottomBox>
                        미래에셋의 ‘원년 멤버’인 최경주 부회장이 일선에서 물러나
                        고문 역할을 맡기로 했다. 김성진 사장과 김원 시장도 함께
                        자리를 옮긴다. 15일 금... |
                        <RealTime>2024-01-15 16:39</RealTime>
                      </BottomBox>
                    </RealTimeBox>
                  ))}
                </Realtimezone>

                <MostViewZone>
                  <TopTitile>가장 많이 본 뉴스</TopTitile>

                  {[...Array(12)].map((_, index) => (
                    <MostViewBox key={index}>
                      많이본뉴스 많이본뉴스많이본누스맘많이본뉴스많... |
                      <MostNewsName>위클리 뉴스</MostNewsName>|
                      <NewsUploadTime>2024-01-15 14:18</NewsUploadTime>
                    </MostViewBox>
                  ))}
                </MostViewZone>
              </NewsTopContainer>

              <NewsBottomTitle>TV뉴스</NewsBottomTitle>

              <NewsBottomContainer>
                {newsData.map((newsItem, index) => (
                  <TvNewsBox key={index}>
                    <NewsImgBox
                      alt="뉴스썸네일"
                      src={newsItem.imgSrc}
                    ></NewsImgBox>

                    <NewsInfoBox>
                      <TvNewsTitle>{newsItem.title}</TvNewsTitle>
                      <TvnewsInfo>{newsItem.info}</TvnewsInfo>
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
