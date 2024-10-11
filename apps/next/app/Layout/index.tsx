import React from "react";
import { ScrollView, View } from "tamagui";
import { Header } from 'Shared/components/header';
import { Fottor } from 'Shared/components/Fottor';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <ScrollView>
            <View style={{ flex: 1 }}>
                <Header />
                {children}
                <Fottor />
            </View>
        </ScrollView>
    );
}

export { Layout };
