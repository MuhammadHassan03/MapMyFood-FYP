"use client";

import { TamaguiProvider } from '@tamagui/core';
// import { config } from '@tamagui/config/v3';
import tamaguiConfig from 'Shared/config/tamagui.config';
import { PortalProvider } from '@tamagui/portal'



export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    return (
        <TamaguiProvider config={tamaguiConfig}>
            <PortalProvider shouldAddRootHost>
                {children}
            </PortalProvider>
        </TamaguiProvider>
    );
}
