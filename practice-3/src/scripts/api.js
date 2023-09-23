export const getData = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  });
};
