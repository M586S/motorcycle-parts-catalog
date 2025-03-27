// src/components/PartCard.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useApp } from '../context/AppContext';
import PartIcon from './PartIcon';

const PartCard = ({ part, onPress }) => {
  const { isDarkMode } = useApp();
  
  return (
    <TouchableOpacity
      onPress={() => onPress(part)}
      className={`w-[48%] mb-4 rounded-xl overflow-hidden ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-700' 
          : 'bg-white border-gray-200'
      } border shadow-sm`}
      style={{
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
      }}
    >
      <View className="p-3">
        <View className="items-center py-3">
          <PartIcon part={part} size={80} />
        </View>
        
        <Text 
          numberOfLines={1}
          className={`font-semibold text-base mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          {part.name}
        </Text>
        
        <View className="flex-row justify-between items-center mb-2">
          <View 
            className="px-2 py-1 rounded-full"
            style={{ backgroundColor: `${part.color}20` }}
          >
            <Text style={{ color: part.color }} className="text-xs font-medium">
              {part.category.charAt(0).toUpperCase() + part.category.slice(1)}
            </Text>
          </View>
          <Text className="font-bold text-primary">${part.price.toFixed(2)}</Text>
        </View>
        
        <Text 
          numberOfLines={2}
          className={`text-xs leading-4 mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {part.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PartCard;