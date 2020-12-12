import React from 'react';
import styled from 'styled-components/native';

type Props = {
  values: string[];
  selected: string;
  onValueSelected: (value: string) => void;
};

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const Option = styled.Button``;

const Choice = ({values, selected, onValueSelected}: Props) => {
  return (
    <Container>
      {values.map((value) => (
        <Option
          title={value}
          onPress={() => onValueSelected(value)}
          disabled={selected === value}
        />
      ))}
    </Container>
  );
};

export default Choice;
