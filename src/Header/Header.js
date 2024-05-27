

function Header() {

    return (
    <header>
      <div className="page-title">
        <h3>Social Media Dashboard</h3>
        <p>Total Followers: 23,004</p>
      </div>

      <div className="toggle-container">
        <p>Dark Mode</p>
        <label className="toggle" id="toggle">
          <input className="toggle-checkbox" type="checkbox" />
          <div className="toggle-switch">
          </div>

        </label>
      </div>
    </header>
  );

}









export default Header;
