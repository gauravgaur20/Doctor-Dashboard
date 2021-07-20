import React from "react";
import './main.css';
import image1 from '../images/image.1.png';
import image2 from '../images/image.2.png';
import image3 from '../images/image.3.png';

import image4 from '../images/image.4.png';
import image5 from '../images/image.5.png';
import image6 from '../images/image5.jpg';
import image7 from '../images/image6.jpg';

import SearchIcon from '@material-ui/icons/Search';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ListIcon from '@material-ui/icons/List';

import ViewCompactIcon from '@material-ui/icons/ViewCompact';
import DescriptionIcon from '@material-ui/icons/Description';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


const main = () => {
    return (
        <div className="main">
            <div className="search-bar">
                <SearchIcon/>
                <div>
                    <input id='input' type="text" placeholder="search patients, appoinment etc. " />
                </div>
                <div className="calender">
                    <div><CalendarTodayIcon/></div>
                <div style={{marginLeft:"10px"}}>22 dec 2021</div>
                </div>
                <div className="time">
                    <div style={{marginLeft:"15px"}}><AccessTimeIcon/></div>
                <div style={{marginRight:"15px"}}>10:00am</div>
                </div>
            </div>
            <div className="appo">
                <div className="coming-appoinment">
                    <div style={{display:"flex",backgroundColor:"lightgrey"}}>
                    <div style={{fontFamily:"initial",marginLeft:"20px",marginTop:"5px"}} className="upcoming-appoinment">upcoming appoinment</div>
                    <div className="button2" style={{ backgroundColor: "lightblue", magin: "30px",marginLeft:"40px" ,width:"40px",height:"30px",marginTop:"6px",}}>today </div>
                    </div>
                    <div className="patients-info">
                        
                        <div style={{fontFamily:"initial"}}className="patients-name">
                            Veronica - General check up
                        </div>
                        <div style={{fontFamily:"initial"}}className="patients-time">
                            10:00am -  45min
                        </div>
                        <div style={{fontFamily:"initial"}}className="patients-reports">
                            Medical history ,  Reports
                        </div>
                        <br />
                    </div>


                    <div className="patients1-info">
                        <div style={{fontFamily:"initial"}}className="patients-name">
                        Amy Border - Cosmotology
                        </div>
                        <div style={{fontFamily:"initial"}}className="patients-time">
                            11:00am -  55min
                        </div>
                        <div style={{fontFamily:"initial"}}className="patients-reports">
                            Medical history ,  Reports
                        </div>
                        <br />
                    </div>



                    <div className="patients2-info">
                        <div style={{fontFamily:"initial"}} className="patients-name">
                        Alan Robert - Osteopathy
                        </div>
                        <div style={{fontFamily:"initial"}} className="patients-time">
                            12:45am -  30min
                        </div>
                        <div style={{fontFamily:"initial"}} className="patients-reports">
                            Medical history ,  Reports
                        </div>
                        <br />
                    </div>

                </div>






                <div className="previous-appoinment">


                    <div style={{fontFamily:"initial"}} className="upcoming-appoinment">
                        <div style={{fontFamily:"initial",marginLeft:"20px"}} > previous appoinment </div> </div>
                    <div className="patients3-info">
                        <div style={{fontFamily:"initial"}} className="patients-name">
                            Hunter Richard - Cosnotology
                        </div>
                        <div style={{fontFamily:"initial"}} className="patients-time">
                            10:00am -  45min
                        </div>
                        <div style={{fontFamily:"initial"}} className="patients-reports">
                            Medical history ,  Reports
                        </div>
                        <br />
                    </div>


                    <div className="patients4-info">

                        <div style={{fontFamily:"initial"}}className="patients-name">
                             Jack - Chiropatric
                        </div>
                        <div style={{fontFamily:"initial"}}className="patients-time">
                            10:00am -  45min
                        </div>
                        <div style={{fontFamily:"initial"}}className="patients-reports">
                            Medical history ,  Reports
                        </div>
                        <br />
                    </div>



                    <div className="patients5-info">
                        <div style={{fontFamily:"initial"}}className="patients-name">
                            Ronny parker - Chiropatric
                        </div>
                        <div style={{fontFamily:"initial"}}className="patients-time">
                            10:00am -  45min
                        </div>
                        <div style={{fontFamily:"initial"}}  className="patients-reports">
                            Medical history ,  Reports
                        </div>
                        <br />
                    </div>





                </div>
            </div>

            <div className="screen">
                <div className="top-item">
                    <strong style={{fontSize:"20px",marginLeft:"10px"}}>Dashboard</strong>
                    <div style={{display:"flex", alignItems: "center"}}>
                        <div><ListIcon/></div>
                        <div style={{fontFamily:"initial"}}>List</div>
                    </div>

                    <div style={{display:"flex", alignItems: "center"}}>
                        <div><ViewCompactIcon/></div>
                        <div style={{fontFamily:"initial"}}>Grid</div>
                    </div>
                </div>
                <div className="left">
                    <div className="all-left">
                        <div style={{height:"60px",marginTop:"15px",marginLeft:"10px" ,fontFamily:"initial"}}>
                            New patients
                        </div>
                        <div  style={{fontFamily:"initial",backgroundColor:"azure"}}className="online-patients">
                            <div>
                                <img src={image1} className="image1" alt="no found" />
                            </div>
                            <div>
                                <img src={image2} className="image2" alt="no found" />
                            </div>

                            <div>
                                <img src={image3} className="image3" alt="no found" />
                            </div>
                            <div>
                                <img src={image4} className="image4" alt="no found" />
                            </div>

                            <div>
                                <img src={image5} className="image5" alt="no found" />
                            </div>
                            <div className="number">
                                +6
                            </div>


                            <div className="view-patients">view patients</div>
                        </div>

                        <div className="income">
                            <div className="income-heading">
                                < div className="income-head">
                                    Your income
                                    <br />
                                </div>

    
                            </div>
                            <div className="income-rupee">
                                <div ><AttachMoneyIcon/></div> <div>2323</div></div>


                        </div>

                        
                    </div>







                    {/* middle item  */}


                    <div className="middle">

                        <div className="middle-item">
                            <div style={{fontFamily:"initial",marginLeft:"13px",marginTop:"15px"}}>Medicine Request</div>
                            <div style={{backgroundColor:"azure"}}className="medicine">

                            <div className="first-medicine">
                                <div className="medicine-name" style={{fontFamily:"initial",marginLeft:"10px"}}>
                                    amlodifine
                                </div>

                                <div className="medicine-name" style={{fontFamily:"initial"}}>
                                    50 Nos
                                </div>

                                <div className="medicine-name">
                                    <div className="button"><button style={{backgroundColor:"red",borderRadius:"5px",border:"none"}}>urgent</button></div>
                                </div>

                                <div className="medicine-name" style={{fontFamily:"initial"}}>
                                    3 min ago
                                </div>

                                <div className="medicine-name" style={{fontFamily:"initial",display:"flex",}}>
                                    <div><DescriptionIcon/></div>
                                    <div>purchase order</div>
                                </div>
                            </div >
                




                            <div className="first-medicine">
                                <div className="medicine-name" style={{fontFamily:"initial",marginLeft:"10px"}}>
                                    Cyclobenza
                                </div>

                                <div className="medicine-name" style={{fontFamily:"initial"}}>
                                    50 Nos
                                </div>

                                <div className="medicine-name">
                                    <div className="button"><button style={{backgroundColor:"red",borderRadius:"5px",border:"none"}}>urgent</button></div>
                                </div>

                                <div className="medicine-name" style={{fontFamily:"initial"}}>
                                    2 hour ago
                                </div>

                                <div className="medicine-name" style={{fontFamily:"initial",display:"flex",}}>
                                    <div><DescriptionIcon/></div>
                                    <div>purchase order</div>
                                </div>
                            </div >
                            


                           



                            </div>



                            <div className="new-patients">

                                <div style={{marginLeft:"15px",fontFamily:"initial",fontSize:"17px"}}>
                                    next - patients details
                                </div>

                                <div  style={{backgroundColor:"azure"}}className="new-patients-info">
                                    <div style={{borderBottom:"1px solid grey"}}className="patients5-name">
                                        <div className="patients-photo">
                                            <img  className="patients-photo"src={image7} alt="not found"/>

                                        </div>

                                        <div className="patients-full-name">
                                            <div style={{fontFamily:"initial",fontSize:"20px"}}>
                                                Jackie
                                            </div>
                                            <div style={{fontFamily:"initial",color:"grey"}}>
                                                2235 Avondle Ave 
                                            </div>
                                        </div>
                                    </div>

                                    <div className="patients-data">

                                        <div style={{borderBottom:"1px solid grey"}}className="patients-date">
                                        <div className="dob">
                                            <div style={{paddingLeft:"25px",fontSize:"20px",fontFamily:"initial"}}>D.O.B</div>
                                            <div  style={{paddingLeft:"25px",marginTop:"15px",fontFamily:"initial",fontSize:"18px"}}>20-10-1999</div>
                                        </div>

                                        <div className="sex" style={{paddingRight:"25px"}}>
                                            <div style={{fontSize:"27px",fontFamily:"initial"}}>sex</div>
                                            <div  style={{marginTop:"15px",fontFamily:"initial",fontSize:"18px"}}>Female</div>
                                        </div>


                                        <div className="weight">
                                            <div  style={{paddingRight:"30px",fontSize:"20px",fontFamily:"initial"}}>Weight</div>
                                            <div style={{marginTop:"15px",fontFamily:"initial",fontSize:"18px"}}>56KG</div>
                                        </div>


                                        <div className="height">
                                            <div  style={{paddingRight:"30px",fontSize:"20px",fontFamily:"initial"}}>Height</div>
                                            <div style={{marginTop:"15px",fontFamily:"initial",fontSize:"18px"}}>153cm</div>
                                        </div>

                                        </div>




                                        





                                    </div>

                                    <div className="patients-decises">

                                        <div className="decises">
                                            <div  style={{marginLeft:"15px",backgroundColor:"lightBrown",color:"Brown",fontFamily:"initial"}}>asthama</div>
                                            <div  className="hyper" style={{backgroundColor:"lightblue",color:"blue",fontFamily:"initial"}}><div  style={{marginLeft:"7px"}}>Hypertension</div></div>
                                            <div className="asam" style={{marginRight:"15px",backgroundColor:"lightgreen",color:"green",fontFamily:"initial"}}><div style={{marginLeft:"7px"}}>asam urat</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>






                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default main;
