import styled, { css, keyframes } from "styled-components";

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
   #aurora {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: fixed;
      background-color: var(--mainpurple);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: -2;
      @keyframes light {  
            0% { opacity: 0; } 
            50% { opacity: .5; }
            100% { opacity: .0; }
         }
         animation: light 5s ease-in-out infinite;
   }

`;
export const WelcomeBanner = styled.div`
   z-index: 1;
   scale: .9;
   position: fixed;
   left: ${props => props.open ? '10%' : '-350%'};
   transition: left 1s ease;
   margin-top: -7rem;
   width: 100rem;
   height: auto;
   padding: 7rem;
   background-color: rgba(255, 255, 255, 0.08);
   box-shadow: inset 5px 5px 5px -4px rgba(255, 255, 255, .4), 
               inset -5px -5px 3px -1px rgba(0, 0, 0, .6), 
               inset 30px 30px 120px -50px rgba(0, 0, 0, .9), 
               inset -30px -30px 50px -50px rgba(255, 255, 255, .9), 
               50px 50px 40px -15px rgba(17, 17, 17, .9);
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
      background-color: rgba(0, 0, 0, 0.3);
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
         border: 0.3rem solid white;
      }
   }
`;

const fadein = keyframes`
   0% { opacity: 0; } 
   50% { opacity: 0; }
   100% { opacity: 1; }
`;

const growin = keyframes`
   0% {scale: 0; }
   50% {scale: 0; }
   100% {scale: 1; }
`;


export const InfoContainer = styled.div`
   /* scale: 0; */
   width: 100%;
   height: auto;
   background-color: rgba(255, 255, 255, 0.08);
   box-shadow : inset 0px 20px 50px rgba(255, 255, 255, .05);
   backdrop-filter: blur(20px);
   border-radius: 5rem;
   margin-top: 1rem;
   scale: ${props => props.open ? '1' : '0'};
   transition: scale 0.5s ease-in-out;
   
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
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(150px);
      box-shadow : inset 0px 10px 45px rgba(0, 0, 0, .2);
      color:white;
      padding: 2.5rem;
      #infoline{
         animation: ${props => props.open ? css`${fadein} 0.6s ease-in-out` : 'none'};
   }
      
      #title{
         font-size: 2.4rem;
         font-weight: 800;
      }
      &#oneinfo{ 
         animation: ${props => props.open ? css`${growin} 0.6s ease-in-out` : 'none'};
      }
      &#twoinfo{
         animation: ${props => props.open ? css`${growin} 0.6s ease` : 'none'};
      }
      &#threeinfo{
         width: 110rem;
         animation: ${props => props.open ? css`${growin} 0.9s ease` : 'none'};
      }
   }
`;


