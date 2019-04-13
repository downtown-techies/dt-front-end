import * as React from 'react';
import Text from '../text';
import styled from '../../../theme';

const StyledLabel = styled.div`
  min-width: 200px;
  font-size: 1rem;
  margin-top: 1rem;
  padding-left: 0.5rem;
  padding-bottom: 0.3rem;
`;

class Label extends React.Component {
  render() {
    const { bold, children } = this.props;

    return (
      <StyledLabel>
        <Text
          bold={bold || false}
          tag="label"
          textStyle="label"
          {...this.props}
        >
          {children}
        </Text>
      </StyledLabel>
    );
  }
}

export default Label;

