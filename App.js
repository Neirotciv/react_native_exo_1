import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import GoalsList from './components/GoalsList';

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d'altitude",
  "Acheter mon premier appartement",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon"
];

export default function App() {
  const [goal, setGoal] = useState('');
  const [goalsList, setGoalsList] = useState(sampleGoals);

  const handleInputChange = (text) => {
    setGoal(text);
  };

  const handleAddGoal = () => {
    if (!goal) return;
    setGoalsList([...goalsList, goal]);
    setGoal('');
  };

  const onDeleteGoal = (index) => {
    const newGoalsList = goalsList.filter((goal, i) => i !== index);
    setGoalsList(newGoalsList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste d'objectifs</Text>
      <GoalsList goals={goalsList} onDeleteGoal={onDeleteGoal} />
      <View style={styles.horizontalWrapper}>
        <TextInput
          placeholder='Ajouter un objectif'
          onChangeText={text => handleInputChange(text)}
          value={goal}
        />
        <Button
          title='Add'
          onPress={handleAddGoal}
        />
      </View>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 10,
  },
  horizontalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    width: '80%',
  },
});
