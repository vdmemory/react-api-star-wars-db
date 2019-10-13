import React, { Component } from "react";
import Loader from "../loader";

function withData(View) {
  return class extends Component {
    state = {
      itemList: null
    };
    componentDidMount() {
      this.updateItem();
    }
    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.updateItem();
      }
    }
    updateItem() {
      this.props.getData().then(itemList => {
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
