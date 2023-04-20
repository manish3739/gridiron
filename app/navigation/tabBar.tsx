import React, { useContext } from 'react';
import {
  View, TouchableOpacity, Image, Text, Platform, Dimensions,
} from 'react-native';
import styles from './styles';

export const windowHeight = Dimensions.get('window').height;

const MyTabBar = ({ state, descriptors, navigation }: any) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e: any) => {
      e.preventDefault();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          height: Platform.OS === 'ios' ? 76 : 56,
          backgroundColor: '#FFFFFF',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}
      >
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              // @ts-ignore
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 3,
              }}
            >
              {label === 'Home' ? (
                <View style={styles.tabBarContain}>
                  <Text
                    style={[
                      styles.textName,
                    ]}
                  >
                    Home
                  </Text>
                </View>
              ) : label === 'Profile' ? (
                <View style={styles.tabBarContain}>
                  <Text
                    style={[
                      styles.textName,
                    ]}
                  >
                    Profile
                  </Text>
                </View>
              ) : label === 'Challenges' ? (
                <View style={styles.tabBarContain}>
                <Text
                  style={[
                    styles.textName,
                  ]}
                >
                  Challenges
                </Text>
              </View>
              ) : 
                label === 'Content' ? (
                  <View style={styles.tabBarContain}>
                  <Text
                    style={[
                      styles.textName,
                    ]}
                  >
                    Content
                  </Text>
                </View>
                ) : label === 'Home' ? (
                  <View style={styles.tabBarContain}>
                  <Text
                    style={[
                      styles.textName,
                    ]}
                  >
                    Home
                  </Text>
                </View>
                ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </>
  );
};

export default MyTabBar;
