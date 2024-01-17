import styled from "styled-components";
import backgroundimg from "../images/SignBackground.png";
import mailimg from "../images/Email.svg";

export const Background = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: url(${backgroundimg});
   background-size: cover;
   display: flex;
   align-items: center;
   flex-direction: column;
`

export const Logo =styled.img`
   margin-top: 10rem;
   height: 4.4rem;
   cursor: pointer;
`;

export const InputContainer = styled.div` 
   width: 48rem;
   height: auto;
   background-color: rgba(255, 255, 255, 0.08);
   border-radius: 2rem;
   margin-top: 5rem;
   padding: 3rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 3rem;
   #title{
      font-size: 3rem;
      font-weight: 900;
      color: white;
      margin-bottom: 6rem;
   }
   #linktext{
      width: 36.6rem;
      line-height: 1.2;   
      color: var(--mainlightpurple);
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.2rem;
      font-weight: 300;
      position: relative;
      top: -1.5rem;
      cursor: pointer;
      }
   #signbutton {
      width: 27.4rem;
      height: 5.2rem;
      color: white;
      background-color: var(--mainpurple);
      font-size: 2rem;
      font-weight: 200;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1.5rem;
      cursor: pointer;
      &:hover{
         background-color: var(--mainlightpurple);
         transform: scale(1.02);
         transition: all 0.05s ease-in-out;
      }
      &:active{
         background-color: var(--mainpurple);
      }
   }
   #agreeBox {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
   }
`;

export const InputBox = styled.input`
   width: 36.6rem;
   height: 4.3rem;
   box-sizing: border-box;
   border-radius: 1.5rem;
   background-color: unset;
   border: solid 1px rgba(255, 255, 255, 0.2);
   color: white;
   padding: 0 1.5rem;

   &:focus{
      outline: none;
      border: solid 2px var(--mainlightpurple);
   }
`;

export const CheckBoxLabel = styled.label`
display: flex;
align-items: center;
cursor: pointer;
font-size: 1.5rem;
color: white;
font-weight: 200;
gap: 1rem;
`;

export const CheckBox = styled.input.attrs({type: "checkbox"})`
   appearance: none; // 기본 체크박스 숨기기
   width: 1.8rem;
   height: 1.8rem;
   border-radius: 1rem;
   border: solid 1px rgba(255, 255, 255, 0.4);
   box-sizing: border-box;
   &:checked{
      background-color: var(--mainlightpurple);
      box-shadow: inset 0 0 0 3px var(--mainpurple);  
   }
`;

