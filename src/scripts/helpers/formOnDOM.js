import renderToDOM from './renderToDOM';

// HTML Structure
const htmlStructure = () => {
  const domString = '<div id="form-container"></div>';
  renderToDOM('#app', domString);
};

const formOnDOM = () => {
  const domString = `
  <form>
    <div class="input-group">
      <span class="input-group-text">Artist</span>
      <input type="text" id="artist" aria-label="artist" class="form-control">
      <span class="input-group-text">Song</span>
      <input type="text" id="song" aria-label="song" class="form-control">
      <div class="col-auto">
        <button type="submit" class="btn btn-primary" id="submit" >Submit</button>
      </div>
    </div>
  </form>`;
  renderToDOM('#form-container', domString);
};

export { htmlStructure, formOnDOM };
