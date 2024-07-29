import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  Modal,
  Button
} from "react-native";
import React, { useState } from "react";
import Goal from "./Goal";

export default GoalsList = ({ goals, onDeleteGoal }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGoalIndex, setSelectedGoalIndex] = useState(null);

  const handleDeleteGoal = () => {
    if (selectedGoalIndex !== null) {
      onDeleteGoal(selectedGoalIndex);
      setModalVisible(false);
      setSelectedGoalIndex(null);
    }
  };

  const showModal = (index) => {
    setSelectedGoalIndex(index);
    setModalVisible(true);
  };

  return (
    <View style={styles.goalList}>
      <ScrollView style={styles.scrollView}>
        {goals &&
          goals.map((goal, index) => (
            <Goal key={index} text={goal} onDelete={() => showModal(index)} />
          ))}
      </ScrollView>

      <Modal
        visible={modalVisible}
        transparent={false}
        animationType="slide"
        onRequestClose={!modalVisible}
      >
        <View style={styles.centeredView}>
          <Text>Voulez vous supprimer cet objectif ?</Text>
          <View style={styles.horizontalWrapper}>
            <Button title="Annuler" onPress={() => setModalVisible(false)} />
            <Button title="Supprimer" onPress={handleDeleteGoal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  goalList: {
    flex: 1,
    marginTop: 40,
  },
  scrollView: {
    height: windowHeight * 0.7,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  horizontalWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
