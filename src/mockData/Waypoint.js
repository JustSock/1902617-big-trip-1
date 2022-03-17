import { getRandomInt, getRandomElement, getTime} from '../tools.js';

const cities=['Amsterdam','Chamonix','Geneva','Ekaterinburg'];
const sentences=['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];

const types=['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];
const offersTypes=['Add luggage','Switch to comfort class','Add meal','Choose seats','Travel by train', 'Order Uber', 'Rent a car'];
let ids=0;

const getDestination  = () =>{
  const name = getRandomElement(cities);

  const discNum=getRandomInt(1, 5);
  const description='';
  for (let k=0; k<discNum; k++){
    [description, getRandomElement(sentences)].join(' ');
  }

  const picNum=getRandomInt(1, 5);
  const pictures=[];
  for (let k=0; k<picNum; k++){
    pictures.push({
      src: `http://picsum.photos/300/200?r=${Math.random().toString()}`,
      description: `Somewhere in ${name}`,
    });
  }

  return {
    description,
    name,
    pictures,
  };
};

export const getOffers=(someType)=>{
  const offersNum=getRandomInt(0, 5);
  const offers = [];
  for (let k = 0; k<offersNum; k++){
    offers.push({
      id:k+1,
      title: getRandomElement(offersTypes),
      price:getRandomInt(1,20)*10,
    });
  }
  return {
    type: someType,
    offers,
  };
};

export const getPoint = () =>{
  const type=getRandomElement(types);
  const date_from=getTime(getRandomInt(1, 864)*5);
  const date_to=getTime(getRandomInt(1, 24)*5, date_from);
  return {
    base_price: getRandomInt(0, 1200),
    date_from,
    date_to,
    destination: getDestination(),
    id: (ids++).toString(),
    is_favorite: getRandomInt(0,1)===1,
    offers: getOffers(type),
    type,
  };
};
