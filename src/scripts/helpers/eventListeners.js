import lyricsOnDOM from '../components/lyricsOnDOM';
// import { htmlStructure, formOnDOM } from "./formOnDOM"

const events = () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputArtist = document.querySelector('#artist').value;
    const inputSong = document.querySelector('#song').value;
    lyricsOnDOM(inputArtist, inputSong);
    form.reset();
  });
};

export default events;
