import GlobalStyle from "../utils/style/GlobalStyle";

import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import React, { useState } from "react";
import CommunityPagination from "./stockcomponent/CommunityPagination";
import CommonAxios from "../utils/common/CommonAxios";
import { useEffect } from "react";

import StockPage from "./StockPage";
import {
  StockCommunityContainer,
  CommunityTitleZone,
  ComTitle01,
  ComTitle02,
  ComTitle03,
  ComTitle04,
  CommentBox,
  ComContentZone,
  ComCon01,
  ComCon02,
  ComCon03,
  ComCon04,
  BottomCheckZone,
  RadioButton,
  RadioButtonContainer,
} from "./StockCommunityStyle";
import StockCommunityUpload from "./stockcomponent/StockCommunityUpload";
import StockCommunitySearch from "./stockcomponent/StockCommunitySearch";

const StockCommunityPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.

  const [currentPage, setCurrentPage] = useState(1);
  // 종목 토론 게시글 리스트
  const [discussionObject, setDiscussionObject] = useState({});
  const [searchType, setSearchType] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [checkSearch, setCheckSearch] = useState(false);
  const [checkPost, setCheckPost] = useState(false);

  const totalPages = discussionObject.totalPages;
  console.log("totalPages : ", totalPages);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = discussionObject.content;

  // 날짜를 변환하는 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1 해줌
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const communityFetchData = async () => {
      try {
        const page = currentPage - 1;
        const size = 2;
        const sort = "date,desc";
        const type = searchType ? "author" : "content";
        const keyword = searchKeyword;
        const discussion = await CommonAxios.getPageableAxios(
          "community",
          "search",
          { keyword, type, page, size, sort }
        );
        if (discussion.status === 200) {
          setDiscussionObject(discussion.data);
        } else {
          console.log("discussion : False");
        }
      } catch (error) {
        console.error("Error fetching discussion data:", error);
        throw error;
      }
      setCheckSearch(false);
      setCheckPost(false);
    };

    communityFetchData(); // Call the inner function immediately
  }, [currentPage, checkSearch, checkPost]); // Use currentPage instead of page

  return (
    <>
      <InlineContainer
        color=""
        contents={
          <StockCommunityContainer>
            <StockCommunityUpload
              setCheckPost={setCheckPost}
            ></StockCommunityUpload>

            <CommunityTitleZone>
              <ComTitle01>내용</ComTitle01>
              <ComTitle02>날짜</ComTitle02>
              <ComTitle03>글쓴이</ComTitle03>
              <ComTitle04>조회</ComTitle04>
              <ComTitle04>추천</ComTitle04>
              <ComTitle04>비추천</ComTitle04>
            </CommunityTitleZone>

            <CommentBox>
              {currentItems &&
                currentItems.map((item) => (
                  <ComContentZone key={item.id}>
                    <ComCon01>{item.content}</ComCon01>
                    <ComCon02>{formatDate(item.date)}</ComCon02>
                    <ComCon03>{item.authorId}</ComCon03>
                    <ComCon04>{item.views}</ComCon04>
                    <ComCon04>{item.likes.length}</ComCon04>
                    <ComCon04>{item.dislikes.length}</ComCon04>
                  </ComContentZone>
                ))}

              <CommunityPagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />

              <BottomCheckZone>
                <RadioButtonContainer>
                  <RadioButton
                    id="radio1"
                    name="radio"
                    onClick={() => setSearchType(false)}
                    checked={!searchType}
                  />
                  내용
                </RadioButtonContainer>

                <RadioButtonContainer>
                  <RadioButton
                    id="radio2"
                    name="radio"
                    onClick={() => setSearchType(true)}
                    checked={searchType}
                  />
                  글쓴이
                </RadioButtonContainer>

                <StockCommunitySearch
                  setSearchKeyword={setSearchKeyword}
                  setCheckSearch={setCheckSearch}
                />
              </BottomCheckZone>
            </CommentBox>
          </StockCommunityContainer>
        }
      ></InlineContainer>
    </>
  );
};

export default StockCommunityPage;
