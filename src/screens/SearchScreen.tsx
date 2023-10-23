import React from 'react';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

import { ContainerView, SearchInput } from 'src/components';

const SearchScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} className=" bg-red-300">
      <SafeAreaView className="flex-1 bg-white">
        <ContainerView className="mt-3 flex-1 ">
          <SearchInput placeholder="Search for coffee brand" />
        </ContainerView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export { SearchScreen };
