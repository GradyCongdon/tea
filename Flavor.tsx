import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Flavor(props) {
  const { name, side, setClock } = props;
  const lr = side === 'right' ? styles.right : styles.left;

  return (
    <View style={styles.row}>
      <TouchableOpacity style={lr} onPress={setClock}>
        <Text style={styles.flavor}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  flavor: {
    fontSize: 96,
    lineHeight: 91,
    fontWeight: '600',
    fontFamily: 'System',
  },
  left: {},
  right: {
    marginLeft: 'auto',
  },
});
