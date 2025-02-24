import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams, usePathname } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDebouncedCallback } from 'use-debounce';

export default function Search() {
    const path = usePathname();
    const params = useLocalSearchParams<{
        query?: string
    }>();

    const [searchQuery, setSearchQuery] = React.useState(params.query ?? '');

    const debouncedSearchQuery = useDebouncedCallback((query: string) => router.setParams({ searchQuery: query}), 500);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        // console.log(query, 'search query');
        debouncedSearchQuery(query);
    }

    return (
        <View className="flex flex-row items-center justify-between gap-0 w-full px-4 py-1 rounded-lg border bg-white">
            <View className='flex-1 flex flex-row items-center justify-start z-50'>
                <MaterialCommunityIcons
                    name="magnify"
                    size={24}
                    color="black"
                />
                <TextInput 
                    value={searchQuery}
                    onChangeText={handleSearch}
                    placeholder="Search Songs"
                    className="text-sm ml-2 flex-1 text-black font-bold"
                />
            </View>
            <TouchableOpacity>                
                <MaterialCommunityIcons
                    name="filter"
                    size={24}
                    color="black"
                />
            </TouchableOpacity>
        </View>
    )
}