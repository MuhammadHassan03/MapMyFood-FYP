import React, { useEffect, useState } from "react"
import { AlertDialog, Button, ScrollView, Spinner, Text, View } from "tamagui"
import useMenu from "./hooks/useMenu"
import { FlatList, } from 'react-native';
import MenuCard from 'Shared/components/menuCard';
import { Form } from 'Shared/components/AlertDialog';

const RestaurantDashboard = () => {
    const [order, setOrder] = useState(<Text>In Development</Text>)

    const { menusData, loading, error, refetch } = useMenu();
    const [showAlertDialog, setShowAlertDialog] = useState(false);


    const handleShowDialog = () => {
        setShowAlertDialog(true);
    };

    const handleCloseDialog = () => {
        setShowAlertDialog(false);
    };


    return (
        <ScrollView>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{ width: '100%', alignItems: 'center' }}>
                    <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ margin: 10, width: '100%', fontSize: 20, fontWeight: 'bold' }}>Menu</Text>
                        <Text onPress={handleShowDialog}>Create</Text>
                    </View>
                    {
                        loading ? <Spinner size="small" color="$green10" /> : <FlatList
                            data={menusData?.menu}
                            renderItem={(menu) => {
                                return (
                                    <MenuCard menudata={{ menudata: menu }} /> 
                                )
                            }}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            contentContainerStyle={{
                                gap: 30,
                                padding: 10,
                            }}
                            // refreshControl={refetch}
                        />
                    }
                    <Text style={{ textAlign: 'center', margin: 10, width: '100%', fontSize: 20, fontWeight: 'bold' }}>Orders</Text>
                    {order}
                </View>
            </View>
            <Form type="menu-create" onClose={handleCloseDialog} isOpen={showAlertDialog} />
        </ScrollView>
    )
}

export default RestaurantDashboard;