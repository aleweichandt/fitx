import React, {ComponentType, useCallback} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Layout} from '../../base-ui';
import {ExerciseUuid} from '../model';
import ExerciseListHeader from './ExerciseListHeader';

const Container = styled(Layout)`
  padding: 0;
`;

const Separator = styled.View`
  height: ${(props) => props.theme.spacing}px;
  width: 100%;
`;

const List = styled(FlatList as new () => FlatList<ExerciseUuid>)`
  width: 100%;
  height: 100%;
`;

type ItemProps = {uuid: ExerciseUuid};

type Props = {
  exerciseUuids: ExerciseUuid[];
  ItemComponent: ComponentType<ItemProps>;
};

const ExerciseList = ({exerciseUuids, ItemComponent}: Props) => {
  const keyExtractor = useCallback((key: ExerciseUuid) => key, []);
  const renderItem = useCallback(({item}) => <ItemComponent uuid={item} />, []);
  return (
    <Container>
      <List
        data={exerciseUuids}
        ListHeaderComponent={ExerciseListHeader}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};

export default ExerciseList;
