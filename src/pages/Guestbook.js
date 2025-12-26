import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GuestbookContainer = styled.div`
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

const MessageForm = styled.div`
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
  min-height: 120px;
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

const MessagesList = styled.div`
  margin-top: 40px;
`;

const MessageCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

const MessageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ecf0f1;
`;

const MessageAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

const AuthorInfo = styled.div`
  .name {
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 2px;
  }
  .time {
    font-size: 0.85rem;
    color: #7f8c8d;
  }
`;

const MessageContent = styled.div`
  color: #34495e;
  line-height: 1.6;
  margin-bottom: 15px;
  white-space: pre-wrap;
`;

const MessageActions = styled.div`
  display: flex;
  gap: 15px;
  padding-top: 10px;
  border-top: 1px solid #ecf0f1;
`;

const ActionButton = styled.button`
  background: none;
  border: 1px solid #e0e0e0;
  padding: 6px 12px;
  border-radius: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #7f8c8d;
  font-size: 0.9rem;

  &:hover {
    border-color: #667eea;
    color: #667eea;
    background: rgba(102, 126, 234, 0.1);
  }

  &.liked {
    border-color: #e74c3c;
    color: #e74c3c;
    background: rgba(231, 76, 60, 0.1);
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

const ReplySection = styled.div`
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
  display: ${props => props.show ? 'block' : 'none'};
`;

function Guestbook({ user }) {
  const [messages, setMessages] = useState([]);
  const [formData, setFormData] = useState({
    content: '',
    author: user ? user.nickname : ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showReplyId, setShowReplyId] = useState(null);
  const [replyContent, setReplyContent] = useState('');
  const [likedMessages, setLikedMessages] = useState(new Set());

  useEffect(() => {
    // 模拟加载留言数据
    const sampleMessages = [
      {
        id: 1,
        author: '访客小明',
        content: '博主，你的博客写得很棒！特别喜欢你的随笔，每一篇都很有深度。继续加油哦！',
        date: '2024-03-15 14:30',
        likes: 12,
        replies: [
          {
            id: 1,
            author: '博主',
            content: '谢谢小明的支持！很高兴你喜欢我的文章，我会继续努力的！',
            date: '2024-03-15 16:20'
          }
        ]
      },
      {
        id: 2,
        author: 'Alice',
        content: '个人随笔板块的内容很真实，感觉博主是一个很有思想的人。希望以后能看到更多分享！',
        date: '2024-03-14 09:15',
        likes: 8,
        replies: []
      },
      {
        id: 3,
        author: '程序员小李',
        content: '作为一个程序员，我很欣赏你对技术的热爱。有机会可以多交流一下编程经验！',
        date: '2024-03-13 20:45',
        likes: 15,
        replies: [
          {
            id: 2,
            author: '博主',
            content: '当然欢迎！我们可以一起讨论技术问题，互相学习进步。',
            date: '2024-03-14 10:30'
          }
        ]
      }
    ];
    setMessages(sampleMessages);
  }, [user]);

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
      alert('请先登录后再留言');
      return;
    }

    if (!formData.content.trim()) {
      alert('请输入留言内容');
      return;
    }

    setIsSubmitting(true);
    
    // 模拟提交
    setTimeout(() => {
      const newMessage = {
        id: messages.length + 1,
        author: user.nickname,
        content: formData.content,
        date: new Date().toLocaleString('zh-CN'),
        likes: 0,
        replies: []
      };

      setMessages(prev => [newMessage, ...prev]);
      setFormData(prev => ({ ...prev, content: '' }));
      setIsSubmitting(false);
      alert('留言成功！');
    }, 1000);
  };

  const handleLike = (messageId) => {
    if (!user) {
      alert('请先登录后再点赞');
      return;
    }

    if (likedMessages.has(messageId)) {
      setLikedMessages(prev => {
        const newSet = new Set(prev);
        newSet.delete(messageId);
        return newSet;
      });
      setMessages(prev => prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, likes: Math.max(0, msg.likes - 1) }
          : msg
      ));
    } else {
      setLikedMessages(prev => new Set(prev).add(messageId));
      setMessages(prev => prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, likes: msg.likes + 1 }
          : msg
      ));
    }
  };

  const handleReply = (messageId) => {
    if (!user) {
      alert('请先登录后再回复');
      return;
    }
    setShowReplyId(showReplyId === messageId ? null : messageId);
    setReplyContent('');
  };

  const submitReply = (messageId) => {
    if (!replyContent.trim()) {
      alert('请输入回复内容');
      return;
    }

    const newReply = {
      id: Date.now(),
      author: user.nickname,
      content: replyContent,
      date: new Date().toLocaleString('zh-CN')
    };

    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, replies: [...msg.replies, newReply] }
        : msg
    ));

    setReplyContent('');
    setShowReplyId(null);
  };

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : '?';
  };

  return (
    <GuestbookContainer>
      <PageTitle>留言板</PageTitle>
      
      {user && (
        <MessageForm>
          <h3>发表留言</h3>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="author">昵称</Label>
              <Input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="content">留言内容</Label>
              <TextArea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="说点什么吧..."
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? '发布中...' : '发表留言'}
            </SubmitButton>
          </form>
        </MessageForm>
      )}

      <MessagesList>
        {messages.length === 0 ? (
          <EmptyState>
            <h3>还没有留言</h3>
            <p>来做第一个留言的人吧！</p>
          </EmptyState>
        ) : (
          messages.map(message => (
            <MessageCard key={message.id}>
              <MessageHeader>
                <MessageAuthor>
                  <Avatar>{getInitial(message.author)}</Avatar>
                  <AuthorInfo>
                    <div className="name">{message.author}</div>
                    <div className="time">{message.date}</div>
                  </AuthorInfo>
                </MessageAuthor>
              </MessageHeader>
              <MessageContent>{message.content}</MessageContent>
              <MessageActions>
                <ActionButton 
                  className={likedMessages.has(message.id) ? 'liked' : ''}
                  onClick={() => handleLike(message.id)}
                >
                  {likedMessages.has(message.id) ? '❤️' : '🤍'} {message.likes}
                </ActionButton>
                <ActionButton onClick={() => handleReply(message.id)}>
                  💬 回复
                </ActionButton>
              </MessageActions>

              {message.replies.length > 0 && (
                <div style={{ marginTop: '20px', paddingLeft: '20px' }}>
                  {message.replies.map(reply => (
                    <MessageCard key={reply.id} style={{ margin: '10px 0', background: '#f8f9fa' }}>
                      <MessageHeader>
                        <MessageAuthor>
                          <Avatar style={{ background: '#95a5a6', width: '30px', height: '30px', fontSize: '0.9rem' }}>
                            {getInitial(reply.author)}
                          </Avatar>
                          <AuthorInfo>
                            <div className="name">{reply.author}</div>
                            <div className="time">{reply.date}</div>
                          </AuthorInfo>
                        </MessageAuthor>
                      </MessageHeader>
                      <MessageContent>{reply.content}</MessageContent>
                    </MessageCard>
                  ))}
                </div>
              )}

              <ReplySection show={showReplyId === message.id}>
                <FormGroup>
                  <TextArea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder={`回复 ${message.author}...`}
                  />
                </FormGroup>
                <SubmitButton 
                  type="button" 
                  onClick={() => submitReply(message.id)}
                  disabled={!replyContent.trim()}
                >
                  回复
                </SubmitButton>
              </ReplySection>
            </MessageCard>
          ))
        )}
      </MessagesList>
    </GuestbookContainer>
  );
}

export default Guestbook;