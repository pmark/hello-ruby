import { Component } from 'react';
// import { findDOMNode } from 'react-dom';
import {
  initColors,
  makeButton,
  nextHairShape,
  nextFaceShape,
  nextClothesShape,
  nextHairColor,
  nextFaceColor,
  nextClothesColor,
} from '../helpers/ruby-svg-util';

// See 'https://www.dropbox.com/s/ll8wqvsdmp2e6fp/RubysGame.svg?dl=0';
// const svgRubysGame = 'https://dl.dropboxusercontent.com/content_link/DgVwSECkWyCD4AyKBVwdxwWAe1uhTqhLwmfqTr1eKsCz5igdVcLOh5I2hNYHF2fr/file';
const svgRubysGame = '/static/RubysGame.svg';

///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////

class RubySVG extends Component {
  constructor(props) {
    super(props);
    this.svg = null;
  }

  state = {
    hairShapeIndex: 0,
    faceShapeIndex: 0,
    clothesShapeIndex: 0,
    hairColorIndex: 0,
    faceColorIndex: 0,
    clothesColorIndex: 0,
  };

  componentDidMount() {
    // init hair, face, clothes with default colors
    initColors(this.svg);
  }

  componentDidUpdate() {
    if (!this.state.ready) {
      console.log('---------- BUTTONS NOT READY ------------');
      this.makeButtons();
    }
  }

  makeButtons() {
    makeButton(
      this.svg,
      '#Buttons #B1',
      this.hairShapeClicked.bind(this),
      this.hairColorClicked.bind(this));
    makeButton(
      this.svg,
      '#Buttons #B2',
      this.faceChangerClicked.bind(this),
      this.faceChangerClicked.bind(this));
    makeButton(
      this.svg,
      '#Buttons #B3',
      this.clothesShapeClicked.bind(this),
      this.clothesColorClicked.bind(this));
  }

  hairShapeClicked() {
    const hairShapeIndex = nextHairShape(this.svg, this.state.hairShapeIndex)
    this.setState({ hairShapeIndex, ready: this.state.hairShapeIndex !== hairShapeIndex })
  }

  faceShapeClicked() {
    const faceShapeIndex = nextFaceShape(this.svg, this.state.faceShapeIndex)
    this.setState({ faceShapeIndex, ready: this.state.faceShapeIndex !== faceShapeIndex })
  }

  clothesShapeClicked() {
    const clothesShapeIndex = nextClothesShape(this.svg, this.state.clothesShapeIndex)
    this.setState({ clothesShapeIndex, ready: this.state.clothesShapeIndex !== clothesShapeIndex })
  }

  hairColorClicked() {
    const hairColorIndex = nextHairColor(this.svg, this.state.hairColorIndex)
    this.setState({ hairColorIndex, ready: this.state.hairColorIndex !== hairColorIndex })
  }

  faceColorClicked() {
    const faceColorIndex = nextFaceColor(this.svg, this.state.faceColorIndex)
    this.setState({ faceColorIndex, ready: this.state.faceColorIndex !== faceColorIndex })
  }

  clothesColorClicked() {
    const clothesColorIndex = nextClothesColor(this.svg, this.state.clothesColorIndex)
    this.setState({ clothesColorIndex, ready: this.state.clothesColorIndex !== clothesColorIndex })
  }

  faceChangerClicked() {
    const faceColorIndex = nextFaceColor(this.svg, this.state.faceColorIndex)
    const faceShapeIndex = nextFaceShape(this.svg, this.state.faceShapeIndex)
    this.setState({
      faceColorIndex,
      faceShapeIndex,
      ready: this.state.faceShapeIndex !== faceShapeIndex,
    });
  }

  render() {
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
