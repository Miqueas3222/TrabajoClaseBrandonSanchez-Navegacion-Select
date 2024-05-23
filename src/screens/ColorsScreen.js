import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';  
import ColorCard from './ColorCard';

const colorsData = [
  {
    title: 'Colores Aqueous',
    data: [
      { name: 'Turquoise', hex: '#1abc9c', image: require('../img/turquesa.jpg') },
      { name: 'Emerald', hex: '#2ecc71', image: require('../img/esmeralda.jpeg') },
      // ... other colors
    ],
  },
  {
    title: 'Natural Colors',
    data: [
      { name: 'Nephritis', hex: '#27ae60', image: require('../img/nephiris.png') },
      { name: 'Belize Hole', hex: '#2980b9', image: require('../img/belize.jpg') },
      // ... other colors
    ],
  },
  {
    title: 'Other Colors',
    data: [
      { name: 'Alizarin', hex: '#e74c3c', image: require('../img/Alizarin.jpg') },
      { name: 'Clouds', hex: '#ecf0f1', image: require('../img/clouds.jpg') },
      // ... other colors
    ],
  },
];

export default function ColorsScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const selectedColors = selectedCategory
    ? colorsData.find(category => category.title === selectedCategory)?.data || []
    : [];

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Seleccione una categoría" value={null} />
        {colorsData.map((category) => (
          <Picker.Item key={category.title} label={category.title} value={category.title} />
        ))}
      </Picker>
      <View style={styles.content}>
        <FlatList
          data={selectedColors}
          keyExtractor={(color, index) => color.name + index}
          renderItem={({ item: color }) => <ColorCard {...color} />}
          numColumns={3}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    marginTop: 150, // Margen superior para separar las tarjetas del selector
  },
  list: {
    paddingBottom: 20,
  },
});
