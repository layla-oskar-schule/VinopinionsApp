import { useCallback, useEffect, useState } from 'react';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStoresAsync } from '../../features/stores/storesSlice';
import { TextField, View } from 'react-native-ui-lib';
import { RefreshControl, StyleSheet } from 'react-native';
import StoreCardList from '../../components/stores/StoreCardList';
import Store from '../../models/Store';

const StoresScreen = () => {
    const [refreshing, setRefreshing] = useState(false);
    const dispatch: AppDispatch = useDispatch();
    const stores = useSelector((state: RootState) => state.stores.items);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchResults, setSearchResults] = useState<Store[]>(stores);

    const performSearch = () => {
        if (searchQuery === '') setSearchResults(stores);
        else {
            const results = stores.filter(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
            setSearchResults(results);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        performSearch();
    }, [searchQuery, stores]);

    const onRefresh = useCallback(async () => {
        setRefreshing(true);
        dispatch(fetchStoresAsync());
        setRefreshing(false);
    }, []);

    useEffect(() => {
        dispatch(fetchStoresAsync());
    }, []);

    return (
        <View style={styles.screen}>
            <TextField
                placeholder="Search..."
                placeholderTextColor="grey"
                onChangeText={handleSearch}
                value={searchQuery}
                containerStyle={styles.searchBarContainer}
                style={{ fontSize: 20, alignContent: 'flex-start' }}
            />
            <StoreCardList refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />} stores={searchResults} />
        </View>
    );
};

export default StoresScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    searchBarContainer: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        height: 25,
        paddingTop: 1.5,
        paddingBottom: 0
    }
});
