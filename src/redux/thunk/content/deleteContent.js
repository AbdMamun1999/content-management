import { deleteContent } from "../../actions/contentActions";

const deleteContentById = (id) => {
  return async (dispatch, getState) => {
    fetch(`http://localhost:5000/places/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          dispatch(deleteContent(id));
        }
      });
  };
};

export default deleteContentById;
