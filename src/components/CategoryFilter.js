// src/components/CategoryFilter.js
import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { useApp } from '../context/AppContext';
import { categories } from '../data/partsData';

const CategoryFilter = ({ selectedCategory, onSelectCategory }) => {
  const { isDarkMode } = useApp();
  
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="px-4 py-3"
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          onPress={() => onSelectCategory(category.id)}
          className={`mr-2 px-4 py-2 rounded-full ${
            selectedCategory === category.id
              ? 'bg-primary'
              : isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
          } ${
            selectedCategory !== category.id && category.id !== 'all'
              ? 'border' : ''
          }`}
          style={
            selectedCategory !== category.id && category.id !== 'all'
              ? { borderColor: category.color } : {}
          }
        >
          <Text
            className={`font-medium ${
              selectedCategory === category.id
                ? 'text-white'
                : ''
            }`}
            style={
              selectedCategory !== category.id
                ? { color: category.color }
                : {}
            }
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CategoryFilter;