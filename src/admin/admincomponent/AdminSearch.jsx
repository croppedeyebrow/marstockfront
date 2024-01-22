import styled from "styled-components";

const SearchZone = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110rem;
  height: 10rem;
  flex-direction: row;
  gap: 2rem;
`;

const SearchInput = styled.input`
  display: flex;
  position: relative;

  width: 94rem;
  height: 8rem;

  background: #ffffff;
  border-radius: 15px;
  border: none;

  color: #000000;
  font-size: 2rem;

  &::placeholder {
    color: gray;
    padding-left: 1rem;
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
  width: 9.8rem;
  height: 8rem;

  background: var(--mainpurple);
  border-radius: 15px;
  border: 1px solid transparent; /* 투명한 초기 테두리 */
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  color: #ffffff;
  opacity: 0.9; /* 유리 효과를 위한 투명도 조절 */

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

const AdminSearch = () => {
  return (
    <>
      <SearchZone>
        <SearchInput placeholder="검색어를 입력하세요"></SearchInput>
        <SearchButton>검색</SearchButton>
      </SearchZone>
    </>
  );
};

export default AdminSearch;
