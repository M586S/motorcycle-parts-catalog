// src/components/FilterBar.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { useApp } from '../context/AppContext';
import { modelOptions, sortOptions } from '../data/partsData';
import FilterSheet from './FilterSheet';

const FilterBar = () => {
  const { 
    isDarkMode, 
    modelFilter, 
    setModelFilter,
    sortBy, 
    setSortBy 
  } = useApp();
  
  const [modelModalVisible, setModelModalVisible] = useState(false);
  const [sortModalVisible, setSortModalVisible] = useState(false);
  
  const getModelLabel = () => {
    const option = modelOptions.find(opt => opt.value === modelFilter);
    return option ? option.label : 'All Models';
  };
  
  const getSortLabel = () => {
    const option = sortOptions.find(opt => opt.value === sortBy);
    return option ? option.label : 'Name (A-Z)';
  };
  
  return (
    <View className="flex-row px-4 py-2">
      <TouchableOpacity 
        onPress={() => setModelModalVisible(true)}
        className={`flex-1 mr-2 p-3 rounded-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
        }`}
      >
        <Text className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
          Compatible Models
        </Text>
        <Text className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {getModelLabel()}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        onPress={() => setSortModalVisible(true)}
        className={`flex-1 ml-2 p-3 rounded-lg ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
        }`}
      >
        <Text className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-1`}>
          Sort By
        </Text>
        <Text className={`${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {getSortLabel()}
        </Text>
      </TouchableOpacity>
      
      <FilterSheet 
        visible={modelModalVisible}
        onClose={() => setModelModalVisible(false)}
        title="Compatible Models"
        options={modelOptions}
        selectedValue={modelFilter}
        onSelect={(value) => {
          setModelFilter(value);
          setModelModalVisible(false);
        }}
      />
      
      <FilterSheet 
        visible={sortModalVisible}
        onClose={() => setSortModalVisible(false)}
        title="Sort By"
        options={sortOptions}
        selectedValue={sortBy}
        onSelect={(value) => {
          setSortBy(value);
          setSortModalVisible(false);
        }}
      />
    </View>
  );
};

export default FilterBar;