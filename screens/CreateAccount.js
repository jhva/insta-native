import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import AuthButton from '../auth/authbutton';
import AuthLayout from '../auth/AuthLayout';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export default function CreateAccount() {
  return (
    <AuthLayout>
      <TextInput
        returnKeyType="next"
        placeholder="이름"
        placeholderTextColor="gray"
        style={{ backgroundColor: 'white', width: '100%' }}
      />
      <TextInput
        returnKeyType="next"
        placeholder="성"
        placeholderTextColor="gray"
        style={{ backgroundColor: 'white', width: '100%' }}
      />
      <TextInput
        placeholder="이메일"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        style={{ backgroundColor: 'white', width: '100%' }}
      />
      <TextInput
        placeholder="비밀번호"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
        style={{ backgroundColor: 'white', width: '100%' }}
      />
      <AuthButton text="회원가입" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}
