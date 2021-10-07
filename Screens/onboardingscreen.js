import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                borderRadius: 6/2,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const onboardingscreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("login")}
        onDone={() => navigation.navigate("login")}
        pages={[
            {
              backgroundColor: '#a6e4d0',
              image: <Image
              style={{
                resizeMode: "contain",
                borderWidth: 5,
                height: 200,
                width: 200,
              }}
               source={require('../assets/img/onboarding-img1.png')} />,
              title: 'Connect to the World',
              subtitle: 'A New Way To Connect With The World',
            },
            {
              backgroundColor: '#fdeb93',
              image: <Image style = {styles.im} source={require('../assets/img/onboarding-img2.png')} />,
              title: 'Share Your Favorites',
              subtitle: 'Share Your Thoughts With Similar Kind of People',
            },
            {
              backgroundColor: '#e9bcbe',
              image: <Image style = {styles.im} source={require('../assets/img/onboarding-img3.png')} />,
              title: 'Become The Star',
              subtitle: "Let The Spot Light Capture You",
            },
          ]}
        />
    );
};

export default onboardingscreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
    im: {
        resizeMode: "contain",
        borderWidth: 5,
        height: 200,
        width: 200,
    },
});