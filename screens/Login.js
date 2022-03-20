import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Text, View, TouchableOpacity } from 'react-native';
import AuthButton from '../auth/authbutton';
import AuthLayout from '../auth/AuthLayout';
import { TextInput } from '../auth/AuthShard';
import { gql, useMutation } from '@apollo/client';
import { isLoggedInVar, logUserIn } from '../apollo';

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      token
      error
    }
  }
`;

export default function Login({ route: { params } }) {
  // console.log(navigation);
  // console.log(route);
  //
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      password: params?.password,
      username: params?.username,
    },
  });
  const passwordRef = useRef();
  const onCompleted = async (data) => {
    const {
      login: { ok, token },
    } = data;
    if (ok) {
      await logUserIn(token);
    }
  };
  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted,
  });
  const onNextNameRef = (nextOneType) => {
    nextOneType?.current?.focus();
  };
  const onValid = (data) => {
    console.log(data);
    if (!loading) {
      loginMutation({
        variables: {
          ...data,
        },
      });
    }
  };

  useEffect(() => {
    register('username');
    register('password');
  }, [register]);

  return (
    <AuthLayout>
      <TextInput
        value={watch('username')}
        // ref={NickName}
        returnKeyType="next"
        autoCapitalize="none"
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
        placeholder="닉네임"
        onSubmitEditing={() => onNextNameRef(passwordRef)}
        onChangeText={(text) => setValue('username', text)}
      />
      <TextInput
        value={watch('password')}
        ref={passwordRef}
        placeholder="비밀번호"
        secureTextEntry
        lastOne={true}
        returnKeyType="done"
        onSubmitEditing={handleSubmit(onValid)}
        onChangeText={(text) => setValue('password', text)}
        placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
      />
      <AuthButton
        text="로그인"
        disabled={!watch('username') || !watch('password')}
        onPress={handleSubmit(onValid)}
      />
    </AuthLayout>
  );
}
