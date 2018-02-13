import { findDOMNode } from 'react-dom';

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
