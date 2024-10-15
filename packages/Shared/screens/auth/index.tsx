import React, { useState, useCallback } from 'react';
import { Button, Input, ScrollView, Separator, Text, ToggleGroup, View } from 'tamagui';
import { FormCard } from 'Shared/screens/auth/components/FormCard';
import { useSignup } from 'Shared/screens/auth/hooks/useSignup';
import { useLogin } from 'Shared/screens/auth/hooks/useLogin';
import { GestureResponderEvent } from 'react-native';
import useNavigate from 'Shared/hooks/useNavigate';

interface InputFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    secureTextEntry?: boolean;
}

const InputField: React.FC<InputFieldProps> = React.memo(({ label, value, onChange, secureTextEntry }) => (
    <View style={{ width: '100%' }}>
        <Text style={{ width: '100%', textAlign: 'left' }}>{label}</Text>
        <Input
            style={{ width: '100%' }}
            value={value}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
            autoCorrect={false}
        />
    </View>
));

interface RoleToggleProps {
    role: string;
    onChange: (value: string) => void;
}

const RoleToggle: React.FC<RoleToggleProps> = React.memo(({ role, onChange }) => (
    <View style={{ width: '100%' }}>
        <Text style={{ width: '100%', textAlign: 'left' }}>Role</Text>
        <ToggleGroup
            type="single"
            value={role}
            onValueChange={onChange}
            style={{
                color: 'black',
                alignItems: 'center',
                justifyContent: 'space-around',
                width: '100%',
            }}
        >
            <ToggleGroup.Item style={{ margin: 10 }} value="user">User</ToggleGroup.Item>
            <ToggleGroup.Item style={{ margin: 10 }} value="delivery_boy">Delivery Boy</ToggleGroup.Item>
            <ToggleGroup.Item style={{ margin: 10 }} value="restaurant">Restaurant</ToggleGroup.Item>
        </ToggleGroup>
    </View>
));

interface SignupFormProps {
    formData: {
        role: string;
        email: string;
        name: string;
        username: string;
        password: string;
        confirmPassword: string;
    };
    handleChange: (field: string) => (value: string) => void;
    onSubmit: (event: GestureResponderEvent) => void;
    setAuthState: (state: string) => void;
    error: JSX.Element | null;
}

const SignupForm: React.FC<SignupFormProps> = React.memo(({ formData, handleChange, onSubmit, setAuthState, error }) => (
    <FormCard>
        <View style={{ width: '100%' }}>
            <View
                style={{ width: '100%' }}
                borderWidth={1}
                borderRadius={30}
                alignItems="center"
                gap="$2"
                padding="$8"
            >
                <InputField label="Full Name" value={formData.name} onChange={handleChange('name')} />
                <InputField label="Email" value={formData.email} onChange={handleChange('email')} />
                <InputField label="Username" value={formData.username} onChange={handleChange('username')} />
                <InputField label="Password" value={formData.password} onChange={handleChange('password')} secureTextEntry />
                <InputField label="Confirm Password" value={formData.confirmPassword} onChange={handleChange('confirmPassword')} secureTextEntry />
                <RoleToggle role={formData.role} onChange={handleChange('role')} />
                <Button onPress={onSubmit} style={{ width: '100%' }}>Submit</Button>
                <Separator alignSelf="stretch" vertical marginHorizontal={15} />
                <View style={{ width: '100%' }}>
                    <Text onPress={() => setAuthState('login')} style={{ width: '100%', textAlign: 'center', cursor: 'pointer' }}>
                        Already have an account? Login Here
                    </Text>
                </View>
            </View>
        </View>
    </FormCard>
));

interface LoginFormProps {
    formData: {
        email: string;
        password: string;
    };
    handleChange: (field: string) => (value: string) => void;
    onSubmit: (event: GestureResponderEvent) => void;
    setAuthState: (state: string) => void;
    error: JSX.Element | null;
}

const LoginForm: React.FC<LoginFormProps> = React.memo(({ formData, handleChange, onSubmit, setAuthState, error }) => (
    <FormCard>
        <View style={{ width: '100%' }}>
            <View
                style={{ width: '100%' }}
                borderWidth={1}
                borderRadius={30}
                alignItems="center"
                gap="$2"
                padding="$8"
            >
                <InputField label="Email" value={formData.email} onChange={handleChange('email')} />
                <InputField label="Password" value={formData.password} onChange={handleChange('password')} secureTextEntry />
                {error}
                <Button onPress={onSubmit} style={{ width: '100%' }}>Submit</Button>
                <Separator alignSelf="stretch" vertical marginHorizontal={15} />
                <View style={{ width: '100%', textAlign: 'center' }}>
                    <Text>Forget Your Password?</Text>
                </View>
                <View>
                    <Text onPress={() => setAuthState('signup')} style={{ width: '100%', textAlign: 'center', cursor: 'pointer' }}>
                        Don't have an account? Signup Here
                    </Text>
                </View>
            </View>
        </View>
    </FormCard>
));

const AuthScreen: React.FC = () => {
    const { navigate } = useNavigate();
    const [authState, setAuthState] = useState<string>("signup");
    const [formData, setFormData] = useState({
        role: 'user',
        email: '',
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState<JSX.Element | null>(null);

    const handleChange = useCallback((field: string) => (value: string) => {
        setFormData((prevData) => ({ ...prevData, [field]: value }));
    }, []);

    const signup = useCallback(async (event: GestureResponderEvent) => {
        event.preventDefault();
        const response = await useSignup(formData);
        if (response !== undefined && response !== null) {
            setError(<Text>{response}</Text>);
        }
        navigate('/')
    }, [formData]);

    const login = useCallback(async (event: GestureResponderEvent) => {
        event.preventDefault();
        const data = {
            email: formData.email,
            password: formData.password,
        };
        const response = await useLogin(data);
        if (response !== undefined && response !== null) {
            setError(<Text>{response}</Text>);
            if(response === 'Login Succed'){
                navigate('/')
            }
        }
    }, [formData.email, formData.password]);

    return (
        <View>
            <ScrollView style={{ flex: 1, marginTop: 30 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center', justifyItems: 'center' }}>
                    {authState === 'signup' ? (
                        <SignupForm
                            formData={formData}
                            handleChange={handleChange}
                            onSubmit={signup}
                            setAuthState={setAuthState}
                            error={error}
                        />
                    ) : (
                        <LoginForm
                            formData={formData}
                            handleChange={handleChange}
                            onSubmit={login}
                            setAuthState={setAuthState}
                            error={error}
                        />
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

export default AuthScreen;
