import HomeScreen from "./HomeScreen";
import JournalScreen from "./JournalScreen";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from "@rneui/themed";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchJournalEntries } from "../features/journal/journalSlice";
import JournalEntryScreen from "./JournalEntryScreen";

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#7cb3de' }
};

const HomeNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Home',
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <>
                            <Icon name="bars"
                                  type="font-awesome"
                                  iconStyle={styles.stackIcon}
                                  onPress={() => navigation.toggleDrawer()}
                            />
                            <Icon
                                name="home"
                                type="font-awesome"
                                iconStyle={styles.stackIcon}
                            />
                        </>
                    )
                })}
            />
        </Stack.Navigator>
    );
};

const JournalNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name="journal"
                component={JournalScreen}
                options={({ navigation }) => ({
                    title: 'Journal',
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <>
                            <Icon name="bars"
                                  type="font-awesome"
                                  iconStyle={styles.stackIcon}
                                  onPress={() => navigation.toggleDrawer()}
                            />
                            <Icon
                                name="pencil"
                                type="font-awesome"
                                iconStyle={styles.stackIcon}
                            />
                        </>
                    )
                })}
            />
            <Stack.Screen
                name="journalEntry"
                component={JournalEntryScreen}
                options={() => ({
                    title: 'New Journal Entry'
                })}
            />
        </Stack.Navigator>
    );
};

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{ flex: 2 }}>
                <Text style={styles.drawerHeaderText}>Today</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }}/>
    </DrawerContentScrollView>
);

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dispatch(fetchJournalEntries))
    }, [dispatch]);

    return (
        <SafeAreaView style={styles.container}>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={CustomDrawerContent}>
                <Drawer.Screen
                    name="Home"
                    component={HomeNavigator}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon
                                name="home"
                                type="font-awesome"
                                color={color}
                            />
                        ),
                        headerShown: false,
                    }}
                />
                <Drawer.Screen
                    name="Journal"
                    component={JournalNavigator}
                    options={{
                        drawerIcon: ({ color }) => (
                            <Icon
                                name="pencil"
                                type="font-awesome"
                                color={color}
                            />
                        ),
                        headerShown: false
                    }}/>
            </Drawer.Navigator>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#88bcef',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    stackIcon: {
        marginRight: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;