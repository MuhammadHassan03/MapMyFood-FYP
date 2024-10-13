import React, { useEffect, useState } from 'react';
import { Text, View } from 'tamagui';
import useAuth from 'Shared/hooks/Auth/useAuth';
import UserDashboard from 'Shared/screens/dashboard/UserDashboard';
import RestaurantDashboard from 'Shared/screens/dashboard/RestaurantDashboard';
import DeliveryBoyDashboard from 'Shared/screens/dashboard/DeliveryBoyDashboard';

const Dashboard = () => {

    const { user } = useAuth();
    const [roleBasedDashboard, setRoleBasedDashboard] = useState(<UserDashboard/>);

    useEffect(() => {
        if(user?.role === 'user'){
            setRoleBasedDashboard(<UserDashboard/>);
        }
        else if(user?.role === 'restaurant'){
            setRoleBasedDashboard(<RestaurantDashboard/>)
        }
        else if(user?.role === 'delivery_boy'){
            setRoleBasedDashboard(<DeliveryBoyDashboard/>)
        }
    }, [user])
    console.log('user', user)
    return (
        <View>
            {roleBasedDashboard}
        </View>
    )
};


export default Dashboard;
