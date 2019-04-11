import React, { Component } from "react";
import PostInput from "./PostInput/PostInput";
import axios from "../../../axiosInstance";
import classes from "./AddPost.module.css";

class AddPost extends Component {
  state = {
    postForm: {
      title: {
        config: {
          name: "postTitle",
          value: "",
          placeholder: "Enter Title",
          type: "text",
          validation: {
            required: true,
            isValid: false
          }
        },
        inputTitle: "Title"
      },
      content: {
        config: {
          name: "postContent",
          value: "",
          placeholder: "Enter Content",
          type: "text",
          validation: {
            required: true,
            isValid: false
          }
        },
        inputTitle: "Content"
      },
      author: {
        config: {
          name: "postAuthor",
          value: "",
          placeholder: "Enter Author",
          type: "text",
          validation: {
            required: true,
            isValid: false
          }
        },
        inputTitle: "Author"
      }
    },
    postTitle: "",
    postContent: "",
    postAuthor: "",
    isFormValid: false
  };

  postDataHandler = event => {
    event.preventDefault();
    const post = {
      title: this.state.postTitle,
      body: this.state.postContent,
      author: this.state.postAuthor
    };
    axios.post("/posts", post).then(response => {
      console.log(response);
    });
  };
  inputChangeHandler = event => {
    const value = event.target.value;
    const fieldName = event.target.name;
    const fieldKey = fieldName.substring(4, fieldName.legth).toLowerCase();
    let isFormValid = true;
    this.setState(prevState => {
      const updatedPostForm = { ...prevState.postForm };
      const updatedPostFormField = { ...updatedPostForm[fieldKey] };
      updatedPostFormField.config.validation.isValid = value !== "";
      for (let key in prevState.postForm) {
        if (key === fieldKey) {
          isFormValid =
            updatedPostFormField.config.validation.isValid && isFormValid;
        } else {
          isFormValid =
            prevState.postForm[key].config.validation.isValid && isFormValid;
        }
      }
      return {
        [fieldName]: value,
        postForm: { ...prevState.postForm, [fieldKey]: updatedPostFormField },
        isFormValid
      };
    });
  };
  render() {
    const inputs = [];
    for (let key in this.state.postForm) {
      const element = this.state.postForm[key];
      const config = element.config;
      config.value = this.state[key];
      inputs.push(
        <PostInput
          key={key}
          config={config}
          title={element.inputTitle}
          textChangeHandler={this.inputChangeHandler}
        />
      );
    }
    const disabledOrEnabled = !this.state.isFormValid
      ? classes.Disabled
      : classes.Enabled;
    return (
      <div className="card">
        <h2>Add a Post</h2>
        <form onSubmit={this.postDataHandler}>
          {inputs}
          <button
            className={disabledOrEnabled}
            disabled={!this.state.isFormValid}
          >
            Add Post
          </button>
        </form>
      </div>
    );
  }
}

export default AddPost;
