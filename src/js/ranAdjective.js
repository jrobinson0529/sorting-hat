const ranAdjective = () => {
  const ranNum = (Math.floor(Math.random()*10)+1);
  let adjective = '';
  switch(ranNum) {
    case 1:
      adjective = 'Vile';
      break;
    case 2:
      adjective = 'Defiled';
      break;
    case 3:
      adjective = 'Chosen';
      break;
    case 4:
      adjective = 'Cruel';
      break;
    case 5:
      adjective = 'Grotesque';
      break;
    case 6:
      adjective = 'Abashed';
      break;
    case 7:
      adjective = 'Mighty';
      break;
    case 8:
      adjective = 'Sniveling';
      break;
    case 9:
      adjective = 'Unholy';
      break;
    case 10:
      adjective = 'Disconcerted';
      break;
    }
    return adjective;   
};

export default ranAdjective;
