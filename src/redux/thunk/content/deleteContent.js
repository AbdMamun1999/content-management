import { deleteContent, openDeleteModal } from "../../actions/contentActions";

const deleteContentById = (id) => {
  return async (dispatch, getState) => {
    fetch(`http://localhost:5000/places/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          dispatch(deleteContent(id));
          dispatch(openDeleteModal(false));
        }
      });
  };
};

export default deleteContentById;
