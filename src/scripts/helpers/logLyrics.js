import lyricsOnDOM from '../components/lyricsOnDOM';
import getLyrics from './getLyrics';
import renderToDOM from './renderToDOM';

// HTML Structure
const htmlStructure = () => {
  const domString = '<div id="btn"></div>';
  renderToDOM('#app', domString);
};

const button = () => {
  const domString = '<button type="button" class="btn btn-primary" id="lyricButton">Click Me </button>';
  renderToDOM('#btn', domString);
};

// Log lyrics to Console
const logLyrics = (artist, song) => {
  document.querySelector('#lyricButton').addEventListener('click', (event) => {
    if (event.target.id) {
      lyricsOnDOM('lizzo', 'tempo');
      getLyrics(artist, song).then((response) => {
        console.warn(response.lyrics);
      });
    }
  });
};

export { logLyrics, htmlStructure, button };
