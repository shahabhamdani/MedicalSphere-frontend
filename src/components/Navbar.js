import { Box, Button, IconButton} from "@mui/material"
import logo from "../../static/logo.png"

import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
      <nav>
        <h2 className="logo">iDeadac</h2>

        <Box sx={{ display: { xs: "none", md: "block" } }}>

        <div className="links">
          <Link activeClassName="navlink-active" to="/">
            Home
          </Link>
          <Link activeClassName="navlink-active" to="/about">
            About Us
          </Link>
          <Link activeClassName="navlink-active" to="/portfolio">
            Portfolio
          </Link>
          <Link activeClassName="navlink-active" to="/services">
            Services
          </Link>
          <Link activeClassName="navlink-active" to="/contact">
            Contact us
          </Link>
          <Link activeClassName="navlink-active" to="/blog">
            Blogs
          </Link>
        </div>
        </Box>  

        <Box sx={{ display: { md: "none"} }}>
        <div className="links">
        <IconButton>J</IconButton>       

        </div>

        </Box>
       
      </nav>
      
  )
}
