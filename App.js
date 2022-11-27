import Main from "./screens/Main";
import { NavigationContainer } from "@react-navigation/native";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NavigationContainer>
                    <Main/>
                </NavigationContainer>
            </PersistGate>
        </Provider>
    )
}
