import { motion } from 'framer-motion';
import { useState } from 'react';
import { Heart, MessageCircle, Flag, Send, Hash, UserSearch, Sparkles, Edit3, ThumbsUp, RefreshCcw, ChevronRight } from 'lucide-react';

const Board = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: '北国的风', role: '2015届 | 法学院', text: '还记得在明德主楼前的台阶上背过的法条，图书馆遇上占座的日子，还有食堂二层的糖醋里脊饭。人大给了我知识，更给了我一生的朋友。愿遇见，未来可期！', time: '2024-05-20 22:18', likes: 128, comments: 12, tag: '#校园回忆' },
    { id: 2, user: 'RUCer_小新', role: '2018届 | 商学院', text: '毕业六年，依然会想起那年夏天的风，吹散了我们，也吹向了更广阔的世界。愿人大越来越好！', time: '2024-05-20 18:45', likes: 96, comments: 8, tag: '#毕业感言' },
    { id: 3, user: '人大路上的追梦人', role: '2012届 | 新闻学院', text: '百年学府，风华正茂！祝愿母校在新征程中再创辉煌，培养更多栋梁之材！', time: '2024-05-19 17:30', likes: 88, comments: 5, tag: '#祝福母校' },
    { id: 4, user: '清风徐来', role: '2020届 | 马克思主义学院', text: '教二草坪的午后，阳光正好，三五好友，谈天说地，那些日子真好。', time: '2024-05-19 12:06', likes: 72, comments: 15, tag: '#校园回忆' },
  ]);

  const [newMsg, setNewMsg] = useState('');
  const [selectedTag, setSelectedTag] = useState('#校园回忆');

  const tags = ['#寻找老同学', '#毕业感言', '#校园回忆', '#祝福母校', '#其他'];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!newMsg.trim()) return;
    const msg = {
      id: Date.now(),
      user: '时光旅人',
      role: '2024级 | 新成员',
      text: newMsg,
      time: '刚刚',
      likes: 0,
      comments: 0,
      tag: selectedTag
    };
    setMessages([msg, ...messages]);
    setNewMsg('');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1440px] mx-auto px-12 py-10"
    >
      <div className="text-center mb-16">
        <h1 className="text-6xl font-calligraphy mb-4">银杏树下 · 留言簿</h1>
        <p className="text-gray-400 tracking-[0.3em]">写给母校，也写给当年的我们</p>
      </div>

      <div className="grid grid-cols-12 gap-12">
        {/* Main Content: Messages */}
        <div className="col-span-8 space-y-10">
          {/* Post Box */}
          <div className="paper-card p-10 rounded-[2rem] shadow-xl border-2 border-accent-gold/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-ruc-red opacity-20"></div>
            <div className="flex items-center space-x-8 mb-6 border-b border-gray-50 pb-4">
              <button className="flex items-center space-x-2 text-ruc-red font-bold border-b-2 border-ruc-red pb-2">
                <Edit3 className="w-4 h-4" />
                <span>文字留言</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 pb-2">
                <Sparkles className="w-4 h-4" />
                <span>表情</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 pb-2">
                <UserSearch className="w-4 h-4" />
                <span>@提及校友</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <textarea
                  placeholder="写下你的留言吧..."
                  className="w-full h-40 p-6 bg-white/50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-ruc-red/20 text-base leading-relaxed"
                  value={newMsg}
                  onChange={(e) => setNewMsg(e.target.value)}
                ></textarea>
                <div className="absolute bottom-4 right-6 flex items-center space-x-4">
                  <span className="text-xs text-gray-400">{newMsg.length}/500</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                  <span className="text-xs text-gray-400 font-bold mr-2">选择标签</span>
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTag(tag)}
                      className={`px-4 py-1.5 rounded-full text-xs transition-all whitespace-nowrap ${
                        selectedTag === tag ? 'bg-ruc-red text-white' : 'bg-white text-gray-400 border border-gray-100 hover:border-ruc-red hover:text-ruc-red'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <button type="submit" className="btn-ruc px-10 py-3.5 flex items-center space-x-3">
                  <Send className="w-4 h-4" />
                  <span className="font-bold tracking-widest text-base">发布留言</span>
                </button>
              </div>
            </form>
          </div>

          {/* Message List */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-xl font-bold text-gray-800 font-serif">留言流 <span className="text-gray-300 font-normal text-base ml-2">(按时间倒序)</span></h3>
              <div className="flex space-x-4 text-sm text-gray-400">
                <button className="text-ruc-red font-bold underline underline-offset-4">最新</button>
                <button className="hover:text-ruc-red">热门</button>
              </div>
            </div>

            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="paper-card p-8 rounded-2xl hover:shadow-2xl transition-all border border-transparent hover:border-accent-gold/20 relative group"
              >
                <div className="flex space-x-6">
                  <div className="w-14 h-14 rounded-full bg-ruc-red/5 border-2 border-white shadow-md flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src="/images/中国人民大学校徽.png" className="w-8 opacity-20 grayscale" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h4 className="font-bold text-lg text-gray-800">{msg.user}</h4>
                          <span className="text-xs bg-accent-gold/10 text-accent-gold px-2 py-0.5 rounded-full">{msg.role}</span>
                        </div>
                        <span className="text-xs text-gray-300">{msg.time}</span>
                      </div>
                      <span className="text-xs text-gray-400 flex items-center"><Hash className="w-3 h-3 mr-1" /> {msg.tag.replace('#', '')}</span>
                    </div>
                    <p className="text-base text-gray-600 leading-relaxed mb-6 font-serif">{msg.text}</p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                      <div className="flex space-x-8">
                        <button className="flex items-center space-x-2 text-xs text-gray-400 group/btn">
                          <ThumbsUp className="w-4 h-4 group-hover/btn:text-ruc-red transition-colors" />
                          <span>{msg.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-xs text-gray-400 group/btn">
                          <MessageCircle className="w-4 h-4 group-hover/btn:text-blue-500 transition-colors" />
                          <span>回复 ({msg.comments})</span>
                        </button>
                        <button className="flex items-center space-x-2 text-xs text-gray-400 group/btn">
                          <Flag className="w-4 h-4 group-hover/btn:text-red-400 transition-colors" />
                          <span>举报</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <div className="flex justify-center pt-8">
              <button className="text-gray-400 hover:text-ruc-red text-sm font-bold flex items-center space-x-2">
                <span>加载更多留言</span>
                <ChevronRight className="w-4 h-4 rotate-90" />
              </button>
            </div>
          </div>

          {/* Find Classmate moved here */}
          <div className="paper-card p-10 rounded-[2rem] bg-ruc-red/5 border-ruc-red/10 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-ruc-red/5 rounded-full blur-3xl"></div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-ruc-red">
                <UserSearch className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold ruc-red font-serif">寻找同窗专区</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-white/60 rounded-2xl border border-dashed border-ruc-red/20 group hover:border-ruc-red/40 transition-colors">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden">
                    <img src="/images/中国人民大学校徽.png" className="w-full h-full object-contain p-2 opacity-30" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-800">寻找 李思思</h4>
                    <p className="text-[10px] text-gray-400">2014届 | 社会学院</p>
                  </div>
                  <span className="ml-auto text-[10px] bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">寻找老同学</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed italic mb-4">“寻找2010级社会学班的李思思同学！记得你来自山东，我们一起在品园三楼自习，参加过社团活动。毕业后一直失联，如有联系，请留言或私信给我，非常想念你！”</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-3 h-3 text-ruc-red" />
                    <span className="text-[10px] text-gray-400">56 人关注</span>
                  </div>
                  <button className="bg-ruc-red text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-md hover:bg-ruc-red-dark transition-all">我也见过他</button>
                </div>
              </div>
              {/* Add another placeholder card or similar content */}
            </div>
            <div className="text-center">
              <button className="btn-ruc px-12 py-3 text-sm">我也要发布寻人启事</button>
            </div>
          </div>
        </div>

        {/* Sidebar: Selection & Hot Words */}
        <div className="col-span-4 space-y-10">
          {/* Message Selection Wall */}
          <div className="paper-card p-8 rounded-[2rem]">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-3">
                <Sparkles className="w-6 h-6 text-accent-gold" />
                <h3 className="text-xl font-bold text-gray-800 font-serif">留言精选墙</h3>
              </div>
              <button className="text-gray-400 hover:text-ruc-red text-xs flex items-center space-x-1">
                <RefreshCcw className="w-3 h-3" />
                <span>换一批</span>
              </button>
            </div>
            <div className="space-y-6">
              {[
                { text: '人的一生中最美好的时光在这里度过，感谢人大，感谢遇见的一切美好。', user: '风继续吹', year: '2013届' },
                { text: '无论走多远，人大永远是我们心中温暖的港湾。', user: 'Lily', year: '2016届' },
                { text: '希望未来的学弟学妹们珍惜时光，勇敢追梦！', user: '学长在路上', year: '2017届' },
                { text: '食堂的饭、图书馆的灯、老师的教诲，构成了我最难忘的记忆。', user: '匿名校友', year: '2011届' },
                { text: '祝愿人大：与时代同行，与祖国共进！', user: 'RUCer 2020', year: '2020届' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 group">
                  <div className="w-6 h-6 rounded-lg bg-ruc-red text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-1 shadow-sm">
                    {i + 1}
                  </div>
                  <div className="flex-1 border-b border-gray-50 pb-4 group-last:border-0">
                    <p className="text-sm text-gray-600 leading-relaxed mb-2 line-clamp-2">“{item.text}”</p>
                    <div className="text-right text-[10px] text-gray-400">—— {item.user} {item.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hot Words */}
          <div className="paper-card p-8 rounded-[2rem]">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                <Hash className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-serif">年度热词云 (2024)</h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-center py-4">
              {[
                { text: '教二草坪', size: 'text-3xl', color: 'text-ruc-red' },
                { text: '食堂', size: 'text-2xl', color: 'text-accent-gold' },
                { text: '图书馆', size: 'text-xl', color: 'text-gray-800' },
                { text: '银杏', size: 'text-xl', color: 'text-orange-400' },
                { text: '考研', size: 'text-lg', color: 'text-gray-500' },
                { text: '毕业照', size: 'text-lg', color: 'text-gray-500' },
                { text: '明德楼', size: 'text-base', color: 'text-gray-400' },
                { text: '一勺池', size: 'text-base', color: 'text-gray-400' },
                { text: '世纪馆', size: 'text-sm', color: 'text-gray-300' },
                { text: '品园', size: 'text-sm', color: 'text-gray-300' },
              ].map((word) => (
                <button
                  key={word.text}
                  className={`hover:scale-110 transition-all font-bold ${word.size} ${word.color} hover:brightness-75`}
                >
                  {word.text}
                </button>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <button className="text-sm text-gray-400 hover:text-ruc-red transition-colors flex items-center justify-center mx-auto space-x-1">
                <span>点击查看更多热词</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Board;
