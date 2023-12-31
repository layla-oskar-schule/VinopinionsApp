import StoresScreen from './StoresScreen';
import StoreDetailsScreen from './StoreDetailsScreen';
import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import Store from '../../models/Store';
import { RouteProp } from '@react-navigation/native';
import AddStoreScreen from './AddStoreScreen';

const StoresStack = createStackNavigator();

export type StoresStackParamList = {
    StoresScreen: undefined;
    StoreDetailsScreen: { store: Store };
};

export type StoresScreenNavigationProp = StackNavigationProp<StoresStackParamList, 'StoresScreen'>;
export type StoreDetailsScreenRouteProp = RouteProp<StoresStackParamList, 'StoreDetailsScreen'>;

const StoresStackScreen = () => {
    return (
        <StoresStack.Navigator>
            <StoresStack.Screen options={{ headerShown: false }} name="StoresScreen" component={StoresScreen} />
            <StoresStack.Screen options={{ headerShown: false }} name="StoreDetailsScreen" component={StoreDetailsScreen} />
            <StoresStack.Screen options={{ headerShown: false }} name="AddStoreScreen" component={AddStoreScreen} />
        </StoresStack.Navigator>
    );
};

export default StoresStackScreen;
