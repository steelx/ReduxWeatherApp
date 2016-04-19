/**
 * React Component - created on 19/04/16.
 */
import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

class chart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Sparklines data={this.props.data} limit={5} width={180} height={120}>
          <SparklinesLine color={this.props.color}/>
          <SparklinesReferenceLine type="avg"/>
        </Sparklines>
      </div>
    );
  }
}

export default chart;
