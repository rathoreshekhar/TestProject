import {useContext, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import {colors} from '../config/theme';
import {ThemeContext} from '../context/ThemeContext';

const LoginScreen = ({navigation}) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView
      style={{
        backgroundColor: activeColors.primary,
        flex: 1,
        justifyContent: 'center',
      }}>
      <View style={{paddingHorizontal: 25}}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: '500',
            color: activeColors.tint,
            marginBottom: 30,
          }}>
          Login
        </Text>
        <InputField
          selectionColor={activeColors.tint}
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
          value={username}
          onChangeText={setUsername}
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
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
          value={password}
          onChangeText={setPassword}
        />

        <CustomButton
          label={'Login'}
          onPress={() => {
            navigation.navigate('FollowStars');
          }}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text style={{color: activeColors.tint}}>New to the app? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: activeColors.accent, fontWeight: '700'}}>
              {' '}
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
