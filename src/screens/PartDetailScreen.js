// src/screens/PartDetailScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';
import PartIcon from '../components/PartIcon';

const PartDetailScreen = ({ route, navigation }) => {
  const { part } = route.params;
  const { isDarkMode } = useApp();
  
  const compatibleModelsText = part.compatibleModels
    .map(model => model.charAt(0).toUpperCase() + model.slice(1))
    .join(', ');
  
  const handleAddToCart = () => {
    Alert.alert(
      "Added to Cart",
      `${part.name} has been added to your cart.`,
      [{ text: "OK", onPress: () => navigation.goBack() }]
    );
  };
  
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  
  return (
    <SafeAreaView className={`flex-1 ${bgColor}`}>
      <View className="flex-row justify-between items-center px-4 py-2 border-b border-gray-200 dark:border-gray-800">
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="p-2"
        >
          <Text className="text-primary font-semibold">Close</Text>
        </TouchableOpacity>
        <Text className={`text-lg font-bold ${textColor}`} numberOfLines={1}>
          Part Details
        </Text>
        <View className="w-14" />
      </View>
      
      <ScrollView className="flex-1" contentContainerClassName="pb-8">
        <View className="p-4">
          <Text className={`text-2xl font-bold ${textColor} mb-4`}>{part.name}</Text>
          
          <View className="items-center justify-center h-56 mb-6">
            <PartIcon part={part} size={200} />
          </View>
          
          <View className="flex-row justify-between items-center mb-6">
            <View 
              className={`px-3 py-1 rounded-full`}
              style={{ backgroundColor: `${part.color}20` }}
            >
              <Text style={{ color: part.color }} className="font-semibold">
                {part.category.charAt(0).toUpperCase() + part.category.slice(1)}
              </Text>
            </View>
            <Text className="text-xl font-bold text-primary">${part.price.toFixed(2)}</Text>
          </View>
          
          <View className="mb-6">
            <Text className={`text-sm font-medium mb-1 ${textSecondary}`}>Description</Text>
            <Text className={`${textColor} text-base leading-6`}>{part.description}</Text>
          </View>
          
          <View className="mb-8">
            <Text className={`text-sm font-medium mb-1 ${textSecondary}`}>Compatible With</Text>
            <Text className={`${textColor} text-base`}>{compatibleModelsText}</Text>
          </View>
          
          <TouchableOpacity
            className="bg-primary py-4 rounded-xl items-center"
            onPress={handleAddToCart}
          >
            <Text className="text-white font-semibold text-lg">Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PartDetailScreen;