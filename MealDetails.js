// MealDetails.js
import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const MealDetails = ({ route }) => {
  const { foodName } = route.params;
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    // Seçilen yemeğin detaylarını çekmek için API isteği yapılır
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
      .then((response) => response.json())
      .then((data) => {
        // API'den gelen veriyi kullanarak yemek detaylarını ayarla
        setMealDetails(data.meals[0]);
      })
      .catch((error) => {
        console.error('Yemek detaylarını çekerken bir hata oluştu:', error);
      });
  }, [foodName]);

  if (!mealDetails) {
    return (
       
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.background}>
        <View  style={styles.container}>
      <Image style={styles.mealImage} source={{ uri: mealDetails.strMealThumb }} />
      <Text style={styles.mealTitle}>{mealDetails.strMeal}</Text>
      <Text style={styles.mealDescription}>{mealDetails.strInstructions}</Text>
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#241332'

  },
  mealImage: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  mealTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'#D9BF77'
  },
  mealDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#ECECEC'
  },
  background:{
    backgroundColor: '#241332'
  }
});

export default MealDetails;
