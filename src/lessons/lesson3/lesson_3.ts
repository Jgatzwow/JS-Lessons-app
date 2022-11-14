import axios from "axios";

console.log("lesson 3");

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU

// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// just a plug
/*
const jsonPlaceholderAPI = {
  getPosts() {
    axios.get("https://jsonplaceholder.typicode.com/posts/1");
  },
};
*/

async function getPosts() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const data = await response.data;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

async function createPost() {
  const payload = {
    title: "postName",
    body: "bar",
    userId: 1,
  };
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      payload
    );
    const data = await response.data;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

async function updatePost() {
  const payload = {
    id: 101,
    title: "postName12",
    body: "bar12",
    userId: 1,
  };
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      payload
    );
    const data = await response.data;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

async function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();
  /*  const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/101"
        );
        const data = await response.data;
        console.log(data);*/
}

async function deletePost() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.data;
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}
