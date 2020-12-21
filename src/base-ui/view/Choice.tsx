import React from 'react';
import styled from 'styled-components/native';

type Props<T extends string> = {
  values: T[];
  t: (key: T) => string;
  selected: T;
  onValueSelected: (value: T) => void;
};

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Option = styled.Button``;

const Choice = <T extends string>({
  values,
  t,
  selected,
  onValueSelected,
}: Props<T>) => {
  return (
    <Container>
      {values.map((value: T) => (
        <Option
          title={t(value)}
          onPress={() => onValueSelected(value)}
          disabled={selected === value}
        />
      ))}
    </Container>
  );
};

export default Choice;
