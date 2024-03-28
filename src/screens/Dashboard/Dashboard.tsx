import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useBearStore} from '../../../stores/BearStore';

const Dashboard = () => {
  const bear = useBearStore(state => state.bears);
  const increasePopulation = useBearStore(state => state.increatePopulation);

  return (
    <SafeAreaView>
      <Text
        style={{
          color: 'white',
        }}>
        `There are {bear} bears in Zustandoooo.`
      </Text>

      <TouchableOpacity
        style={{
          marginVertical: 10,
        }}
        onPress={() => {
          increasePopulation(1);
        }}>
        <Text
          style={{
            color: 'white',
          }}>
          Increase Population
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
