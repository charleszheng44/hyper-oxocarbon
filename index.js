'use strict'

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('dark')

const black = '#161616' 
const white = '#fafafa'
const red = '#ee5396'
const green = '#08bdba'
const yellow = '#FFAB91'
const blue = '#78a9ff'
const magenta = '#be95ff'
const lightBlack = '#37474F'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan: blue,
  white,
  lightBlack,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: blue,
  lightWhite: white
}

module.exports.decorateConfig = config => {
  const backgroundColor = black
  const foregroundColor = white
  const cursorColor = config.cursorColor || blue
  const borderColor = '#3c3c3d'
  const tabText = 'rgba(249,249,250,.55)'
  const tabTextActive = '#f9f9fa'
  const dividerBg = 'rgba(255,255,255,0.15)'
  
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .tabs_title {
  			display: none !important;
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
      .terms_terms {
        margin-top: 1;
      }
      .terms_termsShifted {
        margin-top: 30px;
      }
    `
  })
}
