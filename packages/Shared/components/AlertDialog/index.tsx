// Shared/components/AlertDialog.tsx
import { AlertDialog, Button, Input, Label, Text, View, XStack, YStack } from 'tamagui';
import React from 'react';

interface AlertDialogDemoProps {
    onClose: () => void; // Function to close the dialog
    isOpen: boolean; // Control the visibility of the dialog
    type: string; // Use 'string' instead of 'String' for the type
}

export function Form({ onClose, isOpen, type }: AlertDialogDemoProps) {
    const typeBasedForm = () => {
        if (type === 'menu-create') {
            return (
                <View>
                    <Text>Create New Menu</Text>
                    <View>
                        <Label>Menu Name</Label>
                        <Input />
                    </View>
                    <View>
                        <Label>Is Public</Label>
                        <Input />
                    </View>
                </View>
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
                    <YStack space>
                        {/* Call the typeBasedForm function here to get the content */}
                        {typeBasedForm()}
                        <XStack gap="$3" justifyContent="flex-end">
                            <Button onPress={onClose}>Cancel</Button>
                            <Button theme="active" onPress={onClose}>Submit</Button>
                        </XStack>
                    </YStack>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog>
    );
}
