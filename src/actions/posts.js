import database from '../firebase/firebase';

//Add Post
export const addPost = post => ({
  type: 'ADD_POST',
  post
});

export const startAddPost = (postData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { title = '', body = '' } = postData;

    const post = { title, body };

    database
      .ref(`users/${uid}/posts`)
      .push(post)
      .then(ref => {
        dispatch(
          addPost({
            id: ref.key,
            ...post
          })
        );
      });
  };
};

//Remove Post
export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id
});

export const startRemovePost = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/posts/${id}`)
      .remove()
      .then(() => {
        dispatch(removePost({ id }));
      });
  };
};

//Edit Post
export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
});

export const startEditPost = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/posts/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editPost(id, updates));
      });
  };
};

// SET_POST
export const setPosts = posts => ({
  type: 'SET_POST',
  posts
});

export const startSetPosts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/posts`)
      .once('value')
      .then(snapshot => {
        const posts = [];

        snapshot.forEach(childSnapshot => {
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setPosts(posts));
      });
  };
};
