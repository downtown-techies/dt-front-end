import * as React from 'react';
import Text from '../text';
import styled from '../../../theme';

const StyledErrorMessage = styled.div`
  min-width: 200px;
`;

class ErrorMessage extends React.Component {
  render() {
    const { bold, children } = this.props;

    return (
      <StyledErrorMessage>
        <Text
          bold={bold || false}
          tag="label"
          textStyle="label"
          {...this.props}
        >
          {children}
        </Text>
      </StyledErrorMessage>
    );
  }
}

export default ErrorMessage;

