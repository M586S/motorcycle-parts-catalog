// src/components/PartIcon.js
import React from 'react';
import Svg, { Rect, Circle, Path, Line } from 'react-native-svg';

const PartIcon = ({ part, size = 100 }) => {
  const categoryColors = {
    engine: "#F87171",
    electrical: "#60A5FA",
    brakes: "#34D399",
    suspension: "#A78BFA",
    tires: "#FBBF24",
    drive: "#EC4899",
    controls: "#8B5CF6",
    accessories: "#F59E0B",
    bodywork: "#10B981"
  };
  
  const color = categoryColors[part.category] || "#6B7280";
  
  switch (part.category) {
    case 'engine':
      return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Rect x="25" y="25" width="50" height="50" fill={color} rx="5" />
          <Circle cx="50" cy="50" r="15" fill="white" stroke={color} strokeWidth="2" />
          <Circle cx="50" cy="50" r="5" fill={color} />
        </Svg>
      );
    case 'electrical':
      return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Path d="M30,65 L70,35 M50,30 L50,70 M40,40 L60,60" stroke={color} strokeWidth="6" strokeLinecap="round" />
          <Circle cx="50" cy="50" r="25" fill="none" stroke={color} strokeWidth="3" />
        </Svg>
      );
    case 'brakes':
      return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="30" fill={color} />
          <Circle cx="50" cy="50" r="15" fill="white" />
          <Path d="M30,50 L70,50 M50,30 L50,70" stroke="white" strokeWidth="4" />
        </Svg>
      );
    case 'suspension':
      return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Rect x="35" y="20" width="30" height="60" fill={color} rx="5" />
          <Rect x="42" y="25" width="16" height="50" fill="white" rx="3" />
          <Line x1="50" y1="20" x2="50" y2="80" stroke="white" strokeWidth="2" />
        </Svg>
      );
    case 'tires':
      return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="30" fill={color} />
          <Circle cx="50" cy="50" r="15" fill="white" />
          <Circle cx="50" cy="50" r="5" fill={color} />
          <Path d="M50,20 L50,30 M50,70 L50,80 M20,50 L30,50 M70,50 L80,50" stroke={color} strokeWidth="4" strokeLinecap="round" />
        </Svg>
      );
    case 'drive':
      return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Circle cx="30" cy="30" r="15" fill={color} />
          <Circle cx="70" cy="70" r="15" fill={color} />
          <Path d="M30,30 L70,70" stroke={color} strokeWidth="6" strokeDasharray="5,5" />
          <Circle cx="30" cy="30" r="5" fill="white" />
          <Circle cx="70" cy="70" r="5" fill="white" />
        </Svg>
      );
    case 'controls':
      return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Rect x="20" y="40" width="60" height="10" fill={color} rx="3" />
          <Rect x="40" y="25" width="10" height="30" fill={color} rx="2" />
          <Circle cx="45" cy="25" r="8" fill={color} />
          <Path d="M60,45 L80,45" stroke={color} strokeWidth="4" strokeLinecap="round" />
        </Svg>
      );
    case 'accessories':
      return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Rect x="25" y="25" width="50" height="50" fill={color} rx="8" />
          <Circle cx="50" cy="50" r="12" fill="white" />
          <Path d="M40,40 L60,60 M40,60 L60,40" stroke="white" strokeWidth="4" strokeLinecap="round" />
        </Svg>
      );
    case 'bodywork':
      return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Path d="M20,65 Q50,20 80,65" fill={color} />
          <Rect x="35" y="65" width="30" height="15" fill={color} rx="3" />
          <Path d="M40,50 Q50,35 60,50" fill="none" stroke="white" strokeWidth="2" />
          <Circle cx="50" cy="75" r="4" fill="white" />
        </Svg>
      );
    default:
      return (
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="30" fill={color} />
        </Svg>
      );
  }
};

export default PartIcon;