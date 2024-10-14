// 'use client'
import React from 'react';
import { Image, Text, View, } from "tamagui"
import MapMyFoodLogo from 'Shared/assets/pictures/MapMyFoodLogo.png'
import useResponsive from 'Shared/hooks/useResponsive';



const Fottor = () => {
    const {xs, sm ,md, lg } = useResponsive();

    return (
        <View
            style={{
                width: '100%',
                flexDirection: xs || sm || md ? 'column' :'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingLeft: 50,
                paddingRight: 50,
                paddingTop: xs || sm || md ? 20 : 50,
                paddingBottom: xs || sm || md ? 20 : 50,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: 'whitesmoke',
                
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
                    {/* {
                        HeaderLinks.map((link) => {
                            return (
                                <Text style={{margin: 10}}>{link.title}</Text>
                                
                            )
                        })
                    } */}
                    <Text style={{fontSize: 16}}>2024- Copyright by MapMyFood</Text>
                </View>
            </View>
        </View>
    )
}

export { Fottor }