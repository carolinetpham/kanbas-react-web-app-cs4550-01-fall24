import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find((a) => a._id === aid);

  return (
    <div id="wd-assignments-editor" style={{ padding: "20px" }}>
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          <b>Assignment Name</b>
        </label>
        <input
          id="wd-name"
          type="text"
          className="form-control"
          value={assignment?.title}
          readOnly
        />
      </div>

      <div className="mb-3">
        <textarea
          id="wd-description"
          className="form-control"
          rows={5}
          value="The assignment is available online. Please submit a link to your completed work."
          readOnly
        />
      </div>

      <div className="row mb-3">
        <div className="col-sm-2 text-end align-middle">
          <label htmlFor="wd-points" className="form-label">
            Points
          </label>
        </div>
        <div className="col-sm-10">
          <input
            id="wd-points"
            type="number"
            className="form-control"
            value="100"
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-2 text-end align-middle">
          <label htmlFor="wd-group" className="form-label">
            Assignment Group
          </label>
        </div>
        <div className="col-sm-10">
          <select id="wd-group" className="form-control">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-2 text-end align-middle">
          <label htmlFor="wd-display-grade-as" className="form-label">
            Display Grade as
          </label>
        </div>
        <div className="col-sm-10">
          <select id="wd-display-grade-as" className="form-control">
            <option value="DISPLAY">Percentage</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-2 text-end align-middle">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
        </div>
        <div className="col-sm-10">
          <div className="form-control d-flex flex-column p-3">
            <select id="wd-submission-type" className="mb-3 form-control">
              <option value="SUBMISSION-TYPE">Online</option>
            </select>
            <div>
              <b>Online Entry Options</b>
              <div>
                <input
                  type="checkbox"
                  id="wd-text-entry"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="wd-website-url"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="wd-file-upload"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-sm-2 text-end align-middle">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign to
          </label>
        </div>
        <div className="col-sm-10">
          <div className="form-control p-3">
            <b>Assign to</b>
            <input
              id="wd-assign-to"
              value="Everyone"
              className="mb-3 form-control"
              readOnly
            />
            <div className="row">
              <div className="col-sm-6">
                <label
                  htmlFor="wd-due-date"
                  className="form-label"
                  style={{ marginRight: "10px" }}
                >
                  <b>Due</b>
                </label>
                <input type="date" id="wd-due-date" value="2024-05-13" />
              </div>
              <div className="col-sm-6">
                <label
                  htmlFor="wd-available-from"
                  className="form-label"
                  style={{ marginRight: "10px" }}
                >
                  <b>Available from</b>
                </label>
                <input type="date" id="wd-available-from" value="2024-05-06" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end mt-3">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-danger"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
