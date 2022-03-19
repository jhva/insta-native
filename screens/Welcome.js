import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import AuthButton from '../auth/authbutton';
import AuthLayout from '../auth/AuthLayout';
import { colors } from '../color';

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
`;

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
`;

export default function Welcome({ navigation }) {
  const goToCreateAccount = () => navigation.navigate('Create Account');
  const goToCreateLogin = () => navigation.navigate('Login');
  return (
    <AuthLayout>
      <AuthButton
        text="회원가입"
        disabled={false}
        onPress={goToCreateAccount}
      />
      <TouchableOpacity>
        <LoginLink onPress={goToCreateLogin}>로그인</LoginLink>
      </TouchableOpacity>
    </AuthLayout>
  );
}
{
  /* <TouchableOpacity onPress={() => navigation.navigate('Create Account')}>
        <View>
          <Text>회원가입</Text>
        </View>
      </TouchableOpacity>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View>
          <Text>로그인</Text>
        </View>
      </TouchableOpacity>  */
}
