import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, TouchableOpacity } from 'react-native';
import AuthButton from '../auth/authbutton';
import AuthLayout from '../auth/AuthLayout';
import { TextInput } from '../auth/AuthShard';

export default function Login({ navigation }) {
  const { register, handleSubmit, setValue } = useForm();
  const passwordRef = useRef();
  const onNextNameRef = (nextOneType) => {
    nextOneType?.current?.focus();
  };
  const onVaild = (data) => {
    console.log(data);
  };

  useEffect(() => {
    register('닉네임');
    register('비밀번호');
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        // ref={NickName}
        returnKeyType="next"
        autoCapitalize="none"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        placeholder="닉네임"
        onSubmitEditing={() => onNextNameRef(passwordRef)}
        onChangeText={(text) => setValue('닉네임', text)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="비밀번호"
        secureTextEntry
        lastOne={true}
        returnKeyType="done"
        onSubmitEditing={handleSubmit(onVaild)}
        onChangeText={(text) => setValue('비밀번호', text)}
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
      />
      <AuthButton
        text="로그인"
        disabled={false}
        onPress={handleSubmit(onVaild)}
      />
    </AuthLayout>
  );
}
