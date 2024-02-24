import ModuleList from '../Modules/list';
import './index.css'; 
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCircleCheck, faFileImport, faFileExport, faCompass, faChartSimple, faBullhorn, faBell, faCircleExclamation, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus as faCalendarPlusRegular, faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons';

function Home() {
  return (
    <div className="home-container">
      <div className="column">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col-lg-4 course-status-container">
      <div className="course-status">
        <h3>Course Status</h3>
        <button type="button" className="gray-button">
          <FontAwesomeIcon icon={faBan} /> Unpublish
        </button>
        <button type="button">
          <FontAwesomeIcon icon={faCircleCheck} /> Published
        </button>
        <br /><br />
        <div><button type="button" className="gray-button">
          <FontAwesomeIcon icon={faFileImport} /> Import Existing Content
        </button></div>
        <div><button type="button" className="gray-button">
          <FontAwesomeIcon icon={faFileExport} /> Import from Commons
        </button></div>
        <div><button type="button" className="gray-button">
          <FontAwesomeIcon icon={faCompass} /> Choose Home Page
        </button></div>
        <div><button type="button" className="gray-button">
          <FontAwesomeIcon icon={faChartSimple} /> View Course Stream
        </button></div>
        <div><button type="button" className="gray-button">
          <FontAwesomeIcon icon={faBullhorn} /> New Announcement
        </button></div>
        <div><button type="button" className="gray-button">
          <FontAwesomeIcon icon={faChartSimple} /> New Analytics
        </button></div>
        <div><button type="button" className="gray-button">
          <FontAwesomeIcon icon={faBellRegular} /> View Course Notifications
        </button></div>

        <br />
        <h5>To Do</h5>
        <hr />
        <div className="todo-item">
          <div className="todo-content">
            <span className="text-alert">Grade A1 ∙ ENV + HTML </span><br />
            <small>100 points ∙ Sep 18 at 11:59pm</small>
          </div>
        </div>

        <br />
        <h5>Coming Up <FontAwesomeIcon icon={faCalendarPlusRegular} /> <span className="text-alert">View Calendar</span></h5>
        <hr />
        <div className="coming-up-item">
          <FontAwesomeIcon icon={faCalendarPlusRegular} />
          <div className="coming-up-content">
            <span className="text-alert">Lecture </span><br />
            <span className="text-small">CS4550.12631.202410<br />Sep 11 at 11:45am</span>
          </div>
        </div>

        <span className="text-more">12 more in the next week ...</span>
      </div>
    </div>
    </div>
  );
}

export default Home;
