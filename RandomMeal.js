// RandomMeal.js
import React, { useState } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState(null);

  const handleRandomMealPress = () => {
    // Random bir yemek çekmek için API isteği yapılır
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((data) => {
        // API'den gelen random yemeği ayarla
        const meal = data.meals[0];
        setRandomMeal(meal);
      })
      .catch((error) => {
        console.error('Random yemek çekerken bir hata oluştu:', error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
     
     {randomMeal && (
       <View>
         
         <Image source={{ uri: randomMeal.strMealThumb }} style={styles.image} />
         <Text style={styles.header}>{randomMeal.strMeal} </Text>
         <Text> </Text>
         <Text style={styles.text}>{randomMeal.strInstructions}</Text>

       </View>
     )}
     
   </View>
   <Button  title="Get Random Meal"  onPress={handleRandomMealPress} />
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#241332',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D9BF77',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  text:{
    color:'white'
  }
});

export default RandomMeal;
