import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './tabBar';
import Login from '../screens/authService/login';
import Home from '../screens/appService/home';
import Profile from '../screens/appService/profile';
import Challenges from '../screens/appService/challenges';
import Content from '../screens/appService/content';
import Signup from '../screens/authService/signup';
import Settings from '../screens/appService/settings';
import Account from '../screens/appService/account';
import VerifyAccount from '../screens/appService/verifyAccount';
import EmailScreen from '../screens/appService/emailScreen';
import PasswordScreen from '../screens/appService/passwordScreen';
import MembershipScreen from '../screens/appService/membershipScreen';
import UsernameScreen from '../screens/appService/usernameScreen';
import InviteFriends from '../screens/appService/inviteFriends';
import HelpScreen from '../screens/appService/helpScreen';
import ReportProblem from '../screens/appService/reportProblem';
import AboutScreen from '../screens/appService/aboutScreen';

const Stack: any = createStackNavigator();
const AppStack: any = createStackNavigator();
const AuthStack: any = createStackNavigator();
const HomeS: any = createStackNavigator();
const Tab: any = createBottomTabNavigator();

const HomeStack: any = () => {
  return (
    <HomeS.Navigator screenOptions={{ headerShown: false }}>
      <HomeS.Screen component={Home} name="HomeView" />
    </HomeS.Navigator>
  );
};

const ProfileStack: any = () => {
  return (
    <HomeS.Navigator screenOptions={{ headerShown: false }}>
      <HomeS.Screen component={Profile} name="ProfileView" />
    </HomeS.Navigator>
  );
};
const ChallengesStack: any = () => {
  return (
    <HomeS.Navigator screenOptions={{ headerShown: false }}>
      <HomeS.Screen component={Challenges} name="ChallengesView" />
    </HomeS.Navigator>
  );
};
const ContentStack: any = () => {
  return (
    <HomeS.Navigator screenOptions={{ headerShown: false }}>
      <HomeS.Screen component={Content} name="ContentView" />
    </HomeS.Navigator>
  );
};

const resetStackActions = ({ navigation }: any) => ({
  tabPress: () => {
    navigation.dispatch(
      StackActions.popToTop(),
    );
  },
});

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props: any) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeStack}  />
      <Tab.Screen name="Profile" component={ProfileStack}  />
      <Tab.Screen name="Challenges" component={ChallengesStack}  />
      <Tab.Screen name="Content" component={ContentStack}  />
    </Tab.Navigator>
  );
};

const AppStackScreen = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen component={TabStack} name="HomeTab" />
      <AppStack.Screen component={Settings} name="Settings" />
      <AppStack.Screen component={Account} name="Account" />
      <AppStack.Screen component={VerifyAccount} name="VerifyAccount" />
      <AppStack.Screen component={EmailScreen} name="Email" />
      <AppStack.Screen component={PasswordScreen} name="Password" />
      <AppStack.Screen component={MembershipScreen} name="Membership" />
      <AppStack.Screen component={UsernameScreen} name="Username" />
      <AppStack.Screen component={InviteFriends} name="InviteFriends" />
      <AppStack.Screen component={HelpScreen} name="HelpScreen" />
      <AppStack.Screen component={ReportProblem} name="ReportProblem" />
      <AppStack.Screen component={AboutScreen} name="AboutScreen" />
    </AppStack.Navigator>
  );
};

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen component={Signup} name="Signup" />
      <AuthStack.Screen component={Login} name="Login" />

    </AuthStack.Navigator>
  );
};

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="App" component={AppStackScreen} />
            <Stack.Screen name="Auth" component={AuthStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Route;
