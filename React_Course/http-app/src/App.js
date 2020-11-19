import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import http from "./services/httpService";
import config from "./config.json";
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    //const promise = http.get("https://jsonplaceholder.typicode.com/posts");
    //const response = await promise;

    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    //console.log("Add");
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);
    console.log(post);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    // console.log("Update", post);
    post.title = "Updated";
    await http.put(config.apiEndpoint + "/" + post.id, post); // put update all properties while patch update one or more properties
    //await http.patch(config.apiEndpoint + "/" + post.id, { title: post.title });

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async (post) => {
    //console.log("Delete", post);

    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.delete(config.apiEndpoint + "/" + post.id);
      //throw new Error('')
    } catch (ex) {
      // Expected (404: not found, 400:bad request) - CLIENT ERRORS
      // - Display a specific error message to the user

      if (ex.response && ex.response.status === 404)
        alert("this post has already been deleted.");
      // Unexpected (network down , server down, database down, bug)
      // - Log them
      // - Display a generic and friendly error message to the user

      //alert("Something failed while deleting a post!");
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer/>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
     
      </React.Fragment>

    );
  }
}

export default App;
