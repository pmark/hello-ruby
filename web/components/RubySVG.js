import { Component } from 'react';
import Footer from './Footer';
// import { findDOMNode } from 'react-dom';
import {
  svgDocIsReady,
  initColors,
  initShapes,
  makeButton,
  nextHairShape,
  nextFaceShape,
  nextClothesShape,
  nextHairColor,
  nextFaceColor,
  nextClothesColor,
} from '../helpers/ruby-svg-util';

// See https://www.dropbox.com/sh/4mphu8n829jei8j/AAC_P8f13HX-OSH7XPYUa5ZCa?dl=0&lst=
const svgRubysGame = '/static/RubysGame.svg';

///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////

class RubySVG extends Component {
  constructor(props) {
    super(props);
    this.svg = null;
    this.buttonMakerTimeout = null;
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
    initShapes(this.svg);
  }

  componentDidUpdate() {
    if (!svgDocIsReady(this.svg)) {
      console.log('svg not ready');
      if (this.buttonMakerTimeout) {
        clearTimeout(this.buttonMakerTimeout);
      }
      this.buttonMakerTimeout = setTimeout(() => {
        this.makeButtons();
      }, 200);
    }
  }

  makeButtons() {
    console.log('making buttons');
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
    const w = screenWidth * 0.85;
    const h = screenHeight * 0.5;
    const frameWidth = Math.min(h, w);
    const maskRadius = frameWidth / 2.0;
    const cx = (screenWidth / 2.0);

    return (
      <div>
        <object type='image/svg+xml' data={svgRubysGame} ref={(n) => { this.svg = n; } }>
          Your browser does not support SVG
        </object>
        <Footer />
        <style jsx>{`
          object {
            background: transparent;
            width: ${frameWidth}px;
          }
        `}</style>

      </div>
    );
  }
}

export default RubySVG;
