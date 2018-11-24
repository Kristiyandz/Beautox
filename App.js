// Modules
import { createAppContainer, createStackNavigator } from 'react-navigation';

// Pages
import Home from './pages/HomePage.js';
import AboutMe from './pages/AboutPage.js';
import BookingPage from './pages/BookingPage.js';
import AvailabilityPage from './pages/AvailabilityPage.js';
import FaqPage from './pages/FaqPage.js';
import UsefulLinksPage from './pages/UsefulLinksPage.js';




const AppScreens = createStackNavigator({
  Home: Home,
  About: AboutMe,
  Book: BookingPage,
  Availability: AvailabilityPage,
  Faq: FaqPage,
  Links: UsefulLinksPage
});

const App = createAppContainer(AppScreens);

export default App;

