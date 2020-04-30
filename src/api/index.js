import { GiphyFetch } from '@giphy/js-fetch-api'

export const giphy = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY)
