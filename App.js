import React from 'react';
import { View, Button, TouchableOpacity, StyleSheet, Text,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './Categories';
import Meals from './Meals';
import MealDetails from './MealDetails';
import RandomMeal from './RandomMeal';
import resim from './breakfast.png'

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Categories')}
        >
         
          <Text style={styles.buttonText}>Categories</Text>
          <Text> </Text>
          <Image
        source={require('./iftar.png')} 
        style={{ width: 100, height: 100 }} 
      />
        </TouchableOpacity>
      </View>
      <View style={styles.divider} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RandomMeal')}
        >
          <Text style={styles.buttonText}>Random Meal</Text>
          <Text> </Text>
          <Image
        source={require('./surprise-box.png')} 
        style={{ width: 100, height: 100 }} 
      />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome to the best recipe app!', headerStyle: { backgroundColor: '#6F7769' }, headerTitleStyle: { color: '#FFFFFF' } }}
    
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ title: 'Categories', headerStyle: { backgroundColor: '#FF6347' }, headerTitleStyle: { color: '#FFFFFF' } }}
        />
        <Stack.Screen
          name="Meals"
          component={Meals}
          options={{ title: 'Meals', headerStyle: { backgroundColor: '#008080' }, headerTitleStyle: { color: '#FFFFFF' } }}
    
        />
        <Stack.Screen
          name="MealDetails"
          component={MealDetails}
          options={{ title: 'Meal Details', headerStyle: { backgroundColor: '#4B0082' }, headerTitleStyle: { color: '#FFFFFF' } }}
        />
        <Stack.Screen
          name="RandomMeal"
          component={RandomMeal}
          options={{ title: 'Random Meal', headerStyle: { backgroundColor: '#4B0082' }, headerTitleStyle: { color: '#FFFFFF' } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'#241332'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    width: 1,
    backgroundColor: '#000000', 
  },
  button: {
    padding: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D9BF77', 
  },
});

export default App;
