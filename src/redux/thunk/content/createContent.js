import { createContent, isUpload } from "../../actions/contentActions";

const createContentData = (content) => {
  return async (dispatch, getState) => {
    await fetch(`http://localhost:5000/place`, {
      method: "POST",
      body: JSON.stringify(content),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          dispatch(createContent({ _id: data.insertedId, ...content }));
          dispatch(isUpload(true));
        }
      });
  };
};

export default createContentData;
