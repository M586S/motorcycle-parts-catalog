// src/components/Header.js
import React from 'react';
import { View, Text } from 'react-native';
import { useApp } from '../context/AppContext';

const Header = ({ title }) => {
  const { isDarkMode } = useApp();
  
  return (
    <View className={`p-4 border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <Text className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </Text>
    </View>
  );
};

export default Header;