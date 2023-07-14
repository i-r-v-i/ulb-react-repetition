import React, { useMemo, useState } from "react";
//import Counter from "./components/Counter";
import "./app.css";
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";

function App() {
  // посты с сервера
  const [posts, setPosts] = useState([
    { id: 1, title: "iii", body: "op" },
    { id: 2, title: "hhh", body: "dwe" },
    { id: 3, title: "rrr", body: "nh" },
    { id: 4, title: "nnn", body: "drt" },
  ]);
//   // выбранный способ сортировки постов
//   const [selectedSort, setSelectedSort] = useState("");
// // содержание поисковой строки
//   const [searchQuery, setSearchQuery] = useState("");


const [filter, setFilter] = useState({sort: '', query: ''})


  // отсортированные посты
    const sortedPosts = useMemo(() => {
    console.log("Отработала");
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);
  
  const sortedAndSearchedPosts = useMemo(() => {
return sortedPosts.filter(post => post[filter.sort]?.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPosts])
  
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  // получаем пост из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  // const sortPosts = (sortValue) => {
  //   setSelectedSort(sortValue);
  // };

  return (
    <div className="App">
      <MyModal>
      <PostForm createCb={createPost} />
      </MyModal>
      <hr style={{ margin: "15px" }}></hr>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList removeCb={removePost} posts={sortedAndSearchedPosts} title="Список постов 1" />
    </div>
  );
}

export default App;