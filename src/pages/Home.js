import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 15px;
  margin-bottom: 50px;
  animation: fadeIn 1s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  h3 {
    color: #2c3e50;
    margin-bottom: 15px;
  }

  p {
    color: #7f8c8d;
    line-height: 1.6;
  }
`;

const AboutSection = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  line-height: 1.8;
  color: #34495e;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
  
  .number {
    font-size: 2rem;
    font-weight: bold;
    display: block;
  }
  
  .label {
    font-size: 0.9rem;
    opacity: 0.9;
    margin-top: 5px;
  }
`;

function Home() {
  const [stats, setStats] = useState({
    posts: 25,
    views: 1234,
    comments: 89,
    likes: 456
  });

  useEffect(() => {
    // 模拟数据加载
    const timer = setTimeout(() => {
      setStats({
        posts: 25,
        views: 1234,
        comments: 89,
        likes: 456
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>欢迎来到我的博客</HeroTitle>
        <HeroSubtitle>
          在这里，我分享技术心得、生活感悟和个人成长的故事。
          希望每一个字句都能温暖你的心，每一个故事都能触动你的灵魂。
        </HeroSubtitle>
      </HeroSection>

      <StatsContainer>
        <StatCard>
          <span className="number">{stats.posts}</span>
          <span className="label">文章</span>
        </StatCard>
        <StatCard>
          <span className="number">{stats.views}</span>
          <span className="label">访问量</span>
        </StatCard>
        <StatCard>
          <span className="number">{stats.comments}</span>
          <span className="label">评论</span>
        </StatCard>
        <StatCard>
          <span className="number">{stats.likes}</span>
          <span className="label">点赞</span>
        </StatCard>
      </StatsContainer>

      <Section>
        <SectionTitle>博客特色</SectionTitle>
        <CardGrid>
          <FeatureCard>
            <div className="icon">📝</div>
            <h3>个人随笔</h3>
            <p>记录生活中的点点滴滴，分享内心的真实感受，用文字诉说心灵的故事。</p>
          </FeatureCard>
          <FeatureCard>
            <div className="icon">💬</div>
            <h3>留言互动</h3>
            <p>欢迎朋友们在这里留下宝贵的意见和建议，让我们一起交流成长。</p>
          </FeatureCard>
          <FeatureCard>
            <div className="icon">🚀</div>
            <h3>技术分享</h3>
            <p>分享编程经验和技术心得，记录学习的每一个重要时刻。</p>
          </FeatureCard>
        </CardGrid>
      </Section>

      <Section>
        <SectionTitle>关于我</SectionTitle>
        <AboutSection>
          <p>
            你好！我是一个热爱生活、热爱编程的博主。在这个小小的博客里，
            我记录着生活中的美好瞬间，分享着技术学习的心得体会。
          </p>
          <p>
            写作对我而言，不仅是记录，更是一种思考和生活的方式。
            通过文字，我希望能够传递温暖，分享知识，结识更多志同道合的朋友。
          </p>
          <p>
            感谢你来到这里，希望你能在我的博客中找到感兴趣的内容。
            如果你有任何想法或建议，欢迎在留言板与我交流！
          </p>
        </AboutSection>
      </Section>
    </HomeContainer>
  );
}

export default Home;