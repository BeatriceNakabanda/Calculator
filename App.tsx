/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;


// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  return (
    // <SafeAreaView style={backgroundStyle}>
    //    <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   /> 
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //  <Header /> 
        <View
          style={styles.container}>
            <TextInput />
            {/* <View style={[styles.half1, styles.hal2x]}>
              
            </View>
            <View style={[styles.half2, styles.hal2x]}>

              <View style={[styles.half22, styles.hal2x]}>
                <Text style={styles.text}>1/2</Text>
              </View>
              <View style={[styles.half21, styles.hal2x]}>
                <Text style={styles.text}>2/2</Text>
              </View>

            </View>
            <View style={[styles.half3, styles.hal2x]}>

            </View>
            <View style={[styles.half4, styles.hal2x]}>

            </View> */}
          
        </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    fontSize: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'blue'  
},
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
  half1: {
    backgroundColor: 'white'
  },
  half2: {
    flex: 1,
  },
  half21: {
    backgroundColor: '#BFCFE7',
    justifyContent: 'center',
    alignItems: 'center'
  },
  half22: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  half3: {
    backgroundColor: 'green'
  },
  half4: {
    backgroundColor: 'yellow'
  },
  hal2x: {
    flex: 1,
  }

});

export default App;
