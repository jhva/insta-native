import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import AuthButton from '../auth/authbutton';
import AuthLayout from '../auth/AuthLayout';
import { TextInput } from '../auth/AuthShard';
import { gql, useMutation } from '@apollo/client';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;
const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`;
export default function CreateAccount({ navigation }) {
  const { register, handleSubmit, setValue, getValues } = useForm();
  const [createAccountMutation, { loading }] = useMutation(
    CREATE_ACCOUNT_MUTATION,
    { onCompleted }
  );
  const onCompleted = (data) => {
    console.log(data);
    const {
      createAccount: { ok },
    } = data;
    const { username, password } = getValues();
    if (ok) {
      navigation.navigate('Login', {
        username,
        password,
      });
    }
  };

  const lastNameRef = useRef();
  const NickName = useRef();
  const emailNameRef = useRef();
  const passwordNameRef = useRef();

  const onNextNameRef = (nextOneType) => {
    nextOneType?.current?.focus();
  };
  const onDone = () => {
    alert('done');
  };
  const onVaild = (data) => {
    if (!loading) {
      createAccountMutation({
        variables: { ...data },
      });
    }
  };
  useEffect(() => {
    register('firstName', { require: true });
    register('lastName', { require: true });
    register('username', { require: true });
    register('email', { require: true });
    register('password', { require: true });
  }, [register]);
  return (
    <AuthLayout>
      {/* input 에 맞게 키보드가 맞춰지는 거  */}
      <TextInput
        returnKeyType="next"
        placeholder="이름"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        onSubmitEditing={() => onNextNameRef(lastNameRef)}
        onChangeText={(text) => setValue('firstName', text)}
      />

      <TextInput
        ref={lastNameRef}
        returnKeyType="next"
        onSubmitEditing={() => onNextNameRef(NickName)}
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        onChangeText={(text) => setValue('lastName', text)}
        placeholder="성"
      />
      <TextInput
        onChangeText={(text) => setValue('username', text)}
        autoCapitalize={'none'}
        ref={NickName}
        returnKeyType="next"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        placeholder="닉네임"
        onSubmitEditing={() => onNextNameRef(emailNameRef)}
      />
      <TextInput
        onChangeText={(text) => setValue('email', text)}
        ref={emailNameRef}
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        placeholder="이메일"
        keyboardType="email-address"
        onSubmitEditing={() => onNextNameRef(passwordNameRef)}
        returnKeyType="next"
      />
      <TextInput
        ref={passwordNameRef}
        placeholder="비밀번호"
        onChangeText={(text) => setValue('password', text)}
        secureTextEntry
        lastOne={true}
        returnKeyType="done"
        onPress={handleSubmit(onVaild)}
        onSubmitEditing={handleSubmit(onVaild)}
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
      />
      <AuthButton
        // loading
        text="회원가입"
        disabled={false}
        onPress={handleSubmit(onVaild)}
      />
    </AuthLayout>
  );
}
