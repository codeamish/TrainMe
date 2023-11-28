import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import {  TouchableOpacity } from "react-native-gesture-handler";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { fetchExercisesByBodyPart } from "../api/exerciseDB";
import { demoExercises } from "../constants";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExercisesList from "../components/ExercisesList";
import {ScrollView} from 'react-native-virtualized-view'

export default function Exercises() {
  const router = useRouter();
  const item = useLocalSearchParams();

  const [exercises, setExercises] = React.useState(demoExercises);


  useEffect(() => {
    // if (item) {
    //   getExercises(item.name);
    // }
    
  }, [item]);

  const getExercises = async (bodyPart) => {
    let data = await fetchExercisesByBodyPart(bodyPart);
    // console.log('data: ',data);
    setExercises(data);
  };
  return (
    <ScrollView>
      <StatusBar style="light" />
      <ImageBackground
        source={item.image}
        style={{ width: wp(100), height: hp(45) }}
      >
        <TouchableOpacity
            onPress={() => router.back()}
          className="bg-rose-500 mx-4 rounded-full flex justify-center items-center pr-1"
          style={{ height: hp(6), width: hp(6), marginTop: hp(7) }}
        >
          <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
        </TouchableOpacity>
      </ImageBackground>

        {/* exercises here */}

        <View className='mx-4 space-y-3 mt-4'>
            <Text style={{fontSize:hp(3.2)}}
                className='font-semibold text-slate-800'
            >
                {item.name} exercises
            </Text>
            <View className='mb-10'>
                <ExercisesList data={exercises}></ExercisesList>
            </View>
        </View>

    </ScrollView>
  );
}
