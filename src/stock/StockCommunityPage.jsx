import GlobalStyle from "../utils/style/GlobalStyle";

import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import React, { useState } from "react";
import CommunityPagination from "./stockcomponent/CommunityPagination";

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
} from "./StockCommunityStyle";
import StockCommunityUpload from "./stockcomponent/StockCommunityUpload";

const data = Array.from({ length: 200 }).map((_, i) => ({
  id: i,
  content: `내용`,
  date: `날짜`,
  author: `글쓴이`,
  views: `조회`,
  likes: `추천`,
  dislikes: `비추천`,
}));

const ITEMS_PER_PAGE = 20;

const StockCommunityPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentItems = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <InlineContainer
        color=""
        contents={
          <StockCommunityContainer>
            <StockCommunityUpload></StockCommunityUpload>

            <CommunityTitleZone>
              <ComTitle01>내용</ComTitle01>
              <ComTitle02>날짜</ComTitle02>
              <ComTitle03>글쓴이</ComTitle03>
              <ComTitle04>조회</ComTitle04>
              <ComTitle04>추천</ComTitle04>
              <ComTitle04>비추천</ComTitle04>
            </CommunityTitleZone>

            <CommentBox>
              {currentItems.map((item) => (
                <ComContentZone key={item.id}>
                  <ComCon01>{item.content}</ComCon01>
                  <ComCon02>{item.date}</ComCon02>
                  <ComCon03>{item.author}</ComCon03>
                  <ComCon04>{item.views}</ComCon04>
                  <ComCon04>{item.likes}</ComCon04>
                  <ComCon04>{item.dislikes}</ComCon04>
                </ComContentZone>
              ))}
              <CommunityPagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </CommentBox>
          </StockCommunityContainer>
        }
      ></InlineContainer>
    </>
  );
};

export default StockCommunityPage;
