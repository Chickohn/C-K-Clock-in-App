import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const App = () => {
  // State to toggle button text and functionality
  const [isClockedIn, setIsClockedIn] = useState(false);

  // Function to handle button press
  const handlePress = () => {
    // Print current time to console
    console.log((!isClockedIn ? "Clocked In At: " : "Clocked Out At: ") + new Date().toLocaleTimeString());
    // Toggle clock-in state
    setIsClockedIn(!isClockedIn);
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={handlePress}
        title={isClockedIn ? 'Clock-Out' : 'Clock-In'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
