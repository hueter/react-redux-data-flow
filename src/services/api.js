import axios from 'axios';

/**
 * Wrapper around an axios method to call the GIPHY API.
 *  The API key has to be specified in a .env file at the root
 *  of the app. It should look like REACT_APP_GIPHY_API_KEY=yourkeyhere
 */
export function fetchRandomGif() {
  return (
    axios
      .get(
        `https://api.giphy.com/v1/gifs/random?api_key=${
          process.env.REACT_APP_GIPHY_API_KEY // this comes from a .env file
        }&rating=PG`
      )
      // wow giphy that is some seriously nested content!
      .then(res => res.data.data.images.fixed_height.url)
  );
}
