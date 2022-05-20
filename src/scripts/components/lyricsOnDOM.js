import getLyrics from '../../api/getLyrics';
import renderToDOM from '../helpers/renderToDOM';

// UI Presentation
const lyricsOnDOM = (artist, song) => {
  getLyrics(artist, song).then((response) => {
    renderToDOM('#app', response.lyrics);
  });
};

export default lyricsOnDOM;
