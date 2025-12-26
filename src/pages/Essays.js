import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const EssaysContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const PageTitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const EssayForm = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: #2c3e50;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const EssaysList = styled.div`
  margin-top: 40px;
`;

const EssayCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const EssayTitle = styled.h2`
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.8rem;
`;

const EssayMeta = styled.div`
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ecf0f1;
`;

const EssayContent = styled.div`
  color: #34495e;
  line-height: 1.8;
  white-space: pre-wrap;
`;

const EssayActions = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #ecf0f1;
  display: flex;
  gap: 15px;
`;

const ActionButton = styled.button`
  background: none;
  border: 1px solid #e0e0e0;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #7f8c8d;

  &:hover {
    border-color: #667eea;
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #7f8c8d;
  
  h3 {
    margin-bottom: 15px;
    color: #34495e;
  }
`;

function Essays({ user }) {
  const [essays, setEssays] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // 模拟加载随笔数据
    const sampleEssays = [
      {
        id: 1,
        title: '春天的约定',
        content: '春天来了，万物复苏的季节。走在校园的小路上，樱花盛开，微风轻拂。\n\n我想起了去年春天的约定，那是一个关于梦想和成长的约定。\n\n时间过得真快，转眼一年过去了。虽然有些约定还没有实现，但我相信，只要坚持不懈，总有一天会达到目标。\n\n春天是希望的季节，也是新的开始。让我们一起在这个美好的季节里，为自己的梦想努力奋斗吧！',
        author: '博主',
        date: '2024-03-15',
        likes: 23,
        comments: 5
      },
      {
        id: 2,
        title: '编程中的小确幸',
        content: '今天在解决一个复杂的bug时，突然灵光一闪，找到了问题的根源。\n\n那种豁然开朗的感觉，就是程序员最简单的快乐。\n\n有时候我们会为了一个小问题纠结很久，但正是这些小小的挑战，让我们的技能不断提升。\n\n编程不仅仅是一份工作，更是一种生活态度。在代码的世界里，我找到了属于自己的那份宁静和快乐。',
        author: '博主',
        date: '2024-03-10',
        likes: 18,
        comments: 3
      },
      {
        id: 3,
        title: '夜深人静时的思考',
        content: '夜深了，窗外的路灯还在亮着。这样的时刻总是让人容易陷入深思。\n\n关于未来，关于梦想，关于那些我们想要成为的人。\n\n有时候我们会感到迷茫，不知道前方的路该怎么走。但我想，迷茫本身就是成长的一部分。\n\n重要的是，即使迷茫，也要继续前进。因为只有走下去，才能找到属于自己的方向。\n\n晚安，这个世界。晚安，还在努力的你。',
        author: '博主',
        date: '2024-03-05',
        likes: 31,
        comments: 8
      }
    ];
    setEssays(sampleEssays);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('请先登录后再发布随笔');
      return;
    }

    if (!formData.title.trim() || !formData.content.trim()) {
      alert('请填写标题和内容');
      return;
    }

    setIsSubmitting(true);
    
    // 模拟提交
    setTimeout(() => {
      const newEssay = {
        id: essays.length + 1,
        title: formData.title,
        content: formData.content,
        author: user.nickname,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        comments: 0
      };

      setEssays(prev => [newEssay, ...prev]);
      setFormData({ title: '', content: '' });
      setIsSubmitting(false);
      alert('随笔发布成功！');
    }, 1000);
  };

  const handleLike = (essayId) => {
    if (!user) {
      alert('请先登录后再点赞');
      return;
    }

    setEssays(prev => prev.map(essay => 
      essay.id === essayId 
        ? { ...essay, likes: essay.likes + 1 }
        : essay
    ));
  };

  return (
    <EssaysContainer>
      <PageTitle>个人随笔</PageTitle>
      
      {user && (
        <EssayForm>
          <h3>发布新随笔</h3>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="title">标题</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="给你的随笔起个标题吧..."
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="content">内容</Label>
              <TextArea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="记录你的想法..."
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? '发布中...' : '发布随笔'}
            </SubmitButton>
          </form>
        </EssayForm>
      )}

      <EssaysList>
        {essays.length === 0 ? (
          <EmptyState>
            <h3>还没有随笔</h3>
            <p>快来发布第一篇随笔吧！</p>
          </EmptyState>
        ) : (
          essays.map(essay => (
            <EssayCard key={essay.id}>
              <EssayTitle>{essay.title}</EssayTitle>
              <EssayMeta>
                作者：{essay.author} | 发布时间：{essay.date}
              </EssayMeta>
              <EssayContent>{essay.content}</EssayContent>
              <EssayActions>
                <ActionButton onClick={() => handleLike(essay.id)}>
                  ❤️ {essay.likes} 赞
                </ActionButton>
                <ActionButton>
                  💬 {essay.comments} 评论
                </ActionButton>
              </EssayActions>
            </EssayCard>
          ))
        )}
      </EssaysList>
    </EssaysContainer>
  );
}

export default Essays;