import styled, { createGlobalStyle } from "styled-components";
import BgImage from "./images/imagetwo.png";
import bgImage2 from "./images/imageone.jpg";

console.log(BgImage);
export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}
body {
  background-image: url(${BgImage}, url(${bgImage2});
    background-color:blue; 
    background-size: cover;
    margin: 0;
     padding: 0 20px;
     display: flex;
     justify-content: center;

}
*{
  box-sizing: border-box;
  font-family: 'Roboto Condensed' ,sans-seriff;
}

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: black;
    font-size: 2rem;
    margin: 0;
    font-weight: bold;
  }
  h1 {
    font-family: fascinate Inline, sans-seriff;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    // --webkit-background-clip: text;
    // --webkit-text-fill-color: transparent;
    // --moz-bakcgound-clip: text;
    // --moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text.align: center;
    margin: 20px;
    font-weight: 400;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
