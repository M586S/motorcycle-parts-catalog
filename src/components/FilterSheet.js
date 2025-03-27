// src/components/FilterSheet.js
import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useApp } from '../context/AppContext';

const FilterSheet = ({ visible, onClose, title, options, selectedValue, onSelect }) => {
  const { isDarkMode } = useApp();
  
  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-white';
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-200';
  
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/50">
        <View className={`rounded-t-xl ${bgColor}`}>
          <View className="items-center pt-2 pb-1">
            <View className="w-10 h-1 bg-gray-300 rounded-full" />
          </View>
          
          <View className={`flex-row justify-between items-center p-4 border-b ${borderColor}`}>
            <Text className={`text-lg font-semibold ${textColor}`}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <Text className="text-primary font-medium">Close</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView className="max-h-96">
            {options.map((option) => (
              <TouchableOpacity
                key={option.value}
                onPress={() => onSelect(option.value)}
                className={`p-4 border-b ${borderColor} ${
                  selectedValue === option.value ? 'bg-primary/10' : ''
                }`}
              >
                <Text className={`${textColor} ${
                  selectedValue === option.value ? 'font-semibold text-primary' : ''
                }`}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default FilterSheet;