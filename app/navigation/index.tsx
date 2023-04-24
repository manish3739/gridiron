import React, { useEffect } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabBar from './tabBar';
import Home from '../screens/appService/home';
import Profile from '../screens/appService/profile';
import Challenges from '../screens/appService/challenges';
import Content from '../screens/appService/content';
import SignIn from '../screens/authService/signin/index';
import WelcomeView from '../screens/authService/welcome/welcome/welcomeScreen';
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
import InformationScreen from '../screens/appService/informationScreen';
import Privacypolicy from '../screens/appService/privacyPolicy';
import FAQScreen from '../screens/appService/FAQScreen';
import TermsAndCondition from '../screens/appService/termsAndCondition';
import MyChallenges from '../screens/appService/myChallenges';
import CompletedChallenges from '../screens/appService/completedChallenges';
import { useAuth } from '../contexts/Auth';
import { ActivityIndicator, View } from 'react-native';

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
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
      <Tab.Screen name="Challenges" component={ChallengesStack} />
      <Tab.Screen name="Content" component={ContentStack} />
    </Tab.Navigator>
  );
};

const AppStackScreen = () => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen component={TabStack} name="HomeTab" />
      <AppStack.Screen component={Privacypolicy} name="PrivacyPolicy" />
      <AppStack.Screen component={FAQScreen} name="FAQScreen" />
      <AppStack.Screen component={TermsAndCondition} name="TermsAndCondition" />
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
      <AppStack.Screen component={InformationScreen} name="InformationScreen" />
      <AppStack.Screen component={MyChallenges} name="MyChallenges" />
      <AppStack.Screen component={CompletedChallenges} name="CompletedChallenges" />
    </AppStack.Navigator>
  );
};

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen component={WelcomeView} name="WelcomeView" />
      <AuthStack.Screen component={SignIn} name="SignIn" />
      <AuthStack.Screen component={Signup} name="Signup" />
    </AuthStack.Navigator>
  );
};

const Route = () => {
  const { authData, loading } = useAuth();

  return (
    loading ?
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <ActivityIndicator color={'#000'} animating={true} size="small" />
      </View> :
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {authData ?
            <Stack.Screen name="App" component={AppStackScreen} /> :
            <Stack.Screen name="Auth" component={AuthStackScreen} />
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default Route;
