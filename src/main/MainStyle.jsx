import styled from "styled-components";

export const Space = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
   padding: 15rem;

`;

export const Container = styled.div`
   width: 120rem;
   height: auto;
   display: flex;
   justify-content: center;
   #circle {
      width: 40%;
      height: auto;
      position: absolute;
      z-index: -1;
   }

`;
export const WelcomeBanner = styled.div`
   z-index: 1;
   scale: .9;
   position: absolute;
   left: ${props => props.open ? '10%' : '-100%'};
   transition: left 0.7s ease;
   margin-top: -7rem;
   width: 100rem;
   height: auto;
   padding: 7rem;
   background-color: rgba(255, 255, 255, 0.08);
   backdrop-filter: blur(20px);
   border-radius: 5rem;
   display: flex;
   justify-content: center;
   flex-direction: column;
   #text {
      margin-top: 1rem;
      font-size: 8rem;
      font-weight: 800;
      color: white;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      text-shadow: 0px 0px 6px black;  
   }
   #startbutton {
      margin-top: 5rem;
      width: 20rem;
      height: 5rem;
      border: 0.15rem solid white;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1.5rem;
      color: white;
      font-size: 2rem;
      font-weight: 600;
      cursor: pointer;
      &:hover {
         background-color: rgba(171, 129, 255, 0.2);
      }
   }
`;

export const InfoContainer = styled.div`
   /* scale: 0; */
   width: 100%;
   height: auto;
   background-color: rgba(255, 255, 255, 0.04);
   box-shadow : inset 0px 20px 50px rgba(255, 255, 255, .05);
   backdrop-filter: blur(20px);
   border-radius: 5rem;
   margin-top: 1rem;
   opacity: ${props => props.open ? '1' : '0'};
   transition: opacity 0.7s ease-in-out;
   
   gap: 5rem;
   display: flex;
   flex-wrap: wrap;
   padding: 5rem;
   justify-content: center;
   align-items: center;
   .infobox {
      width: 52.5rem;
      height: auto;
      border-radius: 2rem; 
      background-color: rgba(0, 0, 0, 0.34);
      backdrop-filter: blur(150px);
      box-shadow : inset 0px 10px 45px rgba(0, 0, 0, .2);
      color:white;
      padding: 2.5rem;
      #infoline{
         @keyframes fadein {  
            0% { opacity: 0; } 
            80% { opacity: 0; }
            100% { opacity: 1; }
         }
         animation: fadein 1.4s ease-in-out;
      }
      #title{
         font-size: 2.4rem;
         font-weight: 800;
      }
      &#oneinfo{
         scale: ${props => props.open ? '1' : '0'};
         transition: scale 1.2s ease;
      }
      &#twoinfo{
         scale: ${props => props.open ? '1' : '0'};
         transition: scale 1.2s ease;
      }
      &#threeinfo{
         width: 110rem;
         scale: ${props => props.open ? '1' : '0'};
         transition: scale 1.2s ease;
      }
   }
`;


