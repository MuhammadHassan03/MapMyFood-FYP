import React from "react"
import { ScrollView, View } from "tamagui"
import { Header } from 'Shared/components/header'
import { Outlet } from "react-router-dom"

const Layout = () => {
    return(
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Header/>
                <Outlet/>
            </View>
        </ScrollView>
    )
}

export { Layout }