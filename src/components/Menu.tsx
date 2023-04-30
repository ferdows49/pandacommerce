import React from 'react';
import styled from "styled-components";
import Image from "next/image";
import MenuIcon from '../assets/images/menu-icon.svg';
import Link from "next/link";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {Container} from "@mui/system";

const Menu = () => {
  return (
    <StyledMenu className="menu">
      <Container>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Image className="menu-icon" src={MenuIcon} alt=""/>
          </Grid>
          <Grid item className="flex">
            <TextField classes="menu-search" variant="outlined" placeholder="Search"/>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Product</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </StyledMenu>
  );
};

const StyledMenu = styled.section`
  padding-top: 65px;
  padding-bottom: 40px;
  
  ul {
    display: flex;
    align-items: center;
    
    li {
      a {
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        color: #707070;
        padding-right: 50px;
      }

      &:first-child a {
        padding-left: 30px;
      }

      &:last-child a {
        padding-right: 0;
      }
    }
  }
`

export default Menu;