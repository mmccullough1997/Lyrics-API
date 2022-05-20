// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { htmlStructure, formOnDOM } from './helpers/formOnDOM';
import events from './helpers/eventListeners';

// Start up
const startApp = () => {
  htmlStructure();
  formOnDOM();
  events();
  // logLyrics('lizzo', 'tempo');
};

startApp();
