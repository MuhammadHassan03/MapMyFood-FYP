import React from 'react';
import useAuth from 'Shared/hooks/Auth/useAuth';
import { Button, Text, View } from 'tamagui'
import useNavigate from 'Shared/hooks/useNavigate';

const About = () => {

    const {navigate} = useNavigate();

    const { user } = useAuth();
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            padding: 20
        }}>
            <View style={{ textAlign: 'center', alignItems: 'center' }}>
                <Text fontSize={20} fontWeight={'bold'}>About MapMyFood</Text>
                <Text style={{ textAlign: 'left', width: '50%' }}>
                    MapMyFood is a groundbreaking platform designed to enhance your culinary experiences, whether you're a food enthusiast, a restaurant owner, or a delivery service. Our mission is to connect people with their favorite meals and local dining spots while promoting healthy eating habits and community engagement.
                </Text>
                <Text fontSize={20} fontWeight={'bold'}>Our Vision</Text>
                <Text style={{ textAlign: 'left', width: '50%' }}>
                    At MapMyFood, we believe that food is not just sustenance; it’s a way to bring people together. Our vision is to create a seamless, enjoyable dining experience for everyone by offering a comprehensive digital solution that makes finding, ordering, and enjoying food easier than ever.
                </Text>
                <Text fontSize={20} fontWeight={'bold'}>Join Us</Text>
                <Text style={{ textAlign: 'left', width: '50%' }}>
                    Whether you're looking to explore new culinary delights or simply want to enjoy your favorite dish, MapMyFood is here to help. Join us on this delicious journey and discover the joys of food in your neighborhood.
                </Text>
                {
                    user ? (
                        <Button onPress={()=> navigate('/')}>Dashboard</Button>
                    ) : (
                        <Button onPress={()=> navigate('/')}>Get Started</Button>
                    )
                }
            </View>
        </View>
    )
}

export default About;