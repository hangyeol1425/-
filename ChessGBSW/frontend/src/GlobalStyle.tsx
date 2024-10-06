import { createGlobalStyle } from 'styled-components';
import PretendardThin from './assets/font/Pretendard-Thin.woff2';
import PretendardExtraLight from './assets/font/Pretendard-ExtraLight.woff2';
import PretendardLight from './assets/font/Pretendard-Light.woff2';
import PretendardRegular from './assets/font/Pretendard-Regular.woff2';
import PretendardMedium from './assets/font/Pretendard-Medium.woff2';
import PretendardSemiBold from './assets/font/Pretendard-SemiBold.woff2';
import PretendardBold from './assets/font/Pretendard-Bold.woff2';
import PretendardExtraBold from './assets/font/Pretendard-ExtraBold.woff2';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardThin}) format('woff2');
    font-weight: 100; // Thin
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardExtraLight}) format('woff2');
    font-weight: 200; // Extra Light
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardLight}) format('woff2');
    font-weight: 300; // Light
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardRegular}) format('woff2');
    font-weight: 400; // Regular
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardMedium}) format('woff2');
    font-weight: 500; // Medium
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardSemiBold}) format('woff2');
    font-weight: 600; // SemiBold
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardBold}) format('woff2');
    font-weight: 700; // Bold
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url(${PretendardExtraBold}) format('woff2');
    font-weight: 800; // ExtraBold
    font-style: normal;
    font-display: swap;
  }

  /* html과 body의 높이 및 배경 설정 */
  html {
    height: 100%;
    background: linear-gradient(45deg, #A7C7E7, #D4A5ED, #B2DFFC, #E8CFFF);
    background-size: cover;
    background-attachment: fixed; /* 배경 고정 */
  }

  body {
    margin: 0;
    height: 100%;
    overflow-y: auto;
    color: ${(props) => props.theme.color};
    font-family: 'Pretendard';
    font-weight: 400;
    font-size: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a, Link {
    text-decoration:none;
    color: #1f1f1f;
  }
`;

export default GlobalStyle;