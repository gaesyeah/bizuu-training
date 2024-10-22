import React, {useMemo} from 'react';
import {useFetchData} from '../../services/fetchData';
import {InfoText, StyledProducts} from './styles';
import {FlatList} from 'react-native';
import ProductComponent from '../../components/Product/Product';

const ProductsContainer: React.FC = () => {
  const {isError, data, isLoading} = useFetchData('products');

  const memoProducts = useMemo(() => data || [], [data]);

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
      <FlatList
        data={memoProducts}
        renderItem={({item}) => (
          <ProductComponent
            isLoading={isLoading}
            product={item}
            key={item.id}
          />
        )}
        contentContainerStyle={StyledProducts.styleSheet.padding}
      />
    </StyledProducts.Container>
  );
};

export default ProductsContainer;
