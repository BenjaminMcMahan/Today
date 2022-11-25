import Main from "./screens/Main";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Main/>
            </NavigationContainer>
        </Provider>
    )
}
