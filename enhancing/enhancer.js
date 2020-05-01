module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
// const success = item.enhancement + 1;
if(item.enhancement === 20){
  const weapon = {
    name: item.name,
    enhancement: item.enhancement +1,
    durability: item.durability
  };
  return weapon;
}
}

function fail(item) {
  if(item.enhancement < 15){
    return { ...item.durability - 5 };
  }else if(item.enhancement >= 15){
    return{ ...item.durability - 10}
  }else if(item.enhancement > 16){
    return{...item.enhancement - 1}
  }
  
}

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
