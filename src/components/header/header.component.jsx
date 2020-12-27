


export function Header() {

  return (
    <div className="header">
      <img
        className="avatar d-block"
        src="https://res.cloudinary.com/https-platform-odecloud-com/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,b_rgb:262c35/v1609047534/production/tasks/comments/l7hz8csr2hbjgipm3zqc.jpg"
      />
      <h1 className="header-title">Vanielle Lee</h1>
      <p className="header-subtitle">
        <span className="badge rounded-pill bg-dark mr-1">JavaScript</span>
        <span className="badge rounded-pill bg-dark mr-1">Python</span>
        <span className="badge rounded-pill bg-dark mr-1">Node</span>
        <span className="badge rounded-pill bg-dark mr-1">TypeScript</span>
        <span className="badge rounded-pill bg-dark mr-1">ReactJS</span>
        <span className="badge rounded-pill bg-dark mr-1">Angular</span>
        <span className="badge rounded-pill bg-dark mr-1">Meteor</span>
        <span className="badge rounded-pill bg-dark mr-1">Flask</span>
        <span className="badge rounded-pill bg-dark mr-1">API Dev</span>
        <span className="badge rounded-pill bg-dark mr-1">Big Data</span>
        <span className="badge rounded-pill bg-dark mr-1">Jasmine</span>
      </p>

      <p className="mt-4" style={{"fontSize": 18}}>Currently @ <a href="https://www.forbes.com/sites/jonyounger/2020/11/23/meet-another-freelance-innovator-odecloud-a-netsuite-expert-community/?sh=71c2b2cc4482">OdeCloud, Inc</a></p>
      <ul style={{'paddingLeft': 10}}>
        - <a href="https://www.forbes.com/sites/jonyounger/2020/11/23/meet-another-freelance-innovator-odecloud-a-netsuite-expert-community/?sh=f88c3794482b">Meet Another Freelance Innovator: OdeCloud, A NetSuite Expert Community</a>
      </ul>

      <p style={{width:'30em'}} className="mt-4 text-break header-subtitle">
        Software engineer with experiences developing Big Data, Artificial Intelligent focused applications—from conceptualization to commercialization serving Fortune 1000/500 customers.
      </p>
      <p style={{width:'30em'}} className="mt-4 text-break header-subtitle">
        I am also a digital nomad, who have lived and also traveled across 25+ countries.
      </p>
    </div>
  );
}
