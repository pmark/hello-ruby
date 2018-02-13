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
        <RubySVG width={this.state.width} height={this.state.height} />
        <style jsx>{`
          .footer {
            width: 100%;
            text-align: center;
            border: 1px solid red;
          }

          .footer div {
            margin: 0 auto;
            text-align: left;
          }

          section {
            width: 100%;
            height: 100%;
            margin: 35px auto 0;
          }
          .guts {
            position: relative;
          }
          p {
          }
        `}</style>
      </section>
    )
  }
}

export default RubyBooth;
