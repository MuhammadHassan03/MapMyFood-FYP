'use client';

import LandingPage from 'Shared/screens/landingPage';
import useAuth from 'Shared/hooks/Auth/useAuth';
import Dashboard from 'Shared/screens/dashboard';
import { Text } from 'tamagui';

const HomePage = () => {
  const { user, loading } = useAuth();

  if (loading) return <Text>Loading......</Text>
  return (
    user ? <Dashboard /> : <LandingPage />
  );
};

export default HomePage;

