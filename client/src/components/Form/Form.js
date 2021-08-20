import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    catName: "",
    breed: "",
    description: "",
    tags: "",
    selectedFile: "",
  });
  // To update posts with same id as current id.
  const post = useSelector((state) =>
    currentId ? state.posts.find((description) => description._id === currentId) : null
  );
  const dispatch = useDispatch();
  const classes = useStyles();
  // When post changes, run function - if posts exists, then set post data.
  // Then populate data with post.
  useEffect(() => {
  // Callback function as first parameter in useEffect.
    if (post) setPostData(post);
  // Then second parameter as a dependancy array.
  }, [post]);

  // Clear form after adding or editing form
  const clear = () => {
    setCurrentId(0);
    setPostData({
      catName: "",
      breed: "",
      description: "",
      tags: "",
      selectedFile: "",
    });
  };
  // Once user submits, send over all data the user typed in
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post.breed}"` : "Add Cat"}
        </Typography>
        <TextField
          name="catName"
          variant="outlined"
          label="Cat Name"
          fullWidth
          value={postData.catName}
          onChange={(e) =>
            setPostData({ ...postData, catName: e.target.value })
          }
        />
        <TextField
          name="breed"
          variant="outlined"
          label="Breed"
          fullWidth
          value={postData.breed}
          onChange={(e) => setPostData({ ...postData, breed: e.target.value })}
        />
        <TextField
          name="description"
          variant="outlined"
          label="description"
          fullWidth
          multiline
          rows={4}
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
