import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentListControls from "./AssignmentListControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown />
            <b>ASSIGNMENTS</b> 40% of Total
            <AssignmentControlButtons />
          </div>

          <li className="wd-assignment-list-item list-group-item p-3 ps-1 flex-row">
            <AssignmentListControls />
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A1 - ENV + HTML
            </a>
            <br />
            Multiple Modules | <b> Not Available until </b> May 6 at 12:00am |
            <br />
            <b>Due</b> May 13 at 11:59pm | 100 pts
            <LessonControlButtons />
          </li>
          <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A2 - CSS + BOOTSTRAP
            </a>
            <br />
            Multiple Modules | <b> Not Available until </b> May 13 at 12:00am |
            <br />
            <b>Due</b> May 20 at 11:59pm | 100 pts
          </li>
          <li className="wd-assignment-list-item list-group-item p-3 ps-1">
            <a
              className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123"
            >
              A1 - JAVASCRIPT + REACT
            </a>
            <br />
            Multiple Modules | <b> Not Available until </b> May 20 at 12:00am |
            <br />
            <b>Due</b> May 27 at 11:59pm | 100 pts
          </li>
        </li>
      </ul>
    </div>
  );
}
