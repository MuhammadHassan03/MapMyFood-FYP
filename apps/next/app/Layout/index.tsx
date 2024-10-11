'use client'

import React from "react";
import { ScrollView, View } from "tamagui";
import { Header } from 'Shared/components/header';
import { Fottor } from 'Shared/components/Fottor';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ScrollView style={{flex: 1}}>
            <View style={{ flex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                {children}
            </View>
            <Fottor />
        </ScrollView>
    );
}

export { Layout };
