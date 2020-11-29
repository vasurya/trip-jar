import "./Compose.css";
const React = require("react");

function Compose() {
  return (
    <div className="compose container">
      <h1 className="compose_h1">Compose</h1>
      <form>
        <div class="form-group">
          <label for="titlebox">Title</label>
          <input
            type="text"
            class="form-control"
            id="titlebox"
            placeholder="Enter title"
          ></input>
        </div>
        <div class="form-group">
          <label for="durationbox">Duration of trip</label>
          <input
            type="text"
            class="form-control"
            id="durationbox"
            placeholder="Enter duration (to and from dates)"
          ></input>
        </div>
        <div class="form-group">
          <label for="locationbox">Location</label>
          <input
            type="text"
            class="form-control"
            id="locationbox"
            placeholder="Enter Location"
          ></input>
        </div>
        <div class="form-group">
          <label for="descbox">Description</label>
          <textarea
            type="text"
            class="form-control"
            id="descbox"
            placeholder="Describe your trip"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="ratingbox">Rating</label>
          <input
            type="text"
            class="form-control"
            id="titlebox"
            placeholder="Rate your trip out of 5"
          ></input>
        </div>
        <button type="button" className="btn btn-secondary btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Compose;
