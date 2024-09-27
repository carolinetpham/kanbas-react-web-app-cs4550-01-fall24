import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/1234/Home"
                >
                  <img
                    src="/images/full-stack-developer.jpg"
                    width="100%"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS1234 React JS
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Full Stack software developer
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/4550/Home"
                >
                  <img src="/images/webdev.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS4550 Web Development
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Web Development
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/3200/Home"
                >
                  <img
                    src="/images/database-design.jpg"
                    width="100%"
                    height={160}
                  />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS3200 Database Design
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Database Design
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/4300/Home"
                >
                  <img src="/images/hci.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      IS4300 HCI
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Human Computer Interaction
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/3500/Home"
                >
                  <img src="/images/ood.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS3500 Object-Oriented Design
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Object-Oriented Design
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/3000/Home"
                >
                  <img src="/images/algo.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS3000 Algorithms and Data
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Algorithms and Data
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <div>
                <Link
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  to="/Kanbas/Courses/2500/Home"
                >
                  <img src="/images/fundies.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      CS2500 Fundies 1
                    </h5>
                    <p className="wd-dashboard-course-title card-text">
                      Fundamentals of Computer Science
                    </p>
                    <button className="btn btn-primary"> Go </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
