module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
const success = item.enhancement + 1;
if(item.enhancement === 20){
  return item
}else{
  return { ...item, enhancement: success};
}
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
