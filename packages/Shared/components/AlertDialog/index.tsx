// Shared/components/AlertDialog.tsx
import { AlertDialog, Button, Input, Label, RadioGroup, Spinner, Switch, Text, View, XStack, YStack } from 'tamagui';
import React, { useState } from 'react';
import useMenu from 'Shared/screens/dashboard/hooks/useMenu';
import { GestureResponderEvent } from 'react-native';


interface AlertDialogDemoProps {
    onClose: () => void; // Function to close the dialog
    isOpen: boolean; // Control the visibility of the dialog
    type: string; // Use 'string' instead of 'String' for the type
}

export function Form({ onClose, isOpen, type }: AlertDialogDemoProps) {

    const { addMenu, Loading, Error } = useMenu();
    const [menuName, setMenuName] = useState("")
    const [isPublic, setIsPublic] = useState<boolean | undefined>(false)

    const handleAddMenu = (event: GestureResponderEvent) => {
        event.preventDefault();
        const data = {
            menuName: menuName,
            isPublic: isPublic,
            items: null,
        }
        addMenu(data)
    }

    const typeBasedForm = () => {


        if (type === 'menu-create') {

            return (
                <View>
                    <Text>Create New Menu</Text>
                    <View>
                        <Label>Menu Name</Label>
                        <Input value={menuName} onChangeText={(text) => setMenuName(text)} />
                    </View>
                    <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Label>Publish it now?</Label>
                        <Switch size="$4" checked={isPublic} onCheckedChange={setIsPublic}>
                            <Switch.Thumb animation="bouncy" />
                        </Switch>
                    </View>
                    <View style={{ marginTop: 15, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', gap: 10, }}>
                        <Button onPress={onClose}>Cancel</Button>
                        <Button theme="active" onPress={handleAddMenu}>{Loading? <Spinner></Spinner> : "Submit"}</Button>
                    </View>
                </View >
            );
        }
    };

    return (
        <AlertDialog native open={isOpen}>
            <AlertDialog.Portal>
                <AlertDialog.Overlay
                    key="overlay"
                    animation="quick"
                    opacity={0.5}
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }}
                />
                <AlertDialog.Content
                    bordered
                    elevate
                    key="content"
                    animation={[
                        'quick',
                        {
                            opacity: {
                                overshootClamping: true,
                            },
                        },
                    ]}
                    enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
                    exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
                    x={0}
                    scale={1}
                    opacity={1}
                    y={0}
                >
                    <YStack style={{padding: 30}}>
                        {typeBasedForm()}
                    </YStack>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog>
    );
}
