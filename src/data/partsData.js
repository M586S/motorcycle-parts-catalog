// src/data/partsData.js
export const partsData = [
    {
      id: 1,
      name: "High-Performance Air Filter",
      category: "engine",
      compatibleModels: ["sport", "touring"],
      price: 49.99,
      description: "A high-flow air filter that improves engine performance and throttle response. Washable and reusable.",
      color: "#F87171" // red
    },
    {
      id: 2,
      name: "LED Headlight Conversion Kit",
      category: "electrical",
      compatibleModels: ["sport", "cruiser", "touring"],
      price: 129.99,
      description: "Upgrade your motorcycle's visibility with this bright LED headlight conversion kit. Easy plug-and-play installation.",
      color: "#60A5FA" // blue
    },
    {
      id: 3,
      name: "Premium Brake Pads",
      category: "brakes",
      compatibleModels: ["sport", "cruiser", "touring", "offroad"],
      price: 34.99,
      description: "High-quality brake pads that provide excellent stopping power and longer life. Low dust formula.",
      color: "#34D399" // green
    },
    // Include all 28 parts from our previous catalog
    // ...
    {
      id: 28,
      name: "Custom Seat Cover",
      category: "bodywork",
      compatibleModels: ["sport", "cruiser", "touring", "offroad"],
      price: 129.99,
      description: "Gel-padded replacement seat cover for improved comfort on long rides. Anti-slip material with weather resistance.",
      color: "#10B981" // emerald
    }
  ];
  
  export const categories = [
    { id: 'all', name: 'All', color: '#6B7280' },
    { id: 'engine', name: 'Engine', color: '#F87171' },
    { id: 'electrical', name: 'Electrical', color: '#60A5FA' },
    { id: 'brakes', name: 'Brakes', color: '#34D399' },
    { id: 'suspension', name: 'Suspension', color: '#A78BFA' },
    { id: 'tires', name: 'Tires', color: '#FBBF24' },
    { id: 'drive', name: 'Drive', color: '#EC4899' },
    { id: 'controls', name: 'Controls', color: '#8B5CF6' },
    { id: 'accessories', name: 'Accessories', color: '#F59E0B' },
    { id: 'bodywork', name: 'Bodywork', color: '#10B981' }
  ];
  
  export const modelOptions = [
    { label: 'All Models', value: 'all' },
    { label: 'Sport Bikes', value: 'sport' },
    { label: 'Cruisers', value: 'cruiser' },
    { label: 'Touring', value: 'touring' },
    { label: 'Off-Road', value: 'offroad' }
  ];
  
  export const sortOptions = [
    { label: 'Name (A-Z)', value: 'name-asc' },
    { label: 'Name (Z-A)', value: 'name-desc' },
    { label: 'Price (Low-High)', value: 'price-asc' },
    { label: 'Price (High-Low)', value: 'price-desc' }
  ];