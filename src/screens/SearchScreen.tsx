import React from 'react';
import { debounce } from 'lodash';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  View
} from 'react-native';

import { CoffeeCard, ContainerView, SearchInput, Text } from 'src/components';
import { useGetProducts } from 'src/lib/hooks/product.hooks';
import { colors } from 'src/styles/theme';

const SearchScreen = () => {
  const [query, setQuery] = React.useState('');
  const [debouncedQuery, setDebouncedQuery] = React.useState('');

  // Debounce the query update
  const updateQuery = React.useCallback(
    debounce((value) => {
      setDebouncedQuery(value);
    }, 600),
    []
  );

  // Update debounced query when input value changes
  React.useEffect(() => {
    updateQuery(query);
  }, [query, updateQuery]);

  const { execute, isLoading, products = [] } = useGetProducts(debouncedQuery);

  React.useEffect(() => {
    if (debouncedQuery) {
      execute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  const results = products.length;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView className="flex-1 bg-white">
        <ScrollView showsVerticalScrollIndicator={false}>
          <ContainerView className="mt-3 flex-1">
            <SearchInput
              placeholder="Search for coffee brand"
              onChangeText={setQuery}
              onClear={() => setQuery('')}
              value={query}
              autoFocus
            />

            {!isLoading && query && (
              <Text className="mt-2 text-sm text-secondary">
                {` ${results}  ${results === 1 ? 'result' : 'results'} for "${query}"`}
              </Text>
            )}

            <View className="mt-6 h-full">
              {isLoading && <ActivityIndicator color={colors.secondary} size="small" />}
              {!isLoading && query ? (
                <FlashList
                  data={products}
                  renderItem={({ index, item }) => (
                    <CoffeeCard
                      key={index}
                      {...{
                        id: item.id,
                        name: item.name,
                        basePrice: item.basePrice,
                        variant: item.variant,
                        image: item.image
                      }}
                    />
                  )}
                  estimatedItemSize={200}
                  numColumns={2}
                />
              ) : null}
            </View>
          </ContainerView>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export { SearchScreen };
