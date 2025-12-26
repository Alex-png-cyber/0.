import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  text-align: center;
  padding: 30px 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SocialLinks = styled.div`
  margin-bottom: 20px;
  
  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #3498db;
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <a href="mailto:your-email@example.com" title="邮箱联系">
            📧 邮箱
          </a>
          <a href="https://github.com" title="GitHub" target="_blank" rel="noopener noreferrer">
            💻 GitHub
          </a>
          <a href="#" title="微信">
            💬 微信
          </a>
        </SocialLinks>
        <Copyright>
          © {currentYear} 我的个人博客. All rights reserved. | 
          用心记录生活的点点滴滴
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;