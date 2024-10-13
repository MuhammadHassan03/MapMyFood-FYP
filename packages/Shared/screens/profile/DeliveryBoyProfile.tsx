import { Button, Input, Label, ScrollView, Text, View } from "tamagui"
import useAuth from "Shared/hooks/Auth/useAuth";
import { FormCard } from "../auth/components/FormCard";

const DeliveryBoyProfile = () => {
    const { user } = useAuth();

    return(
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
                            <Label>City</Label>
                            <Input style={{ width: '100%' }} value={user?.city} />
                        </View>
                        <View>
                            <Label>Nearest Railway Station</Label>
                            <Input style={{ width: '100%' }} value={user?.nearestRailwayStation} />
                        </View>
                        <View>
                            <Label>Age</Label>
                            <Input style={{ width: '100%' }} value={user?.age} />
                        </View>
                        <View>
                            <Label>Vehicle Type</Label>
                            <Input style={{ width: '100%' }} value={user?.vehicleType} />
                        </View>
                        <View>
                            <Label>Vehicle Number</Label>
                            <Input style={{ width: '100%' }} value={user?.vehicleNumber} />
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

export default DeliveryBoyProfile;