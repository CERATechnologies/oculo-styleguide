// color names based on https://coolors.co
export const flatColor = {
  orangeTint1: { name: 'Terra Cotta', hex: '#ed7561' },
  orangePrimary: { name: 'Carmine Pink', hex: '#ea573e' },
  orangeShade1: { name: 'Golden Gate Bridge', hex: '#c04833' },
  blueTint1: { name: 'Picton Blue', hex: '#42c2fe' },
  bluePrimary: { name: 'Spiro Disco Ball', hex: '#19B5FE' },
  blueShade1: { name: 'Rich Electric Blue', hex: '#1595D0' },
  greenTint1: { name: 'Light Moss Green', hex: '#b2e3ab' },
  greenPrimary: { name: 'Pastel Green', hex: '#87D37C' },
  greenShade1: { name: 'Bud Green', hex: '#f6ad66' },
  yellowTint1: { name: 'Sand Storm', hex: '#F8D342' },
  yellowPrimary: { name: 'Jonquil', hex: '#F7CA18' },
  yellowShade1: { name: 'Lemon Curry', hex: '#CBA614' },
  grayTint1: { name: 'Gainsboro', hex: '#DADEDB' },
  grayPrimary: { name: 'Dim Gray', hex: '#656A73' },
  grayShade1: { name: 'Arsenic', hex: '#373D45' },
  whiteTint1: { name: 'White Smoke', hex: '#f4f4f4' },
  whitePrimary: { name: 'White', hex: '#ffffff' },
  whiteShade1: { name: 'Platinum', hex: '#e6e6e6' }
}

export const fontSizeStyle = {
  fontFamilyPrimary: 'Helvetica Neue',
  fontFamilySecondary: 'Helvetica',
  fontWeight: '200',
  bodyLineHeight: '20px',
  bodyFontSize : '14px',
  bodySmallFontSize: '12px',
  h1fontSize: '44px',
  h2fontSize: '30px',
  h3fontSize: '24px',
  h4fontSize: '18px',
  h5fontSize: '14px',
  shortText : 'The quick brown fox jumps over the wall',
  longText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  letterSpacing : '1px',
  textShadow: `1px 1px ${flatColor.grayTint1.hex}`
}

export const modalStyle = {
  headerDefault: {
    backgroundColor: flatColor.orangePrimary.hex,
  },
  headerTitleDefault: {
    color: flatColor.whitePrimary.hex,
    fontWeight: fontSizeStyle.fontWeight,
    fontSize: fontSizeStyle.h3fontSize
  }
}

export const defaultPrimaryButtonStyle = {
  backgroundColor: flatColor.orangePrimary.hex,
  color: flatColor.whitePrimary.hex,
  fontSize: fontSizeStyle.bodyFontSize,
  fontWeight: fontSizeStyle.fontWeight,
  padding: '6px 12px 6px 12px',
  fontWeight: 'normal',
  borderStyle: 'solid',
  borderWidth: '2px',
  borderColor: flatColor.orangePrimary.hex,
  textAlign: 'center',
  margin: '2px',
  borderRadius: '6px',
  display : 'inline-block',
  backgroundImage: 'none',
  letterSpacing: fontSizeStyle.letterSpacing,
}

export const defaultSecondaryButtonStyle = {
  ...defaultPrimaryButtonStyle,
  backgroundColor: flatColor.whitePrimary.hex,
  color: flatColor.grayShade1.hex,
  borderColor: flatColor.grayShade1.hex,
  borderWidth: '2px',
  margin: '1px',
  textShadow: fontSizeStyle.textShadow,
}

export const defaultSmallButtonStyle = {
  ...defaultPrimaryButtonStyle,
  backgroundColor: flatColor.whitePrimary.hex,
  fontSize: fontSizeStyle.bodySmallFontSize,
  padding: '1px 5px 1px 5px',
  borderWidth: '2px',
  margin: '1px',
  textShadow: fontSizeStyle.textShadow,
}
