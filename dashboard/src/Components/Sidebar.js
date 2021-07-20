import React from 'react';
import './Sidebar.css';
import image6 from '../images/image5.jpg';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SettingsIcon from '@material-ui/icons/Settings';
import MessageIcon from '@material-ui/icons/Message';


const sidebar = () => {
    return (
        <div className="sidebar">
            <div >
                <img className="profile"src={image6} alt="not"/>
            </div>
            <div style={{color:"white", marginLeft:"60px", marginTop:"15px",marginBottom:"15px",fontSize:"23px"}}>Dr. Meera </div>
            <div style={{color:"white", marginLeft:"60px", marginTop:"15px",marginBottom:"15px"}}>Dentist</div>
            <div className="sidebar-options">
                <div className="home">
                    <div style={{marginRight:"15px",marginTop:"1px"}}><HomeIcon/></div>
                    <div>Home</div>
                </div>

                <div className="dashboard">
                    <div style={{marginRight:"15px",marginTop:"1px"}}><DashboardIcon/></div>
                    <div>Dashboard</div>
                </div>
                

                <div className="dashboard">
                    <div  style={{marginRight:"15px",marginTop:"1px"}}><CalendarTodayIcon/></div>
                    <div>Schedule</div>
                </div>


                <div className="dashboard">
                    <div style={{marginRight:"15px",marginTop:"1px"}}><PermIdentityIcon/></div>
                    <div>Patients</div>
                </div>



                <div className="setting">
                    <div style={{marginRight:"15px",marginTop:"1px"}}><SettingsIcon/></div >
                    setting
                </div>


                <div className="setting">
                    <div style={{marginRight:"15px",marginTop:"1px"}}><MessageIcon/></div>
                    messages
                </div>


            </div>
        </div>
    )
}

export default sidebar;
