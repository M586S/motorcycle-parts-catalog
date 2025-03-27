// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useApp } from '../context/AppContext';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import FilterBar from '../components/FilterBar';
import PartCard from '../components/PartCard';
import EmptyResults from '../components/EmptyResults';

const HomeScreen = ({ navigation }) => {
  const { 
    isDarkMode, 
    filteredParts, 
    searchTerm, 
    setSearchTerm,
    categoryFilter,
    setCategoryFilter
  } = useApp();
  
  const handleViewPart = (part) => {
    navigation.navigate('PartDetail', { part });
  };
  
  const renderItem = ({ item }) => (
    <PartCard part={item} onPress={handleViewPart} />
  );
  
  return (
    <SafeAreaView className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <Header title="Motorcycle Parts" />
      
      <View className="px-4 pt-2 pb-1">
        <SearchBar value={searchTerm} onChangeText={setSearchTerm} />
      </View>
      
      <CategoryFilter 
        selectedCategory={categoryFilter}
        onSelectCategory={setCategoryFilter}
      />
      
      <FilterBar />
      
      <View className="px-4 py-2">
        <Text className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          Showing {filteredParts.length} part{filteredParts.length !== 1 ? 's' : ''}
        </Text>
      </View>
      
      {filteredParts.length === 0 ? (
        <EmptyResults />
      ) : (
        <FlatList
          data={filteredParts}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerClassName="p-2"
          columnWrapperClassName="justify-between"
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;