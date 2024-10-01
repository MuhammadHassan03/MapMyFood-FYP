// 'use client'
import React from 'react';
import { Button, Form, Image, Input, ScrollView, Text, View } from 'tamagui';
import landingPageStyles from './styles/landingPage.style';
import MapMyFood from '../../assets/pictures/MapMyFood.png';

const LandingPage = () => {
    const styles = landingPageStyles;
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                <View style={styles.mainContainerLeftContainer}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>Map Your Favorite Meals, Delivered Fresh to You While You Travel</Text>
                    <View style={{ backgroundColor: 'CaptionText', borderRadius: 10, padding: 10 }}>
                        <Form style={styles.mainContainerForm}>
                            <Input style={{ width: '100%' }} placeholder='Enter Your Current Station' />
                            <Button>Search</Button>
                        </Form>
                    </View>
                </View>
                <View>
                    <Image
                        src={MapMyFood.src}
                        style={{ width: 700, height: 700, borderRadius: 10}} />
                    {/* <Text>Pic Goes Here Will Fix Soon</Text> */}
                </View>


            </View>
        </ScrollView>
    )
}

export default LandingPage;