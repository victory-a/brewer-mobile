import React from 'react';
import { View, ScrollView, StatusBar, SafeAreaView, RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { CoffeeCard, PromoBanner, ContainerView, SelectLocation } from 'src/components';
import { colors } from 'src/styles/theme';

const coffeebg1 = require('../../assets/images/coffee-1.png');
const coffeebg2 = require('../../assets/images/coffee-2.png');
const coffeebg3 = require('../../assets/images/coffee-3.png');
const coffeebg4 = require('../../assets/images/coffee-4.png');

const coffeeList = [
  { title: 'Cappucino', type: 'with Chocolate', thumbnail: coffeebg1, amount: 25 },
  { title: 'Cappucino', type: 'with Oat Milk', thumbnail: coffeebg2, amount: 25 },
  { title: 'Cappucino', type: 'with goat Milk', thumbnail: coffeebg3, amount: 25 },
  { title: 'Cappucino', type: 'with lamb Milk', thumbnail: coffeebg4, amount: 25 },
  { title: 'Cappucino', type: 'with goat Milk', thumbnail: coffeebg3, amount: 25 },
  { title: 'Cappucino', type: 'with Oat Milk', thumbnail: coffeebg2, amount: 25 },
  { title: 'Cappucino', type: 'with lamb Milk', thumbnail: coffeebg4, amount: 25 },
  { title: 'Cappucino', type: 'with Chocolate', thumbnail: coffeebg1, amount: 25 }
];

const HomeScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 5000);
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

        <ContainerView className="mb-6 mt-[100px]">
          <FlashList
            data={coffeeList}
            renderItem={({ index, item }) => <CoffeeCard key={index} {...item} />}
            estimatedItemSize={200}
            numColumns={2}
          />
        </ContainerView>
      </ScrollView>
    </SafeAreaView>
  );
};

export { HomeScreen };
