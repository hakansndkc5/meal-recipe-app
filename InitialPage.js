import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Categories from './Categories';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title="Categories"
          onPress={() => navigation.navigate('Categories')}
        />
      </View>
      
    </View>
  );
};

const InitialPage = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ title: 'Categories' }}
        />
        <Stack.Screen
          name="RandomMeal"
          component={RandomMeal}
          options={{ title: 'Random Meal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InitialPage;
