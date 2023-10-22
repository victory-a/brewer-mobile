import React from 'react';
import { SafeAreaView } from 'react-native';

import { ContainerView, SearchInput } from 'src/components';

const SearchScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ContainerView className="mt-3">
        <SearchInput placeholder="Search for coffee brand" />
      </ContainerView>
    </SafeAreaView>
  );
};

export { SearchScreen };
