import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentListControls from "./AssignmentListControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";

export default function Assignments() {
  return (
    <div id="wd-assignments" style={{ padding: "20px" }}>
      <AssignmentControls />
      <br />
      <br />

      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
          <div
            className="wd-assignments-title p-3 ps-2 bg-secondary"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <IoMdArrowDropdown />
              <b>ASSIGNMENTS</b>
            </div>

            <span
              style={{
                border: "1px solid #000",
                borderRadius: "50px",
                padding: "10px",
                marginLeft: "60%",
              }}
            >
              40% of Total
            </span>
            <AssignmentControlButtons />
          </div>

          <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <AssignmentListControls />
              <div
                style={{
                  flexGrow: 1,
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  textAlign: "left",
                }}
              >
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A1 - ENV + HTML
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b> Not Available until </b> May 6 at 12:00am |
                <br />
                <b>Due</b> May 13 at 11:59pm | 100 pts
              </div>
              <LessonControlButtons />
            </div>
          </li>

          <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <AssignmentListControls />
              <div
                style={{
                  flexGrow: 1,
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  textAlign: "left",
                }}
              >
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A2 - CSS + BOOTSTRAP
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b> Not Available until </b> May 13 at 12:00am |
                <br />
                <b>Due</b> May 20 at 11:59pm | 100 pts
              </div>
              <LessonControlButtons />
            </div>
          </li>

          <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <AssignmentListControls />
              <div
                style={{
                  flexGrow: 1,
                  paddingLeft: "2%",
                  paddingRight: "2%",
                  textAlign: "left",
                }}
              >
                <a
                  className="wd-assignment-link"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A3 - JAVASCRIPT + REACT
                </a>
                <br />
                <span className="text-danger">Multiple Modules</span> |{" "}
                <b> Not Available until </b> May 20 at 12:00am |
                <br />
                <b>Due</b> May 27 at 11:59pm | 100 pts
              </div>
              <LessonControlButtons />
            </div>
          </li>
        </li>
      </ul>
    </div>
  );
}
