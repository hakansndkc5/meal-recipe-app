// Meals.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import MealDetails from './MealDetails';

const Meals = ({ route, navigation }) => {
  const { categoryName } = route.params;
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Kategoriye ait yemekleri çekmek için API isteği yapılır
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      .then((response) => response.json())
      .then((data) => {
        // API'den gelen veriyi kullanarak yemekleri ayarla
        setMeals(data.meals);
      })
      .catch((error) => {
        console.error('Yemekleri çekerken bir hata oluştu:', error);
      });
  }, [categoryName]);

  const handleMealPress = (meal) => {
    navigation.navigate('MealDetails', { foodName: meal.strMeal });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.idMeal.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMealPress(item)}>
            <View style={styles.categoryItem}>
              <Image style={styles.categoryImage} source={{ uri: item.strMealThumb }}/>
              <Text style={styles.categoryText}>{item.strMeal}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#241332',
    padding: 16,
  },
  categoryItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#4F2E4D',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D9BF77',
  },
});

export default Meals;
