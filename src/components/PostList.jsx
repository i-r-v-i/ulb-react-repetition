import PostItem from "./PostItem";

function PostList({ posts, title, removeCb }) {
  if(!posts.length) {
    return (
        <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>
    )
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => 
        <PostItem removeCb={removeCb} number={index + 1} post={post} key={post.id} />
      )}
    </div>
  );
}

export default PostList;