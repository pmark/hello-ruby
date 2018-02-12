import { findDOMNode } from 'react-dom';
import layers from './layers';
import palettes from './palettes';

const svgDoc = (svg) => findDOMNode(svg).contentDocument;

export const makeButton = (svg, selector, primaryCallback, secondaryCallback) => {
  const element = svgDoc(svg).querySelector(selector);

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
  });
}

const nextShape = (svg, currentIndex, layer) => {
    const doc = svgDoc(svg);
    const currentElements = doc.querySelectorAll(layer[currentIndex])
    currentElements.forEach(el => el.style.display = 'none')

    const newIndex = currentIndex >= layer.length - 1 ? 0 : currentIndex + 1;
    const newElements = doc.querySelectorAll(layer[newIndex])
    newElements.forEach(el => el.style.display = 'block')

    return newIndex;
};

export const nextHairShape = (svg, currentIndex) =>
  nextShape(svg, currentIndex, layers.hair);

export const nextBodyShape = (svg, currentIndex) =>
  nextShape(svg, currentIndex, layers.body);

export const nextClothesShape = (svg, currentIndex) =>
  nextShape(svg, currentIndex, layers.clothes);

const nextColor = (svg, currentIndex, layer, palette) => {
    const newIndex = currentIndex >= palette.length - 1 ? 0 : currentIndex + 1;
    const doc = svgDoc(svg);
    const currentElements = doc.querySelectorAll(layer.join(','))
    currentElements.forEach(el => {
      el.setAttribute('fill', palette[newIndex]);
      el.querySelectorAll('*').forEach(c => c.setAttribute('fill', palette[newIndex]));
    })

    return newIndex;
};


export const nextHairColor = (svg, currentIndex) =>
  nextColor(svg, currentIndex, layers.hair, palettes.hair);

export const nextBodyColor = (svg, currentIndex) =>
  nextColor(svg, currentIndex, layers.body, palettes.body);

export const nextClothesColor = (svg, currentIndex) =>
  nextColor(svg, currentIndex, layers.clothes, palettes.clothes);
