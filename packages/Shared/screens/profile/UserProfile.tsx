import { Button, Input, Label, ScrollView, Text, View } from "tamagui"
import useAuth from "Shared/hooks/Auth/useAuth";
import { FormCard } from "../auth/components/FormCard";
import React from "react";


const UserProfile = () => {
    const { user } = useAuth();

    return (
        <ScrollView>
            <View style={{ alignItems: 'center', width: '100%' }}>
                <FormCard>
                    <View
                        style={{
                            width: '100%'
                        }}
                        borderWidth={1}
                        borderRadius={30}
                        alignItems="center"
                        gap="$2"
                        padding="$8">
                        <View style={{ flexDirection: 'column', gap: 3 }}>
                            <View>

                            </View>
                            <View>
                                <Label>Full Name</Label>
                                <Input style={{ width: '100%' }} value={user?.name} />
                            </View>
                            <View>
                                <Label>User Name</Label>
                                <Input style={{ width: '100%' }} value={user?.username} />
                            </View>
                            <View>
                                <Label>Email</Label>
                                <Input style={{ width: '100%' }} value={user?.email} />
                            </View>
                            <View>
                                <Label>City</Label>
                                <Input style={{ width: '100%' }} value={user?.city} />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Button>Update Profile</Button>
                            </View>

                        </View>

                    </View>
                </FormCard>
            </View>
        </ScrollView>
    )
}

export default UserProfile;