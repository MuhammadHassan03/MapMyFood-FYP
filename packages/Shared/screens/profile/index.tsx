import React, { useEffect, useState } from 'react';
import { Text, View } from 'tamagui';
import useAuth from 'Shared/hooks/Auth/useAuth';
import UserProfile from 'Shared/screens/profile/UserProfile';
import RestaurantProfile from 'Shared/screens/profile/RestaurantProfile';
import DeliveryBoyProfile from 'Shared/screens/profile/DeliveryBoyProfile';

const Profile = () => {

    const { user, loading } = useAuth();
    const [roleBasedProfile, setRoleBasedProfile] = useState(<UserProfile />);

    useEffect(() => {
        if (user?.role === 'user') {
            setRoleBasedProfile(<UserProfile />);
        }
        if (user?.role === 'restaurant') {
            setRoleBasedProfile(<RestaurantProfile />)
        }
        if (user?.role === 'delivery_boy') {
            setRoleBasedProfile(<DeliveryBoyProfile />)
        }
    }, [user])

    if (loading) return <Text>Loading.....</Text>
    console.log('user', user)
    return (
        <View>
            {roleBasedProfile}
        </View>
    )
};


export default Profile;
