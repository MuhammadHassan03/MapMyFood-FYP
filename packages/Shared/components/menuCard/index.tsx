import React from "react";
import { Avatar, Button, Text, View } from "tamagui";

interface MenuData {
    menudata: {
    item: {
      isPublic: boolean;
      menuName: string;
    };
  };
}

const MenuCard: React.FC<{ menudata: MenuData }> = ({ menudata }) => {
  const { isPublic, menuName } = menudata?.menudata?.item;

  // TODO Add Live Status API END POINT ALSO
  const handleLiveStatus = () => {
    
  };

  return (
    <View style={{ borderWidth: 1, borderRadius: 10 }}>
      <View width={"100%"} alignItems="center">
        <Avatar borderRadius={10} size={'$15'}>
          <Avatar.Image src="http://picsum.photos/200/300" />
        </Avatar>
        <Text textAlign="center">Test Image</Text>
      </View>
      <View style={{ paddingTop: 20, paddingBottom: 20, paddingLeft: 10, paddingRight: 10 }}>
        <Text fontSize={18} fontWeight={"bold"} textAlign="center">{menuName}</Text>
        <Text textAlign="center">Is Public: {isPublic ? "Yes" : "No"}</Text>
        <Button onPress={handleLiveStatus}>{isPublic ? "Make Un Public" : "Make Public"}</Button>
      </View>
    </View>
  );
};

export default MenuCard;
