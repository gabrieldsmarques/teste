import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const LabsListScreen = ({ navigation, labs }) => {
  return (
    <View style={styles.container}>

      {/* Header com Logo e Filtros */}
      <View style={styles.header}>
        <Image source={require('../logo.jpg')} style={styles.logo} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButtonActive}>
            <Text style={styles.filterTextActive}>Tudo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Hotel Tecnológico</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>IF Maker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Eletrotécnica</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Lista de Laboratórios */}
      <FlatList
        data={labs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.labContainer}>
            <View>
              <Text style={styles.labName}>{item.name}</Text>
              <Text style={styles.labLocation}>{item.location}</Text>
            </View>
            <MaterialIcons name="date-range" size={24} color="black" />
          </View>
        )}
      />

      {/* Botão Flutuante */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('Agendamento')}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 10, // Espaço no topo da tela
  },
  // Estilo do header com o logo e os filtros
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10, // Espaço entre o logo e os botões de filtro
  },
  filterContainer: {
    flexDirection: 'row',
    flex: 1, // Faz a barra de filtros ocupar o espaço restante ao lado do logo
  },
  filterButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    marginRight: 10,
  },
  filterButtonActive: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#00AA4F', // Botão verde ativo
  },
  filterText: {
    color: '#000',
  },
  filterTextActive: {
    color: '#FFF', // Texto branco no botão ativo
    fontSize: 12,
    fontWeight: 'bold',
  },
  // Estilo da lista de laboratórios
  labContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginVertical: 6,
    marginHorizontal: 10,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  labName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  labLocation: {
    fontSize: 14,
    color: '#666',
  },
  // Botão flutuante
  floatingButton: {
    backgroundColor: '#28A745',
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  plusIcon: {
    fontSize: 24,
    color: '#FFF',
  },
});

export default LabsListScreen;
