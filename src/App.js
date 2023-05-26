import "./App.css";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} from "./services/post";

function App() {
  const responseInfo = useGetAllPostQuery();
  // const responseInfo = useGetPostByIdQuery(11);
  // const responseInfo = useGetPostByLimitQuery(5);
  // const [deletePost, responseInfo] = useDeletePostMutation();
  // const [createPost, responseInfo] = useCreatePostMutation();
  // const [updatePost, responseInfo] = useUpdatePostMutation();

  // const newPost = {
  //   title:'This is new title',
  //   body:'This is New Body',
  //   userId:1,
  // }
  // const updatePostData = {
  //   title:'This is new title',
  //   body:'This is New Body',
  //   userId:1,
  // }
  // const updatePostData = {
  //   id: 1,
  //   title: "This is updated post title",
  //   body: "This is updated post Body",
  //   userId: 1,
  // };

  console.log("Response Information: ", responseInfo);
  console.log("Success: ", responseInfo.isSuccess);
  console.log("Data: ", responseInfo.data);
  console.log("Error: ", responseInfo.isError);
  if (responseInfo.isLoading) return <div>loading....</div>;
  if (responseInfo.isError)
    return <h1>Failed error {responseInfo.error.error}</h1>;

  return (
    ///// Get all data ////////
    <div className="App">
      <h1>Redux ToolKit - RTK (Get All Data)</h1>
      {responseInfo.data.map((post, i) => (
        <div key={i}>
          <h2>
            {post.id} {post.title}
          </h2>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
    ///////////////////////////////////////

    ///// Get Single Data////
    // <div className="App">
    //   <h1>Redux ToolKit - RTK (Get Single Data)</h1>
    //   <h2>
    //     {responseInfo.data.id} {responseInfo.data.title}
    //   </h2>
    //   <p>{responseInfo.data.body}</p>
    // </div>
    /////////////////////////////////////

    ////Get limited data////
    // <div className="App">
    //   <h1>Redux ToolKit - RTK (Get Limited Data)</h1>
    //   {responseInfo.data.map((post, i) => (
    //     <div key={i}>
    //       <h2>
    //         {post.id} {post.title}
    //       </h2>
    //       <p>{post.body}</p>
    //       <hr />
    //     </div>
    //   ))}
    // </div>
    //////////////////////////////////////

    ////Delete Data/////////////////////
    // <div className="App">
    //   <h1>Redux ToolKit - RTK (Deleted Data)</h1>
    //   <button onClick={() => {deletePost(2)}}>Delete post</button>
    // </div>

    ///Add/Create Data /////////
    // <div className="App">
    //   <h1>Redux ToolKit - RTK (Create / Add Data)</h1>
    //   <button onClick={()=>{createPost(updatePostData)}}>Add Post</button>
    // </div>

    ///Updated Data /////////
    // <div className="App">
    //   <h1>Redux ToolKit - RTK (Updated Data)</h1>
    //   <button
    //     onClick={() => {
    //       updatePost(updatePostData);
    //     }}
    //   >
    //     Update Post
    //   </button>
    // </div>
  );
}

export default App;
