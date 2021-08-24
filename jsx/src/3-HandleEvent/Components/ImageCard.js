import React from "react";
class ImageCard extends React.Component {
  // * FIXME IMPORTANT in react rather than use the regular DOM they use there own
  //  * so rather then dqs or dqa or any vanilla js we have Ref
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    // * we have to define it in the constructor
    // * and when we define constructor we have to pass props and define super
    this.imageRef = React.createRef();
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const imageHeight = this.imageRef.current.clientHeight;
    const spans = Math.ceil(imageHeight / 9.5);
    console.log(spans);
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    // * finlay we have to pass it as prop to the element
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard;
