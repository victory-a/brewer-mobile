import React from 'react';
import { View, Text, Button } from 'react-native';

export function FallbackComponent(props: { resetError: () => void; error: Error }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>An error occurred. Please try again later.</Text>
      <Button
        title="Reload"
        onPress={() => {
          props.resetError();
        }}
      />
    </View>
  );
}
