"use client";

import { TamaguiProvider, createTamagui } from '@tamagui/core';
// import { config } from '@tamagui/config/v3';
import tamaguiConfig from 'Shared/config/tamagui.config';


export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <TamaguiProvider config={tamaguiConfig}>
            {children}
        </TamaguiProvider>
    );
}
