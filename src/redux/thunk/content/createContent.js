import { createContent } from "../../actions/contentActions";


const createContentData = (content) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/place`, {
      method: "POST",
      body: JSON.stringify(content),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = res.json();
    if (data.acknowledged) {
      dispatch(createContent({ _id: data.insertedId, ...content }));
    }
  };
};

export default createContentData;
