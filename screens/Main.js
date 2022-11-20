import HomeScreen from "./HomeScreen";
import JournalScreen from "./JournalScreen";
import Constants from "expo-constants";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import {Icon} from "react-native-elements";
import {Image, Platform, StyleSheet, Text, View} from "react-native";

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={({navigation}) => ({
                    title: 'Home',
                    headerLeft: () => (
                        <Icon
                            name="home"
                            type="font-awesome"
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}/>
        </Stack.Navigator>
    );
};

const JournalNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="journal"
                component={JournalScreen}
                options={({navigation}) => ({
                    title: 'Journal',
                    headerLeft: () => (
                        <Icon
                            name="heart"
                            type="font-awesome"
                            onPress={() => navigation.toggleDrawer()}
                        />
                    )
                })}/>
        </Stack.Navigator>
    );
};

const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
        <View style={styles.drawerHeader}>
            <View style={{flex: 2}}>
                <Text style={styles.drawerHeaderText}>Today</Text>
            </View>
        </View>
        <DrawerItemList {...props} labelStyle={{fontWeight: 'bold'}}/>
    </DrawerContentScrollView>
);

const Main = () => {
    return (
        <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
            <Drawer.Navigator
                initialRouteName="Home"
                drawerContent={CustomDrawerContent}>
                <Drawer.Screen
                    name="Home"
                    component={HomeNavigator}
                    options={{
                        title: "Home",
                        drawerIcon: ({color}) => (
                            <Icon
                                name="home"
                                type="font-awesome"
                                size={24}
                                iconStyle={{width: 24}}
                                color={color}
                            />
                        )
                    }}/>
                <Drawer.Screen
                    name="Journal"
                    component={JournalNavigator}
                    options={{
                        title: "Journal",
                        drawerIcon: ({color}) => (
                            <Icon
                                name="heart"
                                type="font-awesome"
                                size={24}
                                iconStyle={{width: 24}}
                                color={color}
                            />
                        )
                    }}/>
            </Drawer.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#3784dd',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
});

export default Main;