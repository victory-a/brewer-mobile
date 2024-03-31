import React from 'react';
import { View, ScrollView, StatusBar, SafeAreaView, RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { CoffeeCard, PromoBanner, ContainerView, SelectLocation } from 'src/components';
import { colors } from 'src/styles/theme';
import { useGetProducts } from 'src/lib/hooks/product.hooks';

const coffeebg1 = require('../../assets/images/coffee-1.png');

const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const { products = [], execute, isLoading } = useGetProducts();

  React.useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    execute().finally(() => setRefreshing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView className="bg-coffee-brown">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: colors.white }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={colors['white-color']}
          />
        }
      >
        <StatusBar barStyle="light-content" />
        <View className="bg-coffee-brown">
          <ContainerView className="relative pb-[100px] pt-4">
            <SelectLocation />
            <PromoBanner />
          </ContainerView>
        </View>

        <ContainerView className="mb-6 mt-[100px] h-full">
          {isLoading ? (
            <View className="my-80 flex h-full items-center justify-center"></View>
          ) : (
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
                    image: coffeebg1
                    // image: item.image
                  }}
                />
              )}
              estimatedItemSize={200}
              numColumns={2}
            />
          )}
        </ContainerView>
      </ScrollView>
    </SafeAreaView>
  );
};

export { HomeScreen };
