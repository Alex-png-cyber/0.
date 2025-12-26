import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  padding: 8px 15px;
  border-radius: 25px;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: white;
`;

const LogoutBtn = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

function Header({ user, onLogout }) {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">我的博客</Logo>
        <NavLinks>
          <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>
            首页
          </NavLink>
          <NavLink to="/essays" className={location.pathname === '/essays' ? 'active' : ''}>
            个人随笔
          </NavLink>
          <NavLink to="/guestbook" className={location.pathname === '/guestbook' ? 'active' : ''}>
            留言板
          </NavLink>
          {user ? (
            <UserInfo>
              <span>欢迎, {user.nickname}</span>
              <LogoutBtn onClick={onLogout}>退出</LogoutBtn>
            </UserInfo>
          ) : (
            <NavLink to="/login" className={location.pathname === '/login' ? 'active' : ''}>
              登录
            </NavLink>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;