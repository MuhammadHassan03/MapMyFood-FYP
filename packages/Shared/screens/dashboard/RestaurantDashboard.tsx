import { useState } from "react"
import { ScrollView, Text, View } from "tamagui"

const RestaurantDashboard = () => {
    const [menu, setMenu] = useState(<Text>In Development</Text>)
    const [order, setOrder] = useState(<Text>In Development</Text>)


    return (
        <ScrollView>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <View style={{width: '30%', alignItems: 'center'}}>
                    <Text style={{textAlign: 'center', margin:10, width: '100%', fontSize: 20, fontWeight: 'bold'}}>Menu</Text>
                    {menu}
                    <Text style={{textAlign: 'center', margin:10, width: '100%', fontSize: 20, fontWeight: 'bold'}}>Orders</Text>
                    {order}
                </View>
            </View>
        </ScrollView>
    )
}

export default RestaurantDashboard;