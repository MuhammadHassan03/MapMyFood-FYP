// 'use client'
import React from 'react';
import { Button, Form, Image, Input, ScrollView, Text, View } from 'tamagui';
import { landingPageStyles } from './styles/landingPage.style';
import MapMyFood from '../../assets/pictures/MapMyFood.png';
import FamilyMeal from 'Shared/assets/pictures/MealFood.png'
import { Cities } from 'Shared/constants/cities'
import { FAQS } from 'Shared/constants/faqs'
import useResponsive from 'Shared/hooks/useResponsive'

const LandingPage = () => {

    const { xs, sm, md } = useResponsive();

    const styles = landingPageStyles;
    return (
        <ScrollView>
            <View style={{
                flexDirection: xs || sm || md ? 'column' as 'column' : 'row' as 'row',
                alignItems: 'center' as 'center',
                justifyContent: 'space-evenly' as 'space-evenly',
                // flexWrap: 'wrap',
            }}>
                
                <View style={{
                    flexDirection: 'column' as 'column',
                    gap: 30,
                    alignItems: sm || md || md ? 'center' : 'normal',
                    // justifyItems: sm || md || xs ? 'center' : 'normal',
                    width: xs || sm || md ? '90%' : '30%'
                }}>
                    <Text style={{ fontSize: xs || sm || md ? 20 : 25, fontWeight: "bold", width: '80%' }}>Map Your Favorite Meals, Delivered Fresh to You While You Travel</Text>
                    <Form style={{
                        flexDirection: 'row' as 'row',
                        gap: 10,
                    }}>
                        <Input style={{ width: '100%', color: 'black', fontSize: 16 }} placeholder='Enter Your Current Station' />
                        <Button style={{ fontSize: 16 }}>Search</Button>
                    </Form>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: xs || sm || md ? 40 : 0 }}>
                    <Image
                        src={MapMyFood.src}
                        style={{ width: xs ? 350 : sm ? 600 : md ? 700 : 700, height: xs ? 350 : sm ? 600 : md ? 700 : 700, borderRadius: 10 }} />
                </View>
            </View>
            <View style={{ marginTop: 100, marginBottom: 100 }}>
                <Text
                    style={{
                        width: xs || sm || md ? '90%' : '40%',
                        fontSize: xs || sm || md ? 20 : 30,
                        fontWeight: 'bold',
                        paddingLeft: xs || sm || md ? 10 : 150,
                    }}
                >
                    You Order Food, we handle the rest
                </Text>
                <Image src={FamilyMeal.src} width={'100%'} height={xs || sm || md ? 300 : 500}></Image>

                <View
                    style={{
                        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
                        padding: 10,
                        backgroundColor: 'white',
                        width: xs ? '80%' : sm ? '50%' : md ? '50%' : '30%',
                        position: 'absolute',
                        top: xs ? 180 : sm ? 180 : md ? 200 : 440,
                        left: xs || sm || md ? 0 : 130,
                        marginRight: xs || sm || md ? 0 : 'auto', // Remove right and use margin for responsiveness
                        marginLeft: xs || sm || md ? 0 : 'auto', // Center with auto margins
                        borderRadius: 10,
                        borderWidth: 1,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'column',
                            alignItems: 'left',
                            justifyContent: 'center',
                            padding: 10,
                        }}
                    >
                        <Text style={{ textAlign: 'left', fontSize: xs || sm || md ? 16 : 18 }}>
                            Would you like to connect with thousands of travelers eager to enjoy your delicious meals while on the go? We’d love to help! It’s easy: we’ll showcase your menu and product listings online, assist you in processing orders, and ensure prompt delivery to hungry travelers – in no time! Ready to join us? Let’s begin our partnership today!
                        </Text>
                        <Button
                            style={{
                                color: 'white',
                                backgroundColor: 'black',
                                width: xs ? '40%' : sm ? '40%' : md ? '30%' : '25%',
                                marginTop: 10,
                                marginBottom: 10,
                            }}
                        >
                            Get Started
                        </Button>
                    </View>
                </View>
            </View>


            <View style={{ marginTop: 100, marginBottom: xs || sm || md ? 0 :  100 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'start', marginLeft: xs || sm || md ? 10 : 130, textAlign: xs || sm || md ? 'center' : undefined }}>
                    <Text style={{ fontSize: 20 }}>We deliver on these and more Railway Stations</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: 50, padding: 10 }}>
                    {
                        Cities.map((city) => {
                            return (
                                <View style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px', borderRadius: 10, borderWidth: 1, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={{ uri: city.image, width: 350, height: 320 }} style={{ borderRadius: 10 }} />
                                    <Text style={{ fontSize: 18, padding: 10, position: 'absolute', bottom: 10, left: 10, backgroundColor: 'white', borderRadius: 10, }}>{city.city}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>

            <View style={{ marginTop: 100, marginBottom: 100 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        What is MapMyFood?
                    </Text>
                    <Text style={{ width: xs || sm ? '90%' : '40%', fontSize: 18, fontWeight: 'normal' }}>
                        MapMyFood is a web app designed specifically for train travelers in Pakistan, allowing them to order food from local restaurants at upcoming train stations. It ensures that you get fresh and healthy meals delivered to you before your train arrives at the station.
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        How does MapMyFood work?
                    </Text>
                    {
                        FAQS.steps.map((step) => {
                            return (
                                <Text style={{ width: xs || sm ? '90%' : '40%', fontSize: 18, fontWeight: 'normal' }}>{step.step} {step.description}</Text>
                            )
                        })
                    }
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        Frequently Asked Questions
                    </Text>
                    <View style={{ width: xs || sm ? '90%' : '40%' }}>
                        {
                            FAQS.faqs.map((faq, key) => {
                                return (
                                    <View key={key}>
                                        <Text style={{ fontSize: 20, fontWeight: 'normal' }}>{key + 1}. {faq.question}</Text>
                                        <Text style={{ fontSize: 16, fontWeight: 'normal' }}>{faq.answer}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default LandingPage;