import React from "react";
import styled from "styled-components";
import Link from "../Link/Link"

const Header = styled.header`
  background: #D81159;
  color: white;
  text-align: center;
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
  padding: 0.25rem;
`;
const Title = styled.h1`
  font-family: Arial, sans-serif;
  letter-spacing: -1px;
`;

const Footer = styled.footer`
  background: #aaaaaa;
  position: fixed;
  color: white;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
`;
const List = styled.ul`
  list-style: none;
  font-family: Arial, sans-serif;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  user-select: none;
`;

const LinkWrap = styled.li`
  width: 50%;
`;
const PAGE_TITLE_MAP={
  'home':'To-Do List',
  'add':'Adding Item',
  'edit':'editing Item'
}

const Layout = (props) => {
  const { children, activePage = 'home'} = props;
  return (
    <>
      <Header>
        <Title>{PAGE_TITLE_MAP[activePage]}</Title>
      </Header>
      

      {children}

      <Footer>
        <nav>

          <List>
            <LinkWrap>
              <Link fullWidth disabled={activePage ==='home'} url="/">
               Back to Home</Link>
            </LinkWrap>

            <LinkWrap>
              <Link fullWidth disabled={activePage ==='add'}url="/add">
                Add new item
                </Link>

            </LinkWrap>
          </List>
        </nav>
      </Footer>
    </>
  );
};
export default Layout;
