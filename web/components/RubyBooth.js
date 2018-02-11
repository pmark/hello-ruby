import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import RubySVG from './RubySVG';

const w = typeof window === 'undefined' ? {} : window;

const Clickers = (props) => {
  const hairClicked = () => {
    console.log('hair was clicked ^_');
    var el = findDOMNode(props.svg);
    var shape = el.contentDocument.querySelector('#OtherShape')
    shape && shape.setAttribute('opacity', 0)
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
        <div id='clothes-clicker' onClick={clothesClicked}></div>
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
    return (
      <section>
        <div className='guts'>
          <RubySVG width={this.state.width} height={this.state.height} />
        </div>
      <style jsx>{`
        section {
          position: relative;
          top: 70px;
          width: 100%;
          height: 100%;
          margin: 0 auto;
        }
        .guts {
          position: absolute;
        }
      `}</style>
    </section>
    )
  }
}

export default RubyBooth;
