// Modules
import { createAppContainer, createStackNavigator, TransitionConfig} from 'react-navigation';
import { Easing, Animated } from 'react-native';

// Pages
import Home from './pages/HomePage.js';
import AboutMe from './pages/AboutPage.js';
import BookingPage from './pages/BookingPage.js';
import AvailabilityPage from './pages/AvailabilityPage.js';
import FaqPage from './pages/FaqPage.js';
import UsefulLinksPage from './pages/UsefulLinksPage.js';

// Routing
const AppScreens = createStackNavigator({
  Home: Home,
  About: AboutMe,
  Book: BookingPage,
  Availability: AvailabilityPage,
  Faq: FaqPage,
  Links: UsefulLinksPage
},
{
  transitionConfig:()=>({
    transitionSpec: {
      duration: 0,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing
    }
  })
});

// Create route container
const App = createAppContainer(AppScreens);

export default App;

