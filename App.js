import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const LabCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.labTitle}>Nome do Lab</Text>
        <Text style={styles.labSubtitle}>Hotel Tecnológico</Text>
      </View>
      <MaterialIcons name="date-range" size={24} color="black" />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./logo.jpg')} style={styles.logo} />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.tabContainer}>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Tudo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Hotel Tecnológico</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>IF Maker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabButton}>
            <Text style={styles.tabText}>Eletrotécnica</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <ScrollView style={styles.content}>
        <LabCard />
        <LabCard />
        <LabCard />
        <LabCard />
        <LabCard />
      </ScrollView>

      <TouchableOpacity style={styles.fabButton}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  tabContainer: {
    flexDirection: 'row',
  },
  tabButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    marginRight: 10,
  },
  tabText: {
    color: '#000',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'column',
  },
  labTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  labSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  fabButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#32CD32',
    borderRadius: 30,
    padding: 15,
    elevation: 5,
  },
});

export default App;
