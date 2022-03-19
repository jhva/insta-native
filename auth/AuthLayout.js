import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: black;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  padding: 0px 40px;
`;
const Logo = styled.Image`
  max-width: 50%;
  margin: 0 auto;
  height: 100px;
  width: 100%;
  margin-bottom: 20px;
`;

export default function AuthLayout({ children }) {
  const missKeyboard = () => {
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={missKeyboard}
      disabled={Platform.OS === 'web'}
    >
      <Container>
        <KeyboardAvoidingView
          style={{
            width: '100%',
          }}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 50 : 0}
          behavior="position"
        >
          <Logo
            resizeMode="contain"
            source={require('../assets/srcImg/logo.png')}
          />
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
