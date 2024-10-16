import useAuth from "Shared/hooks/Auth/useAuth";
import { Avatar, Button, Input, Label, ScrollView, Separator, Text, View } from "tamagui"
import { FormCard } from 'Shared/screens/auth/components/FormCard';


const RestaurantProfile = () => {
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
                            <View style={{ width: '100%', alignItems: 'center', paddingTop: 10, paddingBottom: 30 }}>
                                <Avatar circular size={'$10'}>
                                    <Avatar.Image src="http://picsum.photos/200/300" />
                                </Avatar>
                            </View>
                            <View style={{width: '100%'}}>
                                <Separator alignSelf="stretch" vertical />
                            </View>
                            <View>
                                <Label>Restaurant Name</Label>
                                <Input style={{ width: '100%' }} value={user?.name} />
                            </View>
                            <View>
                                <Label>User Name</Label>
                                <Input style={{ width: '100%' }} value={user?.username} />
                            </View>
                            <View>
                                <Label>Location</Label>
                                <Input style={{ width: '100%' }} value={user?.location} />
                            </View>
                            <View>
                                <Label>Nearest Railway Station</Label>
                                <Input style={{ width: '100%' }} value={user?.nearestRailwayStation} />
                            </View>
                            <View>
                                <Label>Opening Time</Label>
                                <Input style={{ width: '100%' }} value={user?.openingTime} />
                            </View>
                            <View>
                                <Label>Closing Time</Label>
                                <Input style={{ width: '100%' }} value={user?.closingTime} />
                            </View>
                            <View>
                                <Label>Phone Number</Label>
                                <Input style={{ width: '100%' }} value={user?.phoneNumber} />
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

export default RestaurantProfile;