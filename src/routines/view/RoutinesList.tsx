import React, {ComponentType, useCallback} from 'react';
import {FlatList} from 'react-native';
import {Layout} from '../../base-ui';
import {RoutineUuid} from '../model';
import RoutineListHeader from './RoutineListHeader';

type ItemProps = {uuid: RoutineUuid};

type Props = {
  routineUuids: RoutineUuid[];
  ItemComponent: ComponentType<ItemProps>;
};

const RoutinesList = ({routineUuids, ItemComponent}: Props) => {
  const keyExtractor = useCallback((key: RoutineUuid) => key, []);
  const renderItem = useCallback(({item}) => <ItemComponent uuid={item} />, []);
  return (
    <Layout>
      <FlatList
        data={routineUuids}
        ListHeaderComponent={RoutineListHeader}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Layout>
  );
};

export default RoutinesList;
