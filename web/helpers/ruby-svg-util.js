import { findDOMNode } from 'react-dom';
import layers from './layers';
import palettes from './palettes';

const svgDoc = (svg) => {
  var parent = findDOMNode(svg);
  if (!parent) {
    console.log('missing svg object', svg);
    return {};
  }
  var doc = parent.contentDocument;
  if (!doc) {
    console.log('missing svg object', parent);
    return {};
  }
  return doc;
};

export const makeButton = (svg, selector, primaryCallback, secondaryCallback) => {
  // document.addEventListener('DOMContentLoaded', function(event) {
    //console.log('\n\ndoc ready\n\n');
    const element = svgDoc(svg).querySelector(selector);
    if (!element) {
      console.log('button element not found:', selector);
      return;
    }

    element.addEventListener('click', (evt) => {
      const target = evt.target;
      const parent = target.parentNode;

      // If parent ID is 'C2' then secondary ID is 'C2b'
      const isSecondary = target.id.replace(parent.id, '') === 'b';
      if (isSecondary) {
        secondaryCallback(target);
      }
      else {
        primaryCallback(parent);
      }
    }
  );
  //});
}

const nextShape = (svg, currentIndex, layer) => {
  try {
    console.log('nextShape currentIndex', currentIndex);
    const doc = svgDoc(svg);
    const currentElements = doc.querySelectorAll(layer[currentIndex])
    currentElements.forEach(el => el.style.display = 'none')

    const newIndex = currentIndex >= layer.length - 1 ? 0 : currentIndex + 1;
    const newElements = doc.querySelectorAll(layer[newIndex])
    newElements.forEach(el => el.style.display = 'block')

    return newIndex;
  }
  catch (err) {
    console.log('nextShape err', err);
    return currentIndex;
  }
};

export const nextHairShape = (svg, currentIndex) =>
  nextShape(svg, currentIndex, layers.hair);

export const nextFaceShape = (svg, currentIndex) =>
  nextShape(svg, currentIndex, layers.face);

export const nextClothesShape = (svg, currentIndex) =>
  nextShape(svg, currentIndex, layers.clothes);

const nextColor = (svg, currentIndex, layer, palette) => {
  try {
    const newIndex = currentIndex >= palette.length - 1 ? 0 : currentIndex + 1;
    const doc = svgDoc(svg);
    const currentElements = doc.querySelectorAll(layer.join(','))
    currentElements.forEach(el => {
      el.setAttribute('fill', palette[newIndex]);
      if (el) {
        el.querySelectorAll('*').forEach(c => c.setAttribute('fill', palette[newIndex]));
      }
    })

    return newIndex;
  }
  catch (err) {
    console.log('nextColor err', err);
    return currentIndex;
  }
};

export const nextHairColor = (svg, currentIndex) =>
  nextColor(svg, currentIndex, layers.hair, palettes.hair);

export const nextFaceColor = (svg, currentIndex) =>
  nextColor(svg, currentIndex, layers.body, palettes.face);

export const nextClothesColor = (svg, currentIndex) =>
  nextColor(svg, currentIndex, layers.clothes, palettes.clothes);

export const initColors = (svg) => {
  nextHairColor(svg, palettes.hair.length-1);
  nextFaceColor(svg, palettes.face.length-1);
  nextClothesColor(svg, palettes.clothes.length-1);
};
