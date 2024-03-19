import React from 'react';
import { SafeAreaView, StatusBar, ScrollView, View } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

import {
  Text,
  ContainerView,
  Divider,
  Image,
  SelectSize,
  TotalDisplay,
  StarIcon,
  LoadingSpinner
} from 'src/components';

import { useAppNavigation } from 'src/hooks/useTypedNavigation';
import { AppNavigatorParams } from 'src/model/navigation.model';
import { useGetAProduct } from 'src/lib/hooks/product.hooks';
import { ISizes } from 'src/model/order.model';

const coffeebg1 = require('../../assets/images/coffee-1.png');

const milk = require('../../assets/icon/milk.png');

export const ProductDetailScreen = () => {
  const navigation = useAppNavigation();
  const { params } = useRoute<RouteProp<AppNavigatorParams, 'Product-Detail-Screen'>>();

  React.useLayoutEffect(() => {
    if (!params?.productID) {
      navigation.navigate('AppBottomTabs');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.productID]);

  const { isLoading, execute, product } = useGetAProduct();

  React.useEffect(() => {
    if (params?.productID) {
      execute(params?.productID);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.productID]);

  const [selectedSize, setSelectedSize] = React.useState<ISizes>('small');

  if (isLoading) return <LoadingSpinner />;

  return (
    <SafeAreaView className="relative flex-1 bg-white">
      <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" />

        <ContainerView className="relative mb-40 mt-2">
          <Image
            defaultSource={(coffeebg1 as number) ?? (coffeebg1 as number)}
            // defaultSource={(product?.image as number) ?? (coffeebg1 as number)}
            className="mx-auto mt-2 h-[226] w-full max-w-[315] rounded-2xl bg-contain"
            resizeMode="contain"
          />
          <Text className="mt-5 text-xl font-semibold text-secondary">{product?.name}</Text>
          <Text className="text-sm text-nobel">{product?.variant}</Text>

          <View className="mt-2 flex-row items-center justify-between ">
            <View className="flex-row">
              <StarIcon />
              <Text>{product?.rating}</Text>
            </View>

            <Image defaultSource={milk} className="h-[20] w-[20]" resizeMode="contain" />
          </View>

          <Divider additionalClassName="my-5" />

          <Text className="mb-2 text-base font-semibold text-secondary">Description</Text>
          <Text className="text-sm leading-[1.02] text-nobel">{product?.description}</Text>

          <SelectSize
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            sizes={product?.sizes}
          />
        </ContainerView>
      </ScrollView>

      {product ? <TotalDisplay product={product} selectedSize={selectedSize} /> : null}
    </SafeAreaView>
  );
};
