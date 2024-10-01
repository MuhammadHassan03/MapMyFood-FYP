'use client';

import LandingPage from 'Shared/screens/landingPage'
import { View } from 'tamagui';
import { NextRoutes } from './routes';
export default function Home() {
  return (
    <View>
      {/* <LandingPage></LandingPage> */}
      <NextRoutes></NextRoutes>
    </View>
  );
}
