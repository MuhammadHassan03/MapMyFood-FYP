// 'use client'
import React from 'react';
import { Image, Text, View, } from "tamagui"
import MapMyFoodLogo from 'Shared/assets/pictures/MapMyFoodLogo.png'
import { HeaderLinks } from 'Shared/constants/hedaerLinks'


const Header = () => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 50,
                paddingRight: 50,
            }}
        >
            <View>
                <Image
                    source={{ uri: MapMyFoodLogo.src, }}
                    style={{ width: 250, height: 100 }}
                />
            </View>
            <View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {
                        HeaderLinks.map((link) => {
                            return (
                                <Text style={{margin: 10}}>{link.title}</Text>
                                
                            )
                        })
                    }
                </View>
            </View>
        </View>
    )
}

export { Header }