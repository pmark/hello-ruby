import { Component } from 'react';
import { findDOMNode } from 'react-dom';

// See 'https://www.dropbox.com/s/ll8wqvsdmp2e6fp/RubysGame.svg?dl=0';
const svgRubysGame = '/static/RubysGame.svg';

const w = typeof window === 'undefined' ? {} : window;

const Clickers = (props) => {
  console.log('Clicker props', props);
  const hairClicked = () => {
    console.log('hair was clicked ^_');
    var el = findDOMNode(props.svg);
    //.getElementById('Shape');
    console.log('el', el);
  }
  const faceClicked = () => {
    console.log('face was clicked ^_');
  }
  const clothesClicked = () => {
    console.log('clothes were clicked ^_');
  }
  return (
    <div>
      <div id='clickers'>
        <div id='hair-clicker' onClick={hairClicked}></div>
        <div id='face-clicker' onClick={faceClicked}></div>
        <div id='clothes-clicker' onClick={clothesClicked}>C</div>
      </div>

        <style jsx>{`
          #clickers {
            display: flex;
            flex-direction: column;
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 10;
          }
          #clickers div {
            border: none;
            height:100%;
            width: 100%;
          }
        `}</style>
      </div>
  );
}

class RubyBooth extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.svg = null;
  }

  componentDidMount() {
    this.updateWindowDimensions();
    w.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    w.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: w.innerWidth, height: w.innerHeight });
  }

  clickHandler = (e) => {
    console.log('e', e);
  };

  render() {
    const screenWidth = this.state.width;
    const screenHeight = this.state.height;
    const w = screenWidth * 0.8;
    const h = screenHeight * 0.7;
    const frameWidth = Math.min(h, w);
    //const frameWidth = screenWidth * 0.95;
    const maskRadius = frameWidth / 2.0;
    const cx = (screenWidth / 2.0);

    const svgStyle = {
      width: frameWidth,
      position: 'relative',
      left: cx - frameWidth / 2,
      top: -frameWidth * 0.15,
      background: 'transparent',
    }
    return (
      <div style={{height:'100%'}}>
        <section>
          <Clickers svg={this.svg} />
          <div className='guts' style={{background:'none'}}>
            <object type='image/svg+xml' data={svgRubysGame} style={svgStyle} onClick={this.clickHandler}
              ref={(n) => { this.svg = n; } }>
              <svg width={screenWidth} height={maskRadius * 2.0}>
                <defs>
                  <clipPath id='circle-mask'>
                    <circle
                      cx={cx}
                      cy={maskRadius}
                      r={maskRadius}
                      stroke='#efefef'
                      strokeWidth='1'
                      fill='none'
                    />
                  </clipPath>
                </defs>
              </svg>

              Your browser does not support SVG
            </object>
          </div>
        </section>
        <style jsx>{`
          section {
            position: relative;
            width: 100%;
            height: 100%;
            margin: 0 auto;
          }

          .mask {
            position: absolute;
          }

          .guts {
            position: absolute;
          }
        `}</style>
      </div>
    )
  }
}

export default RubyBooth;
