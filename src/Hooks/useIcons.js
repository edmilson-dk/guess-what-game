import jsIcon from '../assets/icons/js.svg';
import tsIcon from '../assets/icons/ts.svg';
import reactIcon from '../assets/icons/reactjs.svg';
import angularIcon from '../assets/icons/angular.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import gatsbyIcon from '../assets/icons/gatsby.svg';
import vuejsIcon from '../assets/icons/vuejs.svg';
import reduxIcon from '../assets/icons/redux.svg';
import html5Icon from '../assets/icons/html5.svg';

let elementsCreated = [];
const randomIcons = [
  jsIcon,
  tsIcon,
  reactIcon,
  reduxIcon,
  gatsbyIcon,
  nodejsIcon,
  angularIcon,
  html5Icon,
  vuejsIcon,
];

function generateVectorRandom(vector) {
  const tmpVector = [];
  while (vector.length) {
    const index = Math.floor(Math.random() * vector.length - 1);
    const [item] = vector.splice(index, 1);

    tmpVector.push(item);
  }

  return tmpVector;
}

function duplicateELements(vector, element, count) {
  let index = 0;

  while (index < count) {
    vector.push(element);
    index++;
  }
}

function useIcons() {
  let tmpVector = [];

  let newIconsRandom = generateVectorRandom(randomIcons);
  newIconsRandom.splice(4, 5);
  
  newIconsRandom.forEach(icon => {
    duplicateELements(tmpVector, icon, 3);
  });

  elementsCreated.push(...generateVectorRandom(tmpVector));

  return elementsCreated;
}

export default useIcons;
