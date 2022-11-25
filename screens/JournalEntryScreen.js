import { SafeAreaView, View } from "react-native";
import { Button, Input } from "@rneui/themed";
import { useState } from "react";
import { postJournalEntry } from "../features/journal/journalSlice";
import { useDispatch } from "react-redux";

const JournalEntryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('');

    const handleSubmit = () => {
        const newEntry = {
            title,
            body
        };
        dispatch(postJournalEntry(newEntry));
        navigation.navigate('journal');
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Input
                    placeholder="Dear Diary.."
                    onChangeText={(title) => setTitle(title)}
                />
                <Input
                    onChangeText={(body) => setBody(body)}
                    placeholder="Today, I..."
                    multiline={true}
                    numberOfLines={10}
                    style={{ height: 200, textAlignVertical: 'top' }}
                />
            </View>
            <View style={{ margin: 5 }}>
                <Button
                    title="Submit"
                    color="#5637DD"
                    onPress={() => {
                        handleSubmit();
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default JournalEntryScreen;