import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen"
import ResultScreen from './src/screens/ResultScreen'
const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultScreen: ResultScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurants in Calgary'
  }
});


export default createAppContainer(navigator)