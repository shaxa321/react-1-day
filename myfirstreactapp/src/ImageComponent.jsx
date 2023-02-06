import { Component } from "react";

class ImageComponent extends Component() {
  render() {
    console.log(this.props.sorgente);
    return <img src={this.props.sorgente} alt="ciao" />;
  }
}

export default ImageComponent;
