import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import { useState } from "react";
import { MyStockNumber } from "../my/MyStyle";

import {
  AdminContainer,
  AdminHello,
  Hello1,
  Hello2,
  MemberListBox,
  MemberListTitle,
  LitstTitle01,
  LitstTitle02,
  LitstTitle03,
  LitstTitle04,
  LitstTitle05,
  LitstTitle06,
  MemberListInfo,
  ListInfo01,
  ListInfo02,
  ListInfo03,
  ListInfo04,
  ListInfo05,
  ListInfo06,
  MemberStockInfoBox,
  MemberStockTitle,
  StockTitle01,
  StockTitle02,
  StockTitle03,
  StockTitle04,
  StockTitle05,
  StockTitle06,
  StockTitle07,
  StockTitle08,
  StockTitle09,
  MemberStockInfo,
  StockListInfo01,
  StockListInfo02,
  StockListInfo03,
  StockListInfo04,
  StockListInfo05,
  StockListInfo06,
  StockListInfo07,
  StockListInfo08,
  StockListInfo09,
} from "./AdminStyle";
import AdminSearch from "./admincomponent/AdminSearch";

const AdminPage = () => {
  const members = Array(6)
    .fill()
    .map((_, index) => ({
      email: `회원이메일`,
      author: `글쓴이`,
      phone: `핸드폰번호`,
      date: `가입일`,
      birth: `생년월일`,
      status: `활동여부`,
    }));

  return (
    <>
      <Header />

      <AdminHello>
        <Hello1>Welcome</Hello1>
        <Hello2>Admin !</Hello2>
      </AdminHello>

      <InlineContainer
        color=""
        contents={
          <AdminContainer>
            <AdminSearch />

            <MemberListBox>
              <MemberListTitle>
                <LitstTitle01>E-mail</LitstTitle01>
                <LitstTitle02>닉네임</LitstTitle02>
                <LitstTitle03>핸드폰</LitstTitle03>
                <LitstTitle04>가입일</LitstTitle04>
                <LitstTitle05>생년월일</LitstTitle05>
                <LitstTitle06>활동여부</LitstTitle06>
              </MemberListTitle>

              {members.map((member, index) => (
                <MemberListInfo key={index}>
                  <ListInfo01>{member.email}</ListInfo01>
                  <ListInfo02>{member.author}</ListInfo02>
                  <ListInfo03>{member.phone}</ListInfo03>
                  <ListInfo04>{member.date}</ListInfo04>
                  <ListInfo05>{member.birth}</ListInfo05>
                  <ListInfo06>{member.status}</ListInfo06>
                </MemberListInfo>
              ))}
            </MemberListBox>

            <MemberStockInfoBox>
              <MemberStockTitle>
                <StockTitle01>종목명</StockTitle01>
                <StockTitle02>종목코드</StockTitle02>
                <StockTitle03>매입가</StockTitle03>
                <StockTitle04>매입수량</StockTitle04>
                <StockTitle05>총 매입가</StockTitle05>
                <StockTitle06>현재가</StockTitle06>
                <StockTitle07>수익률</StockTitle07>
                <StockTitle08>총 수익액</StockTitle08>
                <StockTitle09>날짜</StockTitle09>
              </MemberStockTitle>

              <MemberStockInfo>
                <StockListInfo01>삼성전자</StockListInfo01>
                <StockListInfo02>005930</StockListInfo02>
                <StockListInfo03>73,000</StockListInfo03>
                <StockListInfo04>100</StockListInfo04>
                <StockListInfo05>73,000,000</StockListInfo05>
                <StockListInfo06>65,700</StockListInfo06>
                <StockListInfo07>-10%</StockListInfo07>
                <StockListInfo08>6,570,000</StockListInfo08>
                <StockListInfo09>구매날짜</StockListInfo09>
              </MemberStockInfo>
            </MemberStockInfoBox>
          </AdminContainer>
        }
      ></InlineContainer>
      <Footer />
    </>
  );
};
export default AdminPage;
