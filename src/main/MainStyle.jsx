import styled, { css, keyframes } from "styled-components";
import recommend from "../images/Recommendation.png";
import conimg01 from "../images/ConceptImges01.webp";
import conimg02 from "../images/ConceptImges02.webp";
import conimg03 from "../images/ConceptImges03.webp";
import conimg04 from "../images/ConceptImges04.webp";
import conimg05 from "../images/ConceptImges05.webp";
import conimg06 from "../images/ConceptImges06.webp";
import conimg07 from "../images/ConceptImges07.webp";
import guide01 from "../images/GuideImage01.jpg";
import guide02 from "../images/GuideImage02.jpg";
import guide03 from "../images/GuideImage03.webp";

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
   flex-direction: column;
   gap: 5rem;
   justify-content: center;
   align-items: center;
   #circle {
      width: 60%;
      animation: ${props => props.open ? 'scaleup 5.5s ease-in-out forwards' : 'none'};

    @keyframes scaleup {
      0% {
        transform: scale(0);
      }
      30% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
      height: auto;
      position: fixed;
      z-index: -1;
      top: 0%;
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
      z-index: -2;
      @keyframes light {  
            0% { opacity: 0; } 
            50% { opacity: .5; }
            100% { opacity: .0; }
         }
         animation: light 5s ease-in-out infinite;
   }
   #star {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -3;
      @keyframes lighto {  
            0% { opacity: 0; } 
            25% { opacity: 1; }
            50% { opacity: 0; }
            75% { opacity: 0; }
            100% { opacity: 0; }
         }
         animation: lighto 10s ease infinite;
   }
   #starreverse {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -3;
      @keyframes lightt {  
            0% { opacity: 0; } 
            25% { opacity: 0; }
            50% { opacity: 0; }
            75% { opacity: 1; }
            100% { opacity: 0; }
         }
         animation: lightt 10s ease infinite;
   }

`;
export const WelcomeBanner = styled.div`
   z-index: 1;
   scale: .9;
   position: fixed;
   top: 20%;
   left: ${props => props.open ? '10%' : '-350%'};
   transition: left 1.5s ease;
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
      text-shadow: 0px 0px 8px black;  
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
   /* align-items: center; */
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
         animation: ${props => props.open ? css`${fadein} 1s ease-in-out` : 'none'};
         #infolist {
            display: flex;
            justify-content: space-between;
            margin-top: 1.5rem;
            #name {
               font-size: 1.7rem;
               font-weight: 500;
            }
            #media {
               font-size: 1.7rem;
               font-weight: 500;
               color: var(--mainlightpurple);
            }
            #rank {
               font-size: 1.7rem;
               font-weight: 500;
               color: var(--mainlightpurple);
            }
            #price {
               font-size: 1.7rem;
               font-weight: 500;
               color: var(--mainlightorange);

            }
         }
   }
      
      #title{
         font-size: 2.4rem;
         font-weight: 800;
      }
      &#oneinfo{ 
         animation: ${props => props.open ? css`${growin} 0.6s ease` : 'none'};
      }
      &#twoinfo{
         animation: ${props => props.open ? css`${growin} 0.6s ease` : 'none'};
      }
      &#threeinfo{
         width: 110rem;
         animation: ${props => props.open ? css`${growin} 0.6s ease` : 'none'};
         
         #threeinfobox {
            margin-top: 3rem;
            display: flex;
            gap: 2rem;
            justify-content: space-between;
            .threein{
               flex: 1;
               height: auto;
               flex-direction: column;
               #infotitle {
                  font-size: 2.1rem;
                  font-weight: 600;
                  margin-bottom: 2rem;
               }
            #infoin {
               display: flex;
               gap: 2rem;
               font-size: 1.5rem;
               font-weight: 200;
               .in {
               }
               #inname{
                  font-weight: 600;
               }
               #inchange{
                  font-weight: 400;
               }
            }
               
            }
         }
      }
   }
`;


const rotater = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1080deg);
  }
`;

export const CardContainer = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   gap: 4rem;
   scale: ${props => props.open ? '1' : '0'};
   @media (max-width: 768px) {
      flex-wrap: wrap;
   }
  .card {
   width: 27rem;
   height: 40rem;
   background-color: red;
   border-radius: 3rem;
   color: white;
   font-size: 3rem;
   font-weight: 800;
   box-shadow: inset 0px 0px 35px rgba(255, 255, 255, 0.3);
   text-shadow: 0px 0px 9px black,
   0px 0px 15px black,
   0px 0px 9px black;
   padding: 3rem;
   animation: ${props => props.open ? css`${growin} 0.6s ease` : 'none'};
   cursor: pointer;
   &:hover{
      transform: scale(1.08);
      transition: all 0.1s ease;
   }
  }
  #card1 {
   background-image: url(${conimg04});
   background-size: 150%;
   background-position: center;
  }
  #card2 {
   background-image: url(${conimg07});
   background-size: 200%;
   background-position: 20%;
  }
  #card3 {
   background-image: url(${conimg06});
   background-size: cover;
   background-position: center;
}
  #card4 {
   background-image: url(${conimg03});
   background-size: cover;
   background-position: center;
}
`;

export const GuideContainer = styled.div`
   scale: ${props => props.open ? '1' : '0'};
   width: 120rem;
   height: auto;
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   animation: ${props => props.open ? css`${growin} 0.6s ease` : 'none'};
   gap: 5rem;
   .guide{
      box-shadow: inset 0px 0px 55px #ffffff45;
      width: 57.5rem;
      height: 52rem;
      border-radius: 3rem;
      box-sizing: border-box;
      font-size: 3rem;
      font-weight: 800;
      color: white;
      text-shadow: 0px 0px 9px black,
         0px 0px 15px black,
         0px 0px 9px black;
      padding: 4rem;
      cursor: pointer; 
      &:hover{
      transform: scale(1.08);
      transition: all 0.1s ease; }
      &#guide01 {
         background-image: url(${guide02});
         background-size: cover;
         background-position: 15%;
         font-size: 5rem;     
      }
      &#guide02 {
         background-image: url(${guide03});
         background-size: cover;
         font-size: 4rem;
      }
   }
`;



