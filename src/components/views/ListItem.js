import React, { Component } from 'React';
import { AppText } from '../text';
import { CardSection } from '../common';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;
    return (
      <CardSection>
        <AppText style={titleStyle}>{this.props.library.title}</AppText>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

export default ListItem;
