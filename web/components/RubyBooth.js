import { Component } from 'react';
// import { findDOMNode } from 'react-dom';
import RubySVG from './RubySVG';

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
