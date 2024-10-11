import { Button, Form, Input, ScrollView, Separator, Text, ToggleGroup, View } from 'tamagui';
import useStorage from 'Shared/hooks/User/useStorage';
import React, { useState, useEffect } from 'react';
import { FormCard } from 'Shared/screens/auth/components/FormCard';
import {useLogin} from 'Shared/screens/auth/hooks/useLogin';

const AuthScreen = () => {
    const user = useStorage();
    const [isAuth, setIsAuth] = useState(false);
    const [authState, setAuthState] = useState("signup");
    const [role, setRole] = useState('user');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        setIsAuth(!!user);
    }, [user]);

    const signup = (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log('Signup event triggered');
        console.log('Email:', email);
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
        console.log('Role:', role);
        const data = {
            email,
            password,
            username,
            role
        }
        const response = useLogin(data);
        
    };

    const SignupForm = () => {
        return (
            <FormCard>
                <View style={{ width: '100%' }}>
                    <Form
                        width={'100%'}
                        borderWidth={1}
                        borderRadius={30}
                        alignItems="center"
                        gap="$2"
                        padding="$8"
                        onSubmit={signup}
                    >
                        <Text style={{ width: '100%', textAlign: 'left' }}>Email</Text>
                        <Input 
                            style={{ width: '100%' }} 
                            value={email} 
                            onChangeText={setEmail} // Directly use the setter function
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Text style={{ width: '100%', textAlign: 'left' }}>Username</Text>
                        <Input 
                            style={{ width: '100%' }} 
                            value={username} 
                            onChangeText={setUsername} // Directly use the setter function
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Text style={{ width: '100%', textAlign: 'left' }}>Password</Text>
                        <Input 
                            style={{ width: '100%' }} 
                            value={password} 
                            onChangeText={setPassword} // Directly use the setter function
                            secureTextEntry 
                        />
                        <Text style={{ width: '100%', textAlign: 'left' }}>Confirm Password</Text>
                        <Input 
                            style={{ width: '100%' }} 
                            value={confirmPassword} 
                            onChangeText={setConfirmPassword} // Directly use the setter function
                            secureTextEntry 
                        />
                        <Text style={{ width: '100%', textAlign: 'left' }}>Role</Text>
                        <ToggleGroup
                            type="single"
                            value={role}
                            onValueChange={setRole}
                            style={{
                                color: 'black',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                width: '100%'
                            }}
                        >
                            <ToggleGroup.Item style={{ margin: 10 }} value="user">User</ToggleGroup.Item>
                            <ToggleGroup.Item style={{ margin: 10 }} value="delivery_boy">Delivery Boy</ToggleGroup.Item>
                            <ToggleGroup.Item style={{ margin: 10 }} value="restaurant">Restaurant</ToggleGroup.Item>
                        </ToggleGroup>
                        <Button onPress={signup} style={{ width: '100%' }}>Submit</Button>
                        <Separator alignSelf="stretch" vertical marginHorizontal={15} />
                        <Text onPress={() => setAuthState('login')} style={{ width: '100%', textAlign: 'center', cursor: 'pointer' }}>
                            Already have an account? Login Here
                        </Text>
                    </Form>
                </View>
            </FormCard>
        );
    };

    const LoginForm = () => {
        return (
            <FormCard>
                <View style={{ width: '100%' }}>
                    <Form
                        width={'100%'}
                        borderWidth={1}
                        borderRadius={30}
                        alignItems="center"
                        gap="$2"
                        padding="$8"
                    >
                        <Text style={{ width: '100%', textAlign: 'left' }}>Email</Text>
                        <Input 
                            style={{ width: '100%' }} 
                            value={email} 
                            onChangeText={setEmail} // Directly use the setter function
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                        <Text style={{ width: '100%', textAlign: 'left' }}>Password</Text>
                        <Input 
                            style={{ width: '100%' }} 
                            value={password} 
                            onChangeText={setPassword} // Directly use the setter function
                            secureTextEntry 
                        />
                        <Button style={{ width: '100%' }}>Submit</Button>
                        <Separator alignSelf="stretch" vertical marginHorizontal={15} />
                        <Text onPress={() => setAuthState('signup')} style={{ width: '100%', textAlign: 'center', cursor: 'pointer' }}>
                            Don't have an account? Signup Here
                        </Text>
                    </Form>
                </View>
            </FormCard>
        );
    };

    return (
        <View>
            {isAuth ? (
                <Text>This is leading to Dashboard</Text>
            ) : (
                <ScrollView style={{ flex: 1, marginTop: 30, marginBottom: 30 }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                        {authState === 'signup' ? <SignupForm /> : <LoginForm />}
                    </View>
                </ScrollView>
            )}
        </View>
    );
};

export default AuthScreen;
