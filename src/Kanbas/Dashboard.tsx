import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/full-stack-developer.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/1234/Home"
            >
              CS1234 React JS
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/webdev.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/4550/Home"
            >
              CS4550 Web Development
            </Link>
            <p className="wd-dashboard-course-title">Web Development</p>
            <Link to="/Kanbas/Courses/4550/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/database-design.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/3200/Home"
            >
              CS3200 Database Design
            </Link>
            <p className="wd-dashboard-course-title">Database Design</p>
            <Link to="/Kanbas/Courses/3200/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/hci.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/4300/Home"
            >
              IS4300 Human Computer Interaction
            </Link>
            <p className="wd-dashboard-course-title">
              Human Computer Interaction
            </p>
            <Link to="/Kanbas/Courses/4300/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/ood.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/3500/Home"
            >
              CS3500 Object-Oriented Design
            </Link>
            <p className="wd-dashboard-course-title">Object-Oriented Design</p>
            <Link to="/Kanbas/Courses/3500/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/algo.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/3000/Home"
            >
              CS3000 Algorithms and Data
            </Link>
            <p className="wd-dashboard-course-title">Algorithms and Data</p>
            <Link to="/Kanbas/Courses/3000/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/fundies.jpg" width={200} />
          <div>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/2500/Home"
            >
              CS2500 Fundamentals of Computer Science
            </Link>
            <p className="wd-dashboard-course-title">
              Fundamentals of Computer Science
            </p>
            <Link to="/Kanbas/Courses/2500/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
