import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";
import Anticons from "react-native-vector-icons/AntDesign";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function exerciseDetails() {
  const [modelisVisible, setModelisVisible] = React.useState(true);
  const item = useLocalSearchParams();
  const router = useRouter();

  // console.log("got item : ", item);

  return (
    <Modal visible={modelisVisible} animationType="slide">
      <View className="flex flex-1">
        <View className="shadow-md bg-neutral-300 rounded-b-[38px]">
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            style={{ width: wp(100), height: wp(100) }}
          ></Image>
        </View>
        <TouchableOpacity
          onPress={() => router.back()}
          className="mx-2 absolute rounded-full mt-2 right-0"
        >
          <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
        </TouchableOpacity>

        {/* Details */}

        <ScrollView
          className="mx-4 space-y-2 mt-3"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60 }}
        >
          <Animated.Text
            entering={FadeInDown.duration(300).springify()}
            style={{ fontSize: hp(3.5) }}
            className="font-semibold text-neutral-800 tracking-wide"
          >
            {item.name}
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.duration(300).delay(100).springify()}
            style={{ fontSize: hp(2) }}
            className=" text-neutral-700 tracking-wide"
          >
            Equipment{" "}
            <Text className="font-bold text-neutral-800">
              {item?.equipment}
            </Text>
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.duration(300).delay(200).springify()}
            style={{ fontSize: hp(2) }}
            className=" text-neutral-700 tracking-wide"
          >
            Secondary Muscles{" "}
            <Text className="font-bold text-neutral-800">
              {item?.secondaryMuscles}
            </Text>
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.duration(300).delay(300).springify()}
            style={{ fontSize: hp(2) }}
            className=" text-neutral-700 tracking-wide"
          >
            Target{" "}
            <Text className="font-bold text-neutral-800">{item?.target}</Text>
          </Animated.Text>

          <Animated.Text
            entering={FadeInDown.duration(300).delay(400).springify()}
            style={{ fontSize: hp(3) }}
            className="font-semibold text-neutral-800 tracking-wide"
          >
            Instructions
          </Animated.Text>

          {item.instructions?.split(",").map((instruction, index) => {
            return (
              <Animated.Text
                entering={FadeInDown.duration(300).delay((index+6)*100).springify()}
                key={instruction}
                style={{ fontSize: hp(1.7) }}
                className="text-neutral-800"
              >
                {instruction}
              </Animated.Text>
            );
          })}
        </ScrollView>
      </View>
    </Modal>
  );
}
