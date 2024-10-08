// 'use client'
import React from 'react';
import { Image, Text, View, } from "tamagui"
import MapMyFoodLogo from 'Shared/assets/pictures/MapMyFoodLogo.png'
import { HeaderLinks } from 'Shared/constants/hedaerLinks'
import useResponsive from 'Shared/hooks/useResponsive';


const Header = () => {

    const {xs, sm ,md, lg } = useResponsive();
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: xs ? 0 : sm ? 0 : 50,
                paddingTop: xs ? 20 : sm ? 50 : 0,
                paddingBottom: xs ? 20 : sm ? 50 : 0,
                paddingRight: xs ? 0 : sm ? 0 : 50,
                backgroundColor: 'whitesmoke',
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                marginBottom: 30
            }}
        >
            <View>
                <Image
                    source={{ uri: MapMyFoodLogo.src, }}
                    style={{ width: xs ? 150 : 250, height:xs ? 50 : 100 }}
                />
            </View>
            <View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                     {
                        HeaderLinks.map((link) => (
                            <Text key={link.title} style={{ margin: 10, fontSize: xs || sm || md ? 16 : 18 }}>
                                {link.title}
                            </Text>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

export { Header }