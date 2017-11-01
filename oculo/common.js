export const flatColor = {
  orangeTint3: { name: 'Melon', hex: '#f5b2a7' },
  orangeTint2: { name: 'Dark Salmon', hex: '#f19484' },
  orangeTint1: { name: 'Terra Cotta', hex: '#ed7561' },
  orangePrimary: { name: 'Carmine Pink', hex: '#ea573e' },
  orangeShade1: { name: 'Golden Gate Bridge', hex: '#c04833' },
  orangeShade2: { name: 'Burnt Umber', hex: '#953828' },
  orangeShade3: { name: 'Liver', hex: '#6b281d' },
  blueTint3: { name: 'Azureish white', hex: '#cce7f9' },
  blueTint2: { name: 'Powder Blue', hex: '#b8ddf7' },
  blueTint1: { name: 'Non-photo blue', hex: '#a4d4f5' },
  bluePrimary: { name: 'Light Cornflower Blue', hex: '#90cbf3' },
  blueShade1: { name: 'Moonstone Blue', hex: '#76a7c7' },
  blueShade2: { name: 'Rackley', hex: '#5c829b' },
  blueShade3: { name: 'Deep Space Sparkle', hex: '#425d6f' },
  greenTint3: { name: 'Nyanza', hex: '#e1f4d8' },
  greenTint2: { name: 'Tea Green', hex: '#d5f039' },
  greenTint1: { name: 'Tea Green', hex: '#c9ecba' },
  greenPrimary: { name: 'Light Moss Green', hex: '#bee8ab' },
  greenShade1: { name: 'Dark Sea Green', hex: '#9cbe8c' },
  greenShade2: { name: 'Camouflage Green', hex: '#79946d' },
  greenShade3: { name: 'Ebony', hex: '#576a4e' },
  yellowTint3: { name: 'Blanced Almond', hex: '#fcefcb' },
  yellowTint2: { name: 'Banana Mania', hex: '#fbe9b6' },
  yellowTint1: { name: 'Peach-Yellow', hex: '#fae3a1' },
  yellowPrimary: { name: 'Flavescent', hex: '#f9dd8d' },
  yellowShade1: { name: 'Misty Moss', hex: '#ccb574' },
  yellowShade2: { name: 'Chamoisee', hex: '#9f8d5a' },
  yellowShade3: { name: 'Raw Umber', hex: '#726541' },
  grayTint3: { name: 'Silver Chalice', hex: '#a9acb1' },
  grayTint2: { name: 'Roman Silver', hex: '#878b92' },
  grayTint1: { name: 'Dim Gray', hex: '#656a73' },
  grayPrimary: { name: 'Outer Space', hex: '#434a54' },
  grayShade1: { name: 'Arsenic', hex: '#373d45' },
  grayShade2: { name: 'Gunmetal', hex: '#2b3036' },
  grayShade3: { name: 'Dark Gunmetal', hex: '#1f2227' },
  whiteTint2: { name: 'White Smoke', hex: '#f6f6f6' },
  whiteTint1: { name: 'White Smoke', hex: '#f4f4f4' },
  whitePrimary: { name: 'White', hex: '#ffffff' },
  whiteShade1: { name: 'Lavender Gray', hex: '#c7c7c7' },
  whiteShade2: { name: 'Spanish Gray', hex: '#9b9b9b' },
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
  longText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
  borderWidth: '1px',
  borderColor: flatColor.orangePrimary.hex,
  textAlign: 'center',
  margin: '2px',
  borderRadius: '6px',
  display : 'inline-block',
  backgroundImage: 'none',
}

export const defaultSecondaryButtonStyle = {
  ...defaultPrimaryButtonStyle,
  backgroundColor: flatColor.whitePrimary.hex,
  color: flatColor.grayShade1.hex,
  borderColor: flatColor.grayShade1.hex,
  borderWidth: '2px',
  margin: '1px',
}

export const defaultSmallButtonStyle = {
  ...defaultPrimaryButtonStyle,
  backgroundColor: flatColor.whitePrimary.hex,
  fontSize: fontSizeStyle.bodySmallFontSize,
  padding: '1px 5px 1px 5px',
  borderWidth: '2px',
  margin: '1px',
}
