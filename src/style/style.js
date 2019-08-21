import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle `
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  

  @font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1566336281538'); /* IE9 */
  src: url('./iconfont.eot?t=1566336281538#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATQAAsAAAAACXAAAASDAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDSAqFaIUKATYCJAMYCw4ABCAFhG0HUhs6CFFUTtpkH4eNY1rCUiRJkQ7SSM78dwTVGtmzO7ePoBAlOlaYsJBRcaTQAkkXI1MRho346d8rX3BKzkil1RGlgkLZqLnlZFP4xL+SzBb2/v/3qmYejwXntW9xeT9jTRtrWkLhcIACNNagDpCCDpByqQDeB3iGCxN4nkC/Oe1B5116kcBXEqYF4qksscDXpZcxtNCraiFrs8U34KW3vIfPA+Cr/v3xH5jCl6KrhLl3n3TmQcGvDq+DkHeeEsNUAhCUZ8VtExU7gCRehdpfQszgDkT/5zegLgCDehX5q8PztOdFL/u/DvJ4cIkFdxgUg6RS3j9eRzQkH0TqlawbQYGMkfxKwyj8KsKo/OmPEfwL0utQ3UosHwf8ACAeIXVmzyL1qMpYiK/vvQjc39/bD0Mx7cig4KBx5IEb4Pp1EiIpyO1mSjWadiaU3OjPHNSeLwGC+ml/ErPgg4fMTMTmRw9i9+H1APQHdhiruwiVMkyp/lAOtX01KFmD1x+DoEnXn5I3nlHuF4z2fLym0fn/9o0b1PXrZoYmS2bomVkR1IxwcqZEz9wePogaOmshTzMU057Wz1oV0XvGHC65dEQrcAN3DtC0CXWR9MzSdatyxs2ZPT18UmC4FL1Kg66v4KVpg0ZNr4ucORNCZs2KYGfM/rN/8OB7elchXL19ezVcME34VMEB9O9f9MDQjkv+lLmaPak+Bjgsdr3SutMVIdBj7qgV5/Wl4CKznOdG/+S51BMZesirUOdoQ8sBw/GeBVlPRzDquZiIP7EtPrVIBAQyxY0mJqJukZ6Y4PZCqg69ac8LKF+9C/36Bd2N7vr6dRdCiDToLhfy3Vs9fV23tZOC9nhXdcFtEGCOgoO5DsGNe7iur1ts/M0EI7n/wqJIemjhiidDCtN7nVTmnWSajkmtaAouTZyBnDyBgGTGFaF6uh07fcpEeNkyGCUTGUc9vJQR3Rv5BAuo/v1tTnTTkpo/32gj+6sEGMtLDKPg8nJ4lEFCWsko2MDBpeWQ68nrv4LXdMLRIgZO8d29PLh6uTAIHAK49dTDiM6srP/q1PCHehvJOb1+xsdyYP7IoJxvvXiCn2VVMVh0W5KgvgPgHFFILTiZHNkMLH7RVyQYWr5rZMWyPkGgOeKzvq30i22cQu5x98tSTqVOJ/SasqHoMQtVrxViUnegM2AXml5H0G9b180DJigQkX3YUgkQRm2CYth3qEZdICb1HnSmvYNmNBDo9zjC9hywFjLWURFYVeAJ8wRC5hx2UTKpmJE5QJDGWFnFKdIZtKC4ZA9h1Bm8ka6CXVDKWOAaK5lUVSRExWEjusBlgtXqIJyKo1jgVN1oVXVm6fVi2DvpOIcNYM4oBCyVgEcwm4Ag4zjYiWpnFeb7+gEEkjGsWEpMww83TaBwkXsnGOkYUhC7yu2pGrZlsMtYEhOVSuRJIoWDDaELWgVWMehAcIaPKibgqHRG5/A7ZdFTKzGtXFe/0raUu6Cf8PYtStTI6KJFj3zmlO1wIQubZb/erGSXRVlQ8H5WdkKHojGq6rADAAA=') format('woff2'),
  url('./iconfont.woff?t=1566336281538') format('woff'),
  url('./iconfont.ttf?t=1566336281538') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1566336281538#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconspin:before {
  content: "\e851";
}

.iconAa:before {
  content: "\e636";
}

.iconbi:before {
  content: "\e642";
}

.iconMagnifier:before {
  content: "\e62d";
}

.iconPlay-Button:before {
  content: "\ea0f";
}
  
`


