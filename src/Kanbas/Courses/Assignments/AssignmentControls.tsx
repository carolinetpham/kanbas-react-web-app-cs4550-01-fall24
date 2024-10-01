import { FaPlus } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
export default function AssignmentControls() {
  return (
    <div id="wd-assignment-controls">
      <button
        id="wd-add-assignment-group"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </button>
      <button
        id="wd-add-assignment"
        className="btn btn-lg btn-secondary me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </button>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          width: "25%",
        }}
      >
        <CiSearch style={{ position: "absolute", left: "10px" }} />
        <input
          id="wd-search-assignment"
          placeholder="Search..."
          className="form-control"
          style={{ paddingLeft: "40px" }}
        />
      </div>
    </div>
  );
}
