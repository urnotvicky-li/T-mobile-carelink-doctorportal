// src/components/Header.jsx

export default function Header() {
  return (
    <header className="header">
      {/* Patient Info Section */}
      <div className="patient-info-header">
        <div className="patient-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="#E20074" strokeWidth="2"/>
            <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" stroke="#E20074" strokeWidth="2"/>
          </svg>
        </div>
        <div className="patient-details">
          <h1 className="patient-name">Anna D.</h1>
          <div className="patient-meta">
            <span className="patient-id">ID No.: 123456</span>
            <span className="patient-contact">Contact: 1234567890</span>
            <span className="patient-age">Age: 76</span>
            <span className="patient-gender">Gender: Male</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="header-right">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
          <button className="search-button">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="#E20074" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="#E20074" strokeWidth="2"/>
            </svg>
          </button>
        </div>
        
        <button className="add-button">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2"/>
          </svg>
        </button>
        
        <button className="notification-button">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#E20074" strokeWidth="2"/>
            <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#E20074" strokeWidth="2"/>
          </svg>
        </button>
      </div>

      {/* Navigation Breadcrumb */}
      <div className="breadcrumb">
        <span className="breadcrumb-item">Patient List</span>
        <span className="breadcrumb-separator">›</span>
        <span className="breadcrumb-item current">Anna D.</span>
        <span className="edit-patient">Edit Patient</span>
      </div>
    </header>
  );
}