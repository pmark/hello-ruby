import { Component } from 'react';
import { findDOMNode } from 'react-dom';

// See 'https://www.dropbox.com/s/ll8wqvsdmp2e6fp/RubysGame.svg?dl=0';
const svgRubysGame = '/static/RubysGame.svg';

class RubySVG extends Component {
  constructor(props) {
    super(props);
    this.svg = null;
  }

  componentDidMount() {
    // var el = findDOMNode(this.props.svg);
    // var shape = el && el.contentDocument.querySelector('#OtherShape')
    // shape && shape.setAttribute('opacity', 0)
  }

  render() {
    console.log('this.props', this.props);
    const screenWidth = this.props.width;
    const screenHeight = this.props.height;
    const w = screenWidth * 0.8;
    const h = screenHeight * 0.7;
    const frameWidth = Math.min(h, w);
    const maskRadius = frameWidth / 2.0;
    const cx = (screenWidth / 2.0);

    return (
      <div>
        <object type='image/svg+xml' data={svgRubysGame} ref={(n) => { this.svg = n; } }>
          Your browser does not support SVG
        </object>
        <style jsx>{`
          object {
            background: transparent;
            position: relative;
            width: ${frameWidth}px;
            left: ${cx - frameWidth / 2}px;
            top: ${frameWidth * -0.15}px;
          }
        `}</style>

      </div>
    );
  }
}

export default RubySVG;
