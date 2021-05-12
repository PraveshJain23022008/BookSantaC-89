import React from 'react';
import {Icon} from 'react-native-elements';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import MyDonationScreen from '../screens/MyDonationScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import MyReceivedBooksScreen from '../screens/MyReceivedBooksScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator, 
    navigationOptions:{drawerIcon : <Icon name = "HOME" type="fontawesome"/>} 
    },
    
  MyDonations : {
    screen : MyDonationScreen,
    navigationOptions:{drawerIcon: <Icon name="GIFT" type = "font-awesome"/>, drawerLabel:"My Donations"}
  },
  Notification : {
    screen : NotificationScreen,
    navigationOptions:{drawerIcon: <Icon name = "BELL" type = "font-awesome"/>, drawerLabel:"My Notifications"}
  },
  MyReceivedBooks :{
    screen: MyReceivedBooksScreen,
    navigationOptions:{drawerIcon: <Icon name = "GIFT!" type = "font-awesome"/>, drawerLabel:"Book Received"}
  },
  Setting : {
    screen : SettingScreen,
    navigationOptions:{drawerIcon: <Icon name = 'SETTINGS' type = "font-awesome"/>, drawerLabel: "Settings"}
  }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
 