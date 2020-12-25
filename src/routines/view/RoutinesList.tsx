import React, {ComponentType, useCallback} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Layout} from '../../base-ui';
import {RoutineUuid} from '../model';
import RoutineEmptyList from './RoutineEmptyList';
import RoutineListHeader from './RoutineListHeader';

const Container = styled(Layout)`
  padding: 0;
`;

const Separator = styled.View`
  height: ${(props) => props.theme.spacing}px;
  width: 100%;
`;

const List = styled(FlatList as new () => FlatList<RoutineUuid>)`
  width: 100%;
  height: 100%;
  padding: 0px ${(props) => props.theme.spacing}px;
`;

type ItemProps = {uuid: RoutineUuid};

type Props = {
  routineUuids: RoutineUuid[];
  ItemComponent: ComponentType<ItemProps>;
};

const RoutinesList = ({routineUuids, ItemComponent}: Props) => {
  const keyExtractor = useCallback((key: RoutineUuid) => key, []);
  const renderItem = useCallback(({item}) => <ItemComponent uuid={item} />, []);
  return (
    <Container>
      <List
        data={routineUuids}
        ListHeaderComponent={RoutineListHeader}
        ListEmptyComponent={RoutineEmptyList}
        ItemSeparatorComponent={Separator}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Container>
  );
};

export default RoutinesList;
