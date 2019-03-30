import * as React from 'react';
import Text from '../text';
import styled from '../../../theme';

const StyledLabel = styled.div`
  min-width: 200px;
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

