import { StyleSheet, Text, View } from "react-native";
import { Card, Icon } from "@rneui/themed";

const RenderJournalEntry = (props) => {
    const { journalEntry } = props;

    if (journalEntry) {
        return (
            <Card>
                <Card.Title>{journalEntry.title}</Card.Title>
                <Card.Divider/>
                <View>
                    <Text>{journalEntry.body}</Text>
                </View>
            </Card>
        )
    }
};

export default RenderJournalEntry;