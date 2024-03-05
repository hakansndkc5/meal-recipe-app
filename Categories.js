// Categories.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Categories = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Kategorileri çekmek için API isteği yapılır
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((data) => {
        // API'den gelen veriyi kullanarak kategorileri ayarla
        setCategories(data.categories);
      })
      .catch((error) => {
        console.error('Kategorileri çekerken bir hata oluştu:', error);
      });
  }, []); 

  // Eğer kategoriler henüz yüklenmemişse veya boşsa
  if (!categories || categories.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const handleCategoryPress = (category) => {
    navigation.navigate('Meals', { categoryName: category.strCategory });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.idCategory.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item)}>
            <View style={styles.categoryItem}>
              <Image style={styles.categoryImage} source={{ uri: item.strCategoryThumb }} />
              <Text style={styles.categoryText}>{item.strCategory}</Text>
              <Text style={styles.categoryDescription}>{item.strCategoryDescription}</Text>
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
  categoryDescription: {
    color: '#ECECEC',
  },
});

export default Categories;
