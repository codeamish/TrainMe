import { View, Text, StatusBar,Image, TouchableOpacity } from "react-native";

import React from "react";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
export default function Index(){
    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style='light'/>
            <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')}/>
            <LinearGradient
                colors={['transparent', '#18181b']}
                style={{
                    width: wp(100),
                    height: hp(70),
                }}
                start={{x:0.5 , y: 0}}
                end={{x: 0.5, y: 0.8}}
                className="flex justify-end pd-12 space-y-8"
            >
                <View className="flex items-center">
                    <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">
                        Best<Text className="text-rose-500"> Workouts</Text>
                    </Text>
                    <Text style={{fontSize:hp(5)}} className="text-white font-bold tracking-wide">
                        For you
                    </Text>
                </View>

                <View className="justify-center items-center">
                    <TouchableOpacity
                        style={{height:hp(7),width:wp(50),backgroundColor:'#FF3366',borderRadius:hp(1),justifyContent:'center',alignItems:'center'}}
                    >
                        <Text style={{fontSize:hp(3)}} className="text-white font-bold tracking-widest">
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>

    )
}