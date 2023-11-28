import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import {useRouter} from 'expo-router';

export default function BodyParts() {
  const router = useRouter();

  return (
    <View className="mx-4">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-700"
      >
        BodyParts
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item, index }) => (
          <BodyPartCard index={index} item={item} router={router}/>
        )}
      ></FlatList>
    </View>
  );
}

const BodyPartCard = ({ item, index , router}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => router.push({pathname:"/exercises", params: item})}
        style={{ width: wp(44), height: wp(52) }}
        className="flex justify-end p-4 mb-4"
      >
        <Image
          source={item.image}
          resizeMode="cover"
          style={{ width: wp(44), height: wp(52) }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute rounded-b-[35px] bottom-0"
        />
        <Text
          style={{ fontSize: hp(2.5) }}
          className="text-white font-semibold text-center tracking-wide"
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
