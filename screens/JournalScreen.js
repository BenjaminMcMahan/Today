import { Text, SafeAreaView, FlatList, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { Card, Icon } from "@rneui/themed";
import { Button } from "@rneui/base";

const JournalScreen = ({ navigation }) => {
    const journalEntries = useSelector((state) => state.journalEntries);

    const RenderJournalEntry = ({ item: journalEntry }) => {
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

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.buttonsContainer}>
                <Button
                    type="solid"
                    onPress={() => navigation.navigate('journalEntry')}
                >
                    <Icon name="plus"
                          type="font-awesome"
                          color="white"
                          style={styles.buttonIcon}
                    />
                    New Entry
                </Button>
            </View>
            <FlatList
                data={journalEntries.entriesArray}
                renderItem={RenderJournalEntry}
                keyExtractor={(item) => {
                    item.id.toString();
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    buttonIcon: {
        margin: 10
    }

});

export default JournalScreen;