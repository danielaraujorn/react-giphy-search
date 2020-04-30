export type themeType = {
  primary: {
    main: string
    dark: string
    contrastColor: string
  }
  secondary: {
    main: string
  }
  image: { background: string; contrastColor: string }
  text: {
    color: string
    placeholder: string
  }
  icon: {
    color: string
  }
  margin: number[]
}

export const theme: themeType = {
  primary: {
    main: '#683475',
    dark: '#472a67',
    contrastColor: '#ffffff',
  },
  secondary: { main: '#73e827' },
  image: { background: '#000000', contrastColor: '#ffffff' },
  text: {
    color: 'black',
    placeholder: '#d8d8d8',
  },
  icon: {
    color: 'white',
  },
  margin: [8, 16, 24],
}
