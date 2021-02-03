const ranHouse = () => {
  const ranNum = (Math.floor(Math.random() * 4));
  let house = '';
  switch(ranNum) {
    case 0:
      house = 'Slytherin';
      break;
    case 1:
      house = 'Gryffindor';
      break;
    case 2:
      house = 'Hufflepuff';
      break;
    case 3:
      house = 'Ravenclaw';
      break;
  }
  return house;
};

export default ranHouse;
