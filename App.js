// Modules
import { createAppContainer, createStackNavigator } from 'react-navigation';

// Pages
import Home from './pages/HomePage.js';
import AboutMe from './pages/AboutPage.js';



const AppScreens = createStackNavigator({
  Home: Home,
  About: AboutMe
});

const App = createAppContainer(AppScreens);



export default App;

