import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    // Get All Post
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "Get",
      }),
    }),

    //Get Post By ID
    getPostById: builder.query({
      query: (id) => {
        console.log("ID:", id);
        return {
          url: `posts/${id}`,
          method: "Get",
        };
      },
    }),

    // Get Post limited
    getPostByLimit: builder.query({
      query: (num) => {
        console.log("Limit Number: ", num);
        return {
          url: `posts?_limit=${num}`,
          method: "Get",
        };
      },
    }),

    //Delete Post
    deletePost: builder.mutation({
      query: (id) => {
        console.log("Delete ID: ", id);
        return {
          url: `posts/${id}`,
          method: "Delete",
        };
      },
    }),

    //Create / Add Post
    createPost: builder.mutation({
      query: (newPost) => {
        console.log("Create Post: ", newPost);
        return {
          url: `posts`,
          method: "POST",
          body: newPost,
          Headers: {
            "Content-type": "application/json; charset=UFT-8",
          },
        };
      },
    }),

    //Updated Post
    updatePost: builder.mutation({
      query: (updatePostData) => {
        console.log("Updated Post: ", updatePostData);
        const { id, ...data } = updatePostData;
        console.log("Actual Update Post: ", data);
        return {
          url: `posts/${id}`,
          method: "PUT",
          body: data,
          Headers: {
            "Content-type": "application/json; charset=UFT-8",
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
