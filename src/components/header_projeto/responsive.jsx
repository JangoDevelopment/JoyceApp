import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { RiHomeLine } from "react-icons/ri";
import { MdAssignmentInd } from "react-icons/md";
import { FiLayers, FiCoffee, FiFile } from "react-icons/fi";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#ffffff",
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
        fontFamily: "Montserrat",
        fontSize: "18px",
        fontWeight: "400",
        textTransform: "uppercase",
        color: "#000000",
    },
    icon: {
        color: "#5c5c5c",
        height: "30px",
        width: "30px",
    },

    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-start",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

export default function PersistentDrawerRight() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}>
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        JOYCE CAÇADOR
                    </Typography>
                    <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerOpen} className={clsx(open && classes.hide)}>
                        <MenuIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>{theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
                </div>
                <Divider />
                <List>
                    {["Home", "Serviços", "Apresentação", "Portifólio", "Contato"].map((text, index) => (
                        <ListItem button key={text}>
                            <Link
                                className="unselectable link flex"
                                to={index === 0 ? "/" : index === 1 ? "/apresentacao" : index === 2 ? "/formacao" : index === 3 ? "/portifolio" : "/contato"}>
                                <ListItemIcon>
                                    {index === 0 ? <RiHomeLine className={classes.icon} /> : null}
                                    {index === 1 ? <MdAssignmentInd className={classes.icon} /> : null}
                                    {index === 2 ? <FiFile className={classes.icon} /> : null}
                                    {index === 3 ? <FiLayers className={classes.icon} /> : null}
                                    {index === 4 ? <FiCoffee className={classes.icon} /> : null}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
