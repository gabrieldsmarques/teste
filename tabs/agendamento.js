import React, { useState } from 'react';
import { View, Picker, StyleSheet, TouchableOpacity, Text } from 'react-native';

const AgendamentoScreen = ({ navigation, addLab }) => {
  const [selectedDay, setSelectedDay] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedLab, setSelectedLab] = useState();
  const [selectedResponsavel, setSelectedResponsavel] = useState();
  const [selectedEstudante, setSelectedEstudante] = useState();

  const handleSubmit = () => {
    const newLab = {
      id: Math.random().toString(),
      name: selectedLab || 'Novo Lab',
      location: selectedResponsavel || 'Novo Local',
    };
    
    addLab(newLab);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedDay}
        onValueChange={(itemValue) => setSelectedDay(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Dia" value="" />
        <Picker.Item label="Dia 1" value="dia1" />
        <Picker.Item label="Dia 2" value="dia2" />
        <Picker.Item label="Dia 3" value="dia3" />
        <Picker.Item label="Dia 4" value="dia4" />
        <Picker.Item label="Dia 5" value="dia5" />
        <Picker.Item label="Dia 6" value="dia6" />
        <Picker.Item label="Dia 7" value="dia7" />
      </Picker>

      <Picker
        selectedValue={selectedTime}
        onValueChange={(itemValue) => setSelectedTime(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Hora" value="" />
        <Picker.Item label="07:00" value="07:00" />
        <Picker.Item label="08:00" value="08:00" />
        <Picker.Item label="09:00" value="09:00" />
        <Picker.Item label="10:00" value="10:00" />
        <Picker.Item label="11:00" value="11:00" />
        <Picker.Item label="13:00" value="13:00" />
        <Picker.Item label="14:00" value="14:00" />
        <Picker.Item label="15:00" value="15:00" />
        <Picker.Item label="16:00" value="16:00" />
      </Picker>

      <Picker
        selectedValue={selectedLab}
        onValueChange={(itemValue) => setSelectedLab(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Laboratório" value="" />
        <Picker.Item label="Lab 1" value="lab1" />
        <Picker.Item label="Lab 2" value="lab2" />
        <Picker.Item label="Lab 3" value="lab3" />
        <Picker.Item label="Lab 4" value="lab4" />
        <Picker.Item label="Lab 5" value="lab5" />
      </Picker>

      <Picker
        selectedValue={selectedResponsavel}
        onValueChange={(itemValue) => setSelectedResponsavel(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Responsável" value="" />
        <Picker.Item label="alex" value="alex" />
        <Picker.Item label="rogers" value="rogers" />
      </Picker>

      <Picker
        selectedValue={selectedEstudante}
        onValueChange={(itemValue) => setSelectedEstudante(itemValue)}
        style={styles.picker}>
        <Picker.Item label="Estudantes" value="" />
        <Picker.Item label="eumesmo" value="estudante1" />
        <Picker.Item label="eumesmo2" value="estudante2" />
        <Picker.Item label="eumesmo3" value="estudante3" />
        <Picker.Item label="eumesmo4" value="estudante4" />
        <Picker.Item label="eumesmo5" value="estudante5" />
        <Picker.Item label="eumesmo6" value="estudante6" />
        <Picker.Item label="eumesmo7" value="estudante7" />
        <Picker.Item label="eumesmo8" value="estudante8" />
      </Picker>

      <TouchableOpacity style={styles.agendarButton} onPress={handleSubmit}>
        <Text style={styles.agendarButtonText}>Agendar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  picker: {
    height: 50,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,  // Aumentar o arredondamento
    marginBottom: 20,
    backgroundColor: '#EFEFEF', // Mudar para um cinza mais claro como na imagem
    paddingLeft: 10,
  },
  agendarButton: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 8,  // Aumentar o arredondamento do botão
    alignItems: 'center',
    position: 'absolute',  // Manter o botão no fim da tela
    bottom: 20,
    left: 20,
    right: 20,
  },
  agendarButtonText: {
    color: '#FFF',
    fontSize: 18,  // Fonte um pouco maior
    fontWeight: 'bold',
  },
});

export default AgendamentoScreen;
