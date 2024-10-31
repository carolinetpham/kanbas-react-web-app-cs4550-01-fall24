import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse } from "./reducer";
export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector(
    (state: any) => state.enrollmentReducer.enrollments
  );
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const toggleEnrollmentView = () => {
    setShowAllCourses(!showAllCourses);
  };

  const handleEnroll = (courseId: any) => {
    dispatch(enrollCourse(courseId));
  };

  const handleUnenroll = (courseId: any) => {
    dispatch(unenrollCourse(courseId));
  };

  const displayedCourses =
    currentUser.role === "FACULTY"
      ? courses
      : showAllCourses
      ? courses
      : courses.filter((course) => enrollments.includes(course._id));

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
            >
              Update
            </button>
          </h5>
          <br />
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <hr />
        </>
      )}
      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={toggleEnrollmentView}
        >
          {showAllCourses ? "Show Enrolled Courses" : "Show All Courses"}
        </button>
      )}

      <h2>Published Courses ({displayedCourses.length})</h2>
      <hr />

      <div className="row row-cols-1 row-cols-md-5 g-4">
        {displayedCourses.map((course) => (
          <div key={course._id} className="col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                to={
                  currentUser.role === "STUDENT" &&
                  enrollments.includes(course._id)
                    ? "/Dashboard"
                    : `/Kanbas/Courses/${course._id}/Home`
                }
                className="text-decoration-none text-dark"
              >
                <img
                  src="/images/full-stack-developer.jpg"
                  width="100%"
                  height={160}
                  alt="course"
                />
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p
                    className="card-text overflow-y-hidden"
                    style={{ maxHeight: 100 }}
                  >
                    {course.description}
                  </p>
                  {currentUser.role === "STUDENT" && (
                    <div>
                      {enrollments.includes(course._id) ? (
                        <button
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.preventDefault();
                            handleUnenroll(course._id);
                          }}
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={(e) => {
                            e.preventDefault();
                            handleEnroll(course._id);
                          }}
                        >
                          Enroll
                        </button>
                      )}
                    </div>
                  )}
                  {currentUser.role === "FACULTY" && (
                    <>
                      <button
                        className="btn btn-danger float-end"
                        onClick={(e) => {
                          e.preventDefault();
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-warning float-end me-2"
                        onClick={(e) => {
                          e.preventDefault();
                          setCourse(course);
                        }}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
