// src/components/SearchBar.js
import React from 'react';
import { View, TextInput } from 'react-native';
import { useApp } from '../context/AppContext';
import SearchIcon from './icons/SearchIcon';

const SearchBar = ({ value, onChangeText }) => {
  const { isDarkMode } = useApp();
  
  return (
    <View className={`flex-row items-center ${
      isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'
    } border rounded-lg px-3 py-1`}>
      <SearchIcon color={isDarkMode ? '#9CA3AF' : '#6B7280'} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search parts..."
        placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
        className={`flex-1 text-base px-2 py-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
      />
    </View>
  );
};

export default SearchBar;