import React, { Component } from "react";
import axios, { AxiosResponse } from "axios";
import "./Post.css";

export interface PostProps {}

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}
export interface PostState {
  posts: IPost[];
  postDetails: IPost | {};
}

class Post extends Component<PostProps, PostState> {
  constructor(props: PostProps) {
    super(props);
    this.state = {
      posts: [],
      postDetails: {},
    };
  }

  async componentDidMount() {
    const posts: AxiosResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({ posts: posts.data });
  }

  async getPostDetails(postId: number) {
    try {
      const postDetails: AxiosResponse = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + postId
      );
      if (postDetails.data) {
        this.setState({ postDetails: postDetails.data });
      }
    } catch (e) {
      console.log((e as any).toString());
    }
  }

  render() {
    return (
      <div>
        <h1>Clicked Posts:</h1>
        <br />
        {(this.state.postDetails as IPost).id ? (
          <div className="Post-wrapper">
            <div className="Post-title">
              {(this.state.postDetails as IPost).title}
            </div>
            <div className="Post-body">
              {(this.state.postDetails as IPost).body}
            </div>
            <div className="Post-user">
              {(this.state.postDetails as IPost).userId}
            </div>
          </div>
        ) : null}
        <br />
        <div className="Post-container">
          {this.state.posts.map((post: IPost) => {
            return (
              <div className="Post-wrapper" key={post.id}>
                <div
                  className="Post-title"
                  onClick={() => {
                    this.getPostDetails(post.id);
                  }}
                >
                  {post.title}
                </div>
                <div className="Post-body">{post.body}</div>
                <div className="Post-user">{post.userId}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Post;
