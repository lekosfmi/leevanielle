
export function Sidebar({isHidden}) {
  const className = isHidden && 'toggled';
  return (
    <nav className={`sidebar ${className}`}>
      <div className="sidebar-content">
        {/*
        <a className="sidebar-brand" href="/">
          <img style={{height:'30px',width:'30px'}}src="https://www.svgrepo.com/show/147519/kanji-character.svg" intrinsicsize="512 x 512" width="180" height="180" srcset="https://www.svgrepo.com/show/147519/kanji-character.svg 4x" alt="Kanji Character SVG Vector" title="Kanji Character SVG Vector" />
          <span className="align-middle">彩雲</span>
        </a> */}
        <span className="sidebar-brand"></span>

        <ul className="sidebar-nav">
          <li className="sidebar-item">
            <ul id="item" className="sidebar-dropdown list-unstyled">
              <li className="sidebar-item "><a className="sidebar-link" href="/forms/layouts">Project 1 </a></li>
              <li className="sidebar-item "><a className="sidebar-link" href="/forms/basic-elements">Project 2 </a></li>
              <li className="sidebar-item "><a className="sidebar-link" href="/forms/advanced-elements">Project 3 </a></li>
              <li className="sidebar-item "><a className="sidebar-link" href="/forms/input-groups">Project 4 </a></li>
              <li className="sidebar-item "><a className="sidebar-link" href="/forms/editors">Project 5 </a></li>
            </ul>
          </li>
        </ul>
      </div>
   </nav>
  );
}
