const goGetTodos = async () => {
  const response = await fetch("http://jsonplaceholder.typicode.com/todos");
  if (response.status !== 200) {
    throw new Error("Can't fetch the data");
  }
  const data = await response.json();
  return data
};

goGetTodos()
  .then(data => console.log("resolved", data))
  .catch(err => console.log("reject", err.message));



const getPhotos = async () => {
    const response = await fetch("http://jsonplaceholder.typicode.com/photos")
    if (response.status !== 200) {
        throw new Error("Can't fetch data")
    }
    const data = await response.json()
    return data
}

getPhotos()
    .then(data => console.log("resolved", data))
    .catch(err => console.log("reject", err.message));