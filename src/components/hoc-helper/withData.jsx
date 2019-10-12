import React, { Component } from "react";
import Loader from "../loader";

function withData(View, getData) {
  return class extends Component {
    state = {
      itemList: null
    };
    componentDidMount() {
      getData().then(itemList => {
        this.setState({
          itemList
        });
      });
    }
    render() {
      const { itemList } = this.state;

      if (!itemList) {
        return <Loader />;
      }
      return <View {...this.props} itemList={itemList} />;
    }
  };
}
export default withData;
