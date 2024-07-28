import {useContext, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import {colors} from '../config/theme';
import {ThemeContext} from '../context/ThemeContext';

const RegisterScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <SafeAreaView
      style={{
        backgroundColor: activeColors.primary,
        flex: 1,
        justifyContent: 'center',
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25, marginTop: 50}}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: activeColors.tint,
            marginBottom: 30,
          }}>
          Register
        </Text>

        <InputField
          testID="username-input"
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          value={fullName}
          onChangeText={setFullName}
        />

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          value={password}
          onChangeText={setPassword}
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <CustomButton label={'Register'} onPress={() => {}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: activeColors.tint}}>Already registered? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: activeColors.accent, fontWeight: '700'}}>
              {' '}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
