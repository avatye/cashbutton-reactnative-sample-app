/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  NativeModules
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import haru_image from './assets/images/image_haru.png';
import inquire_image from './assets/images/avatye_ic_cashbutton_blue.png';

const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#8c9eff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          backgroundColor: '#ffffff',
          alignItems: 'center',
          justifyContent: 'center',
          height: 56
        }}>
        <Text style={[styles.highlight, { fontSize: 20, color: '#8c9eff' }]}>{'React-Native'}</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 12
        }}>
        <Image source={haru_image} />
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 56
          }}>
          <Text style={[{ fontSize: 20, color: '#ffffff' }]}>{'캐시버튼 샘플앱_리엑트 네이티브'}</Text>
        </View>
        <View
          style={{
            height: 0.5,
            width: Dimensions.get('window').width - 48,
            backgroundColor: '#dfe4e9',
            alignItems: 'center',
            justifyContent: 'center',
          }} />
      </View>
      <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: 40,
            marginBottom: 5,
            alignItems: 'center',
            marginLeft: 24
          }} onPress={ () => {NativeModules.AndroidModule.actionSuggestion()}}>
            <Image
              style={{
                height: 40,
                width: 40,
                resizeMode: 'contain',
                marginRight: 5,
              }} source={inquire_image} />
            <Text style={[{ fontSize: 16, color: '#ffffff' }]}>{'캐시버튼 문의'}</Text>
        </TouchableOpacity>
        <Text style={[{ fontSize: 12, color: '#B6BAF6', marginLeft: 24 }]}>{'캐시버튼과 관련된 문의를 받기 위한 메뉴 노출 가이드'}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
