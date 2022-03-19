import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Welcome({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Create Account')}>
        <View>
          <Text>회원가입</Text>
        </View>
      </TouchableOpacity>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View>
          <Text>로그인</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
