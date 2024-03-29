// import React, { useState, useEffect } from "react";
// import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
// import useStyles from "./styles";
// import { Link, useHistory, useLocation } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import decode from "jwt-decode";
// import memories from "../../images/memories.png";

// const Navbar = () => {
//   const classes = useStyles();
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const history = useHistory();
//   // const user=null;
//   const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
//   // console.log(user);
//   const logout = () => {
//     dispatch({ type: "LOGOUT" });
//     history.push("/");
//     setUser(null);
//   };
//   useEffect(() => {
//     const token = user?.token;
//     if (token) {
//       const decodedToken = decode(token);
//       if (decodedToken.exp * 1000 < new Date().getTime()) logout();
//     }
//     setUser(JSON.parse(localStorage.getItem("profile")));
//   }, [location]);
//   return (
//     <AppBar className={classes.appBar} position="static" color="inherit">
//       <div className={classes.brandContainer}>
//         <Typography
//           component={Link}
//           to="/"
//           className={classes.heading}
//           variant="h2"
//           align="center"
//         >
//           Memories
//         </Typography>
//         <img
//           className={classes.image}
//           src={memories}
//           alt="memories"
//           height="60"
//         />
//       </div>
//       <Toolbar>
//         {user ? (
//           <div className={classes.profile}>
//             <Avatar
//               className={classes.purple}
//               alt={user.result.name}
//               src={user.result.imageUrl}
//             >
//               {user.result.name.charAt(0)}
//             </Avatar>
//             <Typography className={classes.userName} variant="h6">
//               {user.result.name}
//             </Typography>
//             <Button
//               variant="contained"
//               className={classes.logout}
//               color="secondary"
//               onClick={logout}
//             >
//               Logout
//             </Button>
//           </div>
//         ) : (
//           <div>
//             <Button
//               component={Link}
//               to="/auth"
//               variant="contained"
//               color="Primary"
//             >
//               Sign In
//             </Button>
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

// import memories from "../../images/memories.png";
import memoriesLogo from "../../images/memories-Logo.png";
import memoriesText from "../../images/memories-Text.png";
import * as actionType from "../../constants/actionsType";
import useStyles from "./styles";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        {/* <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography> */}
        <img src={memoriesText} alt="icon" height="45px" />
        <img
          className={classes.image}
          src={memoriesLogo}
          alt="icon"
          height="40px"
        />
      </Link>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
