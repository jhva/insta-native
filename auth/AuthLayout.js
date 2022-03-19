import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

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
  height: 100px;
  width: 100%;
  margin-bottom: 20px;
`;

export default function AuthLayout({ children }) {
  return (
    <Container>
      <Logo
        resizeMode="contain"
        source={require('../assets/srcImg/logo.png')}
      />
      {children}
    </Container>
  );
}
