import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import AuthButton from '../auth/authbutton';
import AuthLayout from '../auth/AuthLayout';
import { TextInput } from '../auth/AuthShard';

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

export default function CreateAccount() {
  const { register, handleSubmit, setValue } = useForm();

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
    console.log(data);
  };
  useEffect(() => {
    register('이름');
    register('성');
    register('닉네임');
    register('이메일');
    register('비밀번호');
  }, [register]);
  return (
    <AuthLayout>
      {/* input 에 맞게 키보드가 맞춰지는 거  */}
      <TextInput
        returnKeyType="next"
        placeholder="이름"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        onSubmitEditing={() => onNextNameRef(lastNameRef)}
        onChangeText={(text) => setValue('이름', text)}
      />

      <TextInput
        ref={lastNameRef}
        returnKeyType="next"
        onSubmitEditing={() => onNextNameRef(NickName)}
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        onChangeText={(text) => setValue('성', text)}
        placeholder="성"
      />
      <TextInput
        onChangeText={(text) => setValue('닉네임', text)}
        autoCapitalize="none"
        ref={NickName}
        returnKeyType="next"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        placeholder="닉네임"
        onSubmitEditing={() => onNextNameRef(emailNameRef)}
      />
      <TextInput
        onChangeText={(text) => setValue('이메일', text)}
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
        onChangeText={(text) => setValue('비밀번호', text)}
        secureTextEntry
        lastOne={true}
        returnKeyType="done"
        onPress={handleSubmit(onVaild)}
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
      />
      <AuthButton
        text="회원가입"
        disabled={false}
        onPress={handleSubmit(onVaild)}
      />
    </AuthLayout>
  );
}
