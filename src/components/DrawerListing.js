import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';
import { ArrowDropDown, ArrowRight, OndemandVideo, FileCopy, CloudQueue } from '@mui/icons-material';
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows"
import { ReactComponent as Termi } from "../static/Icons/TerminalIcon.svg";
import { ReactComponent as PodC } from "../static/Icons/docker1.svg";
import { ReactComponent as GuiClick } from "../static/Icons/GuiClick.svg";


const DrawerListing = () => {

    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    const handleClick = (num) => {
        if (num === "1") setOpen1(!open1);
        if (num === "2") setOpen2(!open2);
        if (num === "3") setOpen3(!open3);
        if (num === "4") setOpen4(!open4);
    }

    return (
        <div>
            <Box>
                <List sx={{ padding: 0 }}>
                    <Divider sx={{ backgroundColor: 'gray' }} />
                    {/* System */}
                    <ListItemButton
                        sx={{
                            borderLeftStyle: open1 ? 'solid' : 'hidden',
                            borderLeftWidth: 3,
                            borderLeftColor: (theme) => theme.palette.mode === 'dark' ? 'yellow' : 'black'
                        }}
                        onClick={() => handleClick('1')}>
                        <ListItemIcon>
                            <DesktopWindowsIcon />
                        </ListItemIcon>
                        <ListItemText primary="System" />
                        { open1 ? <ArrowDropDown /> : <ArrowRight /> }
                    </ListItemButton>
                    <SystemCollapse isOn={open1} />

                    <Divider sx={{ backgroundColor: 'gray' }} />

                    {/* Docker */}
                    <ListItemButton
                        sx={{
                            borderLeftStyle: open2 ? 'solid' : 'hidden',
                            borderLeftWidth: 3,
                            borderLeftColor: (theme) => theme.palette.mode === 'dark' ? 'yellow' : 'black'
                        }}
                        onClick={() => handleClick('2')}>
                        <ListItemIcon>
                            <SvgIcon component={PodC} inheritViewBox></SvgIcon>
                        </ListItemIcon>
                        <ListItemText primary="Docker" />
                        { open2 ? <ArrowDropDown /> : <ArrowRight /> }
                    </ListItemButton>
                    <DockerCollapse isOn={open2} />

                    <Divider sx={{ backgroundColor: 'gray' }} />


                    {/* Docker */}
                    <ListItemButton
                        sx={{
                            borderLeftStyle: open3 ? 'solid' : 'hidden',
                            borderLeftWidth: 3,
                            borderLeftColor: (theme) => theme.palette.mode === 'dark' ? 'yellow' : 'black'
                        }}
                        onClick={() => handleClick('3')}>
                        <ListItemIcon>
                            <SvgIcon component={PodC} inheritViewBox></SvgIcon>
                        </ListItemIcon>
                        <ListItemText primary="Other" />
                        { open3 ? <ArrowDropDown /> : <ArrowRight /> }
                    </ListItemButton>
                    <OthersPart isOn={open3} />

                    <Divider sx={{ backgroundColor: 'gray' }} />  
                </List>
            </Box>
        </div>
    )
};

export default DrawerListing;


const SystemCollapse = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <Collapse in={props.isOn} timeout="auto" unmountOnExit>
                <Divider sx={{ marginLeft: 5 }} />
                <ListItemButton sx={{ pl: 5 }} onClick={() => navigate("system/cli")}>
                    <ListItemIcon>
                        <SvgIcon component={Termi} inheritViewBox></SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Terminal" />
                </ListItemButton>
            </Collapse>
        </>
    );
};

const DockerCollapse = (props) => {
    const navigate = useNavigate();

    const openWeb = (site) => {
        if (site === "tutor") {
            const url = "https://youtube.com/playlist?list=PLAi9X1uG6jZ30QGz7FZ55A27jPeY8EwkE";
            window.open(url, "_blank");
        }
        else if (site === "docs") {
            const url1 = "https://docs.docker.com/engine/reference/commandline/cli/";
            window.open(url1, "_blank");
        }
        else if (site === "hub") {
            const url2 = "https://hub.docker.com/search?q=";
            window.open(url2, "_blank");
        }
    }
    return (
        <>
            <Collapse in={props.isOn} timeout="auto" unmountOnExit>
                <Divider sx={{ marginLeft: 5 }} />
                <ListItemButton sx={{ pl: 5 }} onClick={() => navigate("docker/cli")} >
                    <ListItemIcon>
                        <SvgIcon component={Termi} inheritViewBox></SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Docker CLI" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />

                <ListItemButton sx={{ pl: 5 }} onClick={() => navigate("docker/gui")}>
                    <ListItemIcon>
                        <SvgIcon component={GuiClick} inheritViewBox></SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Docker GUI" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />

                <ListItemButton sx={{ pl: 5 }} onClick={() => openWeb('tutor')} >
                    <ListItemIcon>
                        <OndemandVideo />
                    </ListItemIcon>
                    <ListItemText primary="Docker tutorials" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />

                <ListItemButton sx={{ pl: 5 }} onClick={() => openWeb('docs')} >
                    <ListItemIcon>
                        <FileCopy />
                    </ListItemIcon>
                    <ListItemText primary="Docker docs" />
                </ListItemButton>

                <Divider sx={{ marginLeft: 5 }} />
                <ListItemButton sx={{ pl: 5 }} onClick={() => openWeb('hub')} >
                    <ListItemIcon>
                        <CloudQueue />
                    </ListItemIcon>
                    <ListItemText primary="Docker Hub" />
                </ListItemButton>
            </Collapse>
        </>
    );
};




const OthersPart = (props) => {
    // const navigate = useNavigate();

    const openWeb2 = (site) => {
        if (site === "senti") {
            const url = "http://127.0.0.1:5501/chatbot/index.html";
            window.open(url, "_blank");
        }
        if (site === "aws") {
            const url = "http://13.234.186.176/cgi-bin/abhishek.py";
            window.open(url, "_blank");
        }
        if (site === "linux") {
            const url = "";
            window.open(url, "_blank");
        }
        if (site === "sinb") {
            const url = "https:///54.144.243.247:4200/";
            window.open(url, "_blank");
        }
    }

    return (
        <>
        
            <Collapse in={props.isOn} timeout="auto" unmountOnExit>
                <Divider sx={{ marginLeft: 5 }} />
                <ListItemButton sx={{ pl: 5 }} onClick={() => openWeb2('senti')} >
                    <ListItemIcon>
                        {/* <SvgIcon component={Termi} inheritViewBox></SvgIcon> */}
                    </ListItemIcon>
                    <ListItemText primary="Chatbot" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />

                <ListItemButton sx={{ pl: 5 }} onClick={() => openWeb2('aws')} >
                    <ListItemIcon>
                        {/* <SvgIcon component={Termi} inheritViewBox></SvgIcon> */}
                    </ListItemIcon>
                    <ListItemText primary="AWS" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />

                <ListItemButton sx={{ pl: 5 }} onClick={() => openWeb2('sinb')} >
                    <ListItemIcon>
                        {/* <SvgIcon component={Termi} inheritViewBox></SvgIcon> */}
                    </ListItemIcon>
                    <ListItemText primary="shellinabox" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />
                
                <ListItemButton sx={{ pl: 5 }} onClick={() => openWeb2('linux')} >
                    <ListItemIcon>
                        {/* <SvgIcon component={Termi} inheritViewBox></SvgIcon> */}
                    </ListItemIcon>
                    <ListItemText primary="Linux playground" />
                </ListItemButton>
                <Divider sx={{ marginLeft: 5 }} />

            </Collapse>
        </>
    );
};

