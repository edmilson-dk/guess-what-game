import jsIcon from '../assets/icons/js.svg';
import tsIcon from '../assets/icons/ts.svg';
import reactIcon from '../assets/icons/reactjs.svg'

const icons = [
  jsIcon,
  jsIcon,
  jsIcon,
  jsIcon,
  tsIcon,
  tsIcon,
  tsIcon,
  tsIcon,
  reactIcon,
  reactIcon,
  reactIcon,
  reactIcon,
];

const newArray = []

while (icons.length) {
  const index = Math.floor(Math.random() * icons.length - 1);
  const [item] = icons.splice(index, 1);

  newArray.push(item)
}

export default newArray;
