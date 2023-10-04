import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function Chuleta() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setInput(evalResult.toString());
        setResult('');
      } catch (error) {
        setInput('');
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === ',') {
      setInput((prevInput) => (prevInput.includes('.') ? prevInput : prevInput + value));
    } else if (value === 'D') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <View style={{ justifyContent: 'center', alignSelf: 'center', marginVertical: 0 }}>
      <ScrollView>
        <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Calculadora</Text>

        <View style={{ marginTop: 5 }}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              height: 80,
              width: 340,
              borderRadius: 4,
              borderWidth: 1,
            }}>
            <Text style={{ fontSize: 50, textAlign: 'right', flex: 1 }}>{input || result}</Text>
          </View>
          {/* Buttons */}
          {[
            ['7', '8', '9', '+'],
            ['4', '5', '6', '-'],
            ['1', '2', '3', '*'],
            ['0', ',', '=', '/'],
            ['D', 'C'],
          ].map((row, rowIndex) => (
            <View key={rowIndex} style={{ flexDirection: 'row' }}>
              {row.map((value) => (
                <View key={value} style={{ padding: 3 }}>
                  <TouchableOpacity
                    onPress={() => handleButtonClick(value)}
                    style={{
                      borderRadius: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlignVertical: 'center',
                      width: 80,
                      height: 80,
                      backgroundColor:
                        value === '=' ? 'green' : value === 'D' ? 'red' : 'blue',
                    }}>
                    {value === 'D' ? (
                      <Text style={{ fontSize: 24, color: 'white' }}>←</Text>
                    ) : (
                      <Text>{value}</Text>
                    )}
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
