import React, {useMemo, useState} from 'react';
import {useFetchData} from '../../services/fetchData';
import {InfoText, StyledProducts} from './styles';
import {FlatList} from 'react-native';
import ProductComponent from '../../components/Product/Product';

const ProductsContainer: React.FC = () => {
  const {isError, data, isLoading} = useFetchData('products');

  const [searchProductsInput, setSearchProductsInput] = useState<string>('');

  const isInputNotEmpty: boolean = searchProductsInput !== '';

  const memoProducts = useMemo(() => {
    if (isInputNotEmpty) {
      const normalizeString = (string: string) =>
        string
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();

      return data?.filter(({name}) =>
        normalizeString(name).includes(normalizeString(searchProductsInput)),
      );
    } else {
      return data;
    }
  }, [data, isInputNotEmpty, searchProductsInput]);

  if (isError) {
    return <InfoText>Houve um erro ao buscar os produtos</InfoText>;
  }

  if (data?.length === 0) {
    return (
      <InfoText>
        Não há nenhum produto cadastrado em nosso site no momento
      </InfoText>
    );
  }

  return (
    <StyledProducts.Container>
      <StyledProducts.SearchProductInput
        placeholder="Busque um produto!"
        value={searchProductsInput}
        onChangeText={setSearchProductsInput}
      />
      <FlatList
        data={memoProducts}
        renderItem={({item}) => (
          <ProductComponent
            isLoading={isLoading}
            product={item}
            key={item.id}
          />
        )}
        contentContainerStyle={StyledProducts.styleSheet.adjust}
      />
    </StyledProducts.Container>
  );
};

export default ProductsContainer;
