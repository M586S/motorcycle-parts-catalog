// src/components/EmptyResults.js
import React from 'react';
import { View, Text } from 'react-native';
import { useApp } from '../context/AppContext';

const EmptyResults = () => {
  const { isDarkMode } = useApp();
  
  return (
    <View className="flex-1 items-center justify-center p-8">
      <View className={`w-16 h-16 rounded-full items-center justify-center border-2 mb-4 ${
        isDarkMode ? 'border-gray-600' : 'border-gray-300'
      }`}>
        <Text className={`text-2xl ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>?</Text>
      </View>
      <Text className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        No parts found
      </Text>
      <Text className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Try adjusting your search filters or try different keywords
      </Text>
    </View>
  );
};

export default EmptyResults;