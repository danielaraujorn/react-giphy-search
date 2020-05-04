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
  }
  disabled: {
    color: string
  }
  icon: {
    color: string
  }
  spacing: number[]
  borderRadius: number
}

export const theme: themeType = {
  primary: {
    main: '#623890',
    dark: '#472a67',
    contrastColor: '#ffffff',
  },
  secondary: { main: '#73e827' },
  image: { background: '#000000', contrastColor: '#ffffff' },
  text: {
    color: '#000000',
  },
  disabled: {
    color: '#AAAAAA',
  },
  icon: {
    color: 'white',
  },
  spacing: [8, 16, 24],
  borderRadius: 20,
}
