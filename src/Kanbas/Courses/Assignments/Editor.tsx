export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          <b>Assignment Name</b>
        </label>
        <input
          id="wd-name"
          type="text"
          className="form-control"
          value="A1 - ENV + HTML"
          readOnly
        />
      </div>
      <div>
        <textarea id="wd-description" className="form-control" rows={5}>
          The assignment is available online Submit a link to the landing page
          of your Web application running on Netlify. The landing page should
          include the following: Your full name and section Links to each of the
          lab assignments Link to the Kanbas application Links to all relevant
          source code repositories The Kanbas application should include a link
          to navigate back to the landing page.
        </textarea>
      </div>
      <div className="row mb-3" style={{ marginTop: "20px" }}>
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
      <div className="row">
        <div className="col-sm-2 text-end align-middle">
          <label htmlFor="wd-submission-type" className="form-label">
            Submission Type
          </label>
        </div>
        <div className="col-sm-10 d-flex">
          <div className="form-control d-flex flex-column p-3">
            <select id="wd-submission-type" className="mb-3 form-control">
              <option value="SUBMISSION-TYPE">Online</option>
            </select>
            <div>
              <b>Online Entry Options</b>
              <div>
                <input
                  type="checkbox"
                  name="check-subtype"
                  id="wd-text-entry"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="wd-text-entry">Text Entry</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="check-subtype"
                  id="wd-website-url"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="wd-website-url">Website URL</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="check-subtype"
                  id="wd-media-recordings"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="check-subtype"
                  id="wd-student-annotation"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="wd-student-annotation">
                  Student Annotation
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="check-subtype"
                  id="wd-file-upload"
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-sm-2 text-end align-middle">
          <label htmlFor="wd-assign-to" className="form-label">
            Assign
          </label>
        </div>
        <div className="col-sm-10 d-flex">
          <div className="form-control d-flex flex-column p-3">
            <b>Assign to</b>
            <input
              id="wd-assign-to"
              value={"Everyone"}
              className="mb-3 form-control"
            />
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label">
                <b>Due</b>
              </label>{" "}
              <div>
                <input type="date" id="wd-due-date" value="2024-05-13" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label htmlFor="wd-available-from" className="form-label">
                  <b>Available from</b>
                </label>{" "}
                <div>
                  <input
                    type="date"
                    id="wd-available-from"
                    value="2024-05-06"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <label htmlFor="wd-available-until" className="form-label">
                  <b>Until</b>
                </label>{" "}
                <div>
                  <input
                    type="date"
                    id="wd-available-until"
                    value="2024-05-20"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
