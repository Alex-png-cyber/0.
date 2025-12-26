import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
`;

const LoginCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const LoginTitle = styled.h1`
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2rem;
`;

const LoginSubtitle = styled.p`
  color: #7f8c8d;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const QQButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #12b2f6 0%, #007aff 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(18, 178, 246, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Divider = styled.div`
  margin: 30px 0;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #ecf0f1;
  }

  span {
    background: white;
    padding: 0 15px;
    color: #7f8c8d;
    position: relative;
  }
`;

const GuestButton = styled.button`
  width: 100%;
  background: transparent;
  color: #7f8c8d;
  border: 2px solid #e0e0e0;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #667eea;
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
  }
`;

const InfoMessage = styled.div`
  background: #e3f2fd;
  color: #1976d2;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 30px;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const LoadingSpinner = styled.div`
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  display: inline-block;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function Login({ onLogin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // 初始化QQ登录SDK
    if (window.QC) {
      window.QC.SignOut();
    } else {
      loadQQScript();
    }
  }, []);

  const loadQQScript = () => {
    const script = document.createElement('script');
    script.src = 'https://connect.qq.com/qc_jssdk.js';
    script.dataset.appid = '342096044';
    document.head.appendChild(script);
    
    script.onload = () => {
      console.log('QQ SDK loaded');
    };
  };

  const handleQQLogin = () => {
    setIsLoading(true);
    setError('');

    // 模拟QQ登录流程
    setTimeout(() => {
      // 模拟成功获取用户信息
      const mockUser = {
        openid: 'mock_openid_' + Date.now(),
        nickname: 'QQ用户_' + Math.floor(Math.random() * 1000),
        figureurl: 'https://q.qlogo.cn/g?b=qq&nk=123456&s=100',
        loginType: 'qq'
      };

      setIsLoading(false);
      onLogin(mockUser);
      alert('QQ登录成功！');
    }, 2000);

    // 实际的QQ登录代码应该是：
    /*
    if (window.QC) {
      window.QC.Login.showPopup({
        appId: '342096044',
        redirectURI: encodeURIComponent(window.location.href)
      });
      
      window.QC.Login.check(function() {
        if (window.QC.Login.check()) {
          window.QC.Login.getMe(function(openId, accessToken) {
            // 获取用户信息
            window.QC.api('get_user_info', {oauth_consumer_key: '342096044'})
              .success(function(response) {
                const userData = {
                  openid: openId,
                  nickname: response.data.nickname,
                  figureurl: response.data.figureurl_qq_1,
                  loginType: 'qq'
                };
                onLogin(userData);
              });
          });
        }
      });
    } else {
      setError('QQ登录SDK加载失败，请刷新页面重试');
    }
    */
  };

  const handleGuestLogin = () => {
    const guestUser = {
      openid: 'guest_' + Date.now(),
      nickname: '访客_' + Math.floor(Math.random() * 1000),
      figureurl: '',
      loginType: 'guest'
    };
    
    onLogin(guestUser);
    alert('访客登录成功！');
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginTitle>用户登录</LoginTitle>
        <LoginSubtitle>
          登录后可以发布随笔、留言互动，<br />
          加入我们的社区讨论
        </LoginSubtitle>

        <InfoMessage>
          💡 提示：QQ登录使用的是测试模式，实际部署时需要配置真实的QQ互联应用
        </InfoMessage>

        <QQButton onClick={handleQQLogin} disabled={isLoading}>
          {isLoading ? (
            <>
              <LoadingSpinner />
              登录中...
            </>
          ) : (
            <>
              <span>🐧</span>
              QQ快速登录
            </>
          )}
        </QQButton>

        {error && (
          <div style={{ color: '#e74c3c', marginTop: '10px', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}

        <Divider>
          <span>或者</span>
        </Divider>

        <GuestButton onClick={handleGuestLogin}>
          👤 访客登录
        </GuestButton>

        <div style={{ marginTop: '30px', fontSize: '0.85rem', color: '#95a5a6' }}>
          <p>登录即表示同意我们的服务条款</p>
          <p>保护您的隐私是我们最重要的责任</p>
        </div>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;