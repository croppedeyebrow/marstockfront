import styled from "styled-components";
// import { useState } from "react";

const SearchZone = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110rem;
  height: 10rem;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 40rem;
    height: 6rem;
  }
`;

const SearchInput = styled.textarea`
  display: flex;
  position: relative;

  width: 100rem;
  height: 20rem;

  background: #ffffff;
  border-radius: 1.5rem;
  border: none;

  color: #000000;
  font-size: 2rem;
  padding: 1rem 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 볼륨감을 위한 그림자 추가 */

  &::placeholder {
    color: gray;
    padding-left: 1rem;
    text-align: center;
    font-size: 2rem;
  }

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 20rem;

  background: var(--mainpurple);
  border-radius: 1.2rem;
  border: 1px solid transparent; /* 투명한 초기 테두리 */
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 29px;

  color: #ffffff;
  opacity: 0.9; /* 유리 효과를 위한 투명도 조절 */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 볼륨감을 위한 그림자 추가 */

  &:hover {
    cursor: pointer;
    scale: 1.005;
    border: 1px solid rgba(255, 255, 255, 0.2); /* 호버 시 테두리 추가 */
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
`;

const StockCommunityUpload = () => {
  // const [content, setContent] = useState("");

  // const handleUpload = async () => {
  //   try {
  //     // axios를 사용하여 서버로 데이터 전송
  //     const response = await axios.post("/community/post", {
  //       content: content,
  //       // 다른 필요한 데이터도 추가할 수 있음
  //     });

  //     // 서버로부터의 응답 처리
  //     if (response.data === true) {
  //       // 글 등록 성공
  //       console.log("글이 성공적으로 등록되었습니다.");
  //       // 추가적으로 필요한 작업 수행
  //     } else {
  //       // 글 등록 실패
  //       console.log("글 등록에 실패하였습니다.");
  //       // 추가적으로 필요한 작업 수행
  //     }
  //   } catch (error) {
  //     // 에러 처리
  //     console.error("글 등록 중 오류가 발생하였습니다.", error);
  //   }
  // };
  return (
    <>
      <SearchZone>
        <SearchInput
          placeholder="주식에 대해 공유할 내용을 작성해주세요"
          // value={content}
          // onChange={(e) => setContent(e.target.value)}
        ></SearchInput>
        <SearchButton
        // onClick={handleUpload}
        >
          등록
        </SearchButton>
      </SearchZone>
    </>
  );
};

export default StockCommunityUpload;
