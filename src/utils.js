export const getName = (name) => {
  console.log('LA EDAD ES DE 14')
  return 14
}

export const getData = async(data) => {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let json = await response.json();
  console.log('json: ', json);

  return json;
}