import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentListControls from "./AssignmentListControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === cid
  );

  return (
    <div id="wd-assignments" style={{ padding: "20px" }}>
      <AssignmentControls />
      <br />
      <br />

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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "auto",
          }}
        >
          <span className="border border-dark rounded p-1">40% of Total</span>
          <AssignmentControlButtons />
        </div>
      </div>
      <ul id="wd-assignments-list" className="list-group rounded-0">
        {courseAssignments.map((assignment, index) => (
          <li
            key={index}
            className="wd-assignment-list-item list-group-item p-3 ps-1 border-bottom"
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
              <Link
                className="wd-assignment-link"
                to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
              >
                {assignment.title}
              </Link>
              <br />
              <span className="text-danger">Multiple Modules</span> |{" "}
              <b> Not Available until </b> May 6 at 12:00am |
              <br />
              <b>Due</b> May 13 at 11:59pm | 100 pts
            </div>
            <LessonControlButtons />
          </li>
        ))}
      </ul>
    </div>
  );
}
