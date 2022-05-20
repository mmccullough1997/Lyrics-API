// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import { logLyrics, htmlStructure, button } from './helpers/logLyrics';

// Start up
const startApp = () => {
  htmlStructure();
  button();
  logLyrics('lizzo', 'tempo');
};

startApp();
