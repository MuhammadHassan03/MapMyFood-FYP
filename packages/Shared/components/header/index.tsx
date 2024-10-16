import React, { useEffect } from 'react';
import { Image, Text, View } from "tamagui";
import MapMyFoodLogo from 'Shared/assets/pictures/MapMyFoodLogo.png';
import { HeaderLinks } from 'Shared/constants/headerLinks';
import useResponsive from 'Shared/hooks/useResponsive';
import Link from 'Shared/components/Link';
import useAuth from 'Shared/hooks/Auth/useAuth';
import useStorage from 'Shared/hooks/User/useStorage';

const Header = () => {
  const { logout } = useStorage();

  const handleLogout = () => {
    logout();
  };

  const { xs, sm, md } = useResponsive();
  const { user } = useAuth();

  useEffect(() => {}, [user]);

  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: xs ? 0 : sm ? 0 : 50,
      paddingTop: xs ? 20 : sm ? 50 : 0,
      paddingBottom: xs ? 20 : sm ? 50 : 0,
      paddingRight: xs ? 0 : sm ? 0 : 50,
      backgroundColor: 'whitesmoke',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      marginBottom: 30
    }}>
      <View>
        <Image
          source={{ uri: MapMyFoodLogo.src }}
          style={{ width: xs ? 150 : 250, height: xs ? 50 : 100 }}
        />
      </View>
      <View>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {user ? (
            HeaderLinks.loggedIn.map((link) => (
              <Link key={link.title} href={link.link} onClick={link.title === 'Logout' ? handleLogout : () => {}} >
                <Text style={{ margin: 10, fontSize: xs || sm || md ? 16 : 18 }}>
                  {link.title}
                </Text>
              </Link>
            ))
          ) : (
            HeaderLinks.loggedOut.map((link) => (
              <Link key={link.title} href={link.link}>
                <Text style={{ margin: 10, fontSize: xs || sm || md ? 16 : 18 }}>
                  {link.title}
                </Text>
              </Link>
            ))
          )}
        </View>
      </View>
    </View>
  );
};

export { Header };
