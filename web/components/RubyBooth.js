import { Component } from 'react';

const w = typeof window === 'undefined' ? {} : window;

class RubyBooth extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
          <div className='mask'>
          </div>
          <div className='guts' style={{background:'none'}}>
            <object type='image/svg+xml' data='/static/RubysGame.svg' style={svgStyle}>
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
