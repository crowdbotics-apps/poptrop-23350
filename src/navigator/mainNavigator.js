import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList184843Navigator from '../features/ArticleList184843/navigator';
import ArticleList184842Navigator from '../features/ArticleList184842/navigator';
import ArticleList184841Navigator from '../features/ArticleList184841/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList184843: { screen: ArticleList184843Navigator },
ArticleList184842: { screen: ArticleList184842Navigator },
ArticleList184841: { screen: ArticleList184841Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
