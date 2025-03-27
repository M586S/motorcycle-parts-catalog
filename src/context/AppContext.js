// src/context/AppContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Appearance } from 'react-native';
import { partsData } from '../data/partsData';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');
  const [parts] = useState(partsData);
  const [filteredParts, setFilteredParts] = useState(partsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [modelFilter, setModelFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name-asc');
  
  // Listen for theme changes
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });
    
    return () => subscription.remove();
  }, []);
  
  // Apply filters when any filter changes
  useEffect(() => {
    let filtered = parts.filter(part => {
      // Search term filter
      const matchesSearch = part.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           part.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = categoryFilter === 'all' || part.category === categoryFilter;
      
      // Model compatibility filter
      const matchesModel = modelFilter === 'all' || part.compatibleModels.includes(modelFilter);
      
      return matchesSearch && matchesCategory && matchesModel;
    });
    
    // Sorting
    if (sortBy === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }
    
    setFilteredParts(filtered);
  }, [parts, searchTerm, categoryFilter, modelFilter, sortBy]);
  
  const value = {
    isDarkMode,
    parts,
    filteredParts,
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    modelFilter,
    setModelFilter,
    sortBy,
    setSortBy,
  };
  
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};