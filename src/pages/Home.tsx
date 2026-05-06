import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import GinkgoLeaves from '../components/GinkgoLeaves';
import { Heart, MessageCircle, ArrowRight, RefreshCcw, Landmark, BookOpen, Building2, MapPin } from 'lucide-react';

const Home = () => {
  const [currentMemory, setCurrentMemory] = useState(0);
  const [currentDate, setCurrentDate] = useState({
    day: '',
    monthYear: '',
    weekday: ''
  });

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const day = now.getDate().toString();
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const monthYear = `${monthNames[now.getMonth()]}.${now.getFullYear()}`;
      const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      const weekday = weekdays[now.getDay()];

      setCurrentDate({ day, monthYear, weekday });
    };

    updateDate();
    // Optional: update at midnight if the user keeps the tab open
    const interval = setInterval(updateDate, 1000 * 60 * 60); 
    return () => clearInterval(interval);
  }, []);

  const memories = [
    {
      id: 1,
      image: "images/ruc一勺池.jpg",
      location: "一勺池",
      year: "2016级",
      college: "金融学院",
      text: "一勺池的水面倒映着明德楼的影子，那是我在人大见过最安静的午后。",
      likes: 1240,
      comments: 86
    },
    {
      id: 2,
      image: "images/ruc明德楼群.jpeg",
      location: "明德楼",
      year: "2018级",
      college: "商学院",
      text: "明德广场上的白鸽，总是能让人在忙碌的期末考季感受到一丝惬意。",
      likes: 856,
      comments: 42
    }
  ];

  const comments = [
    { id: 1, user: "晓风残月", role: "2007级 | 法学院校友", text: "毕业快二十年了，依然想念教二草坪的阳光，那里有我们最纯粹的青春。", time: "10:24", likes: 128 },
    { id: 2, user: "东门银杏", role: "2012级 | 经院校友", text: "东门的银杏又黄了吧，真想再走一遍离宫路，回母校看看。", time: "昨天", likes: 96 },
    { id: 3, user: "老吴", role: "1998级 | 语委校友", text: "那时候在一勺池边读书的日子，是我这辈子最充实的时间。", time: "05-22", likes: 215 },
  ];

  const campusSpots = [
    { name: '人大西门', icon: <img src="images/ruc西门.png" className="w-full h-full object-cover rounded-lg" />, desc: '记忆的起点，梦想的启航' },
    { name: '明德楼群', icon: <img src="images/ruc明德楼群.jpeg" className="w-full h-full object-cover rounded-lg" />, desc: '承载求知岁月的精神地标' },
    { name: '图书馆', icon: <img src="images/ruc图书馆.jpg" className="w-full h-full object-cover rounded-lg" />, desc: '知识的海洋，思想的殿堂' },
    { name: '世纪馆', icon: <img src="images/ruc世纪馆.jpg" className="w-full h-full object-cover rounded-lg" />, desc: '思想碰撞的舞台' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-20 pb-20"
    >
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center filter sepia-[15%] contrast-[95%] brightness-[102%]"
          style={{ backgroundImage: `url(${encodeURI('images/背景图.png')})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-paper-cream"></div>
        <GinkgoLeaves />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block px-10 py-3 border-2 border-ruc-red/30 rounded-full text-ruc-red text-xl tracking-[0.4em] mb-10 bg-white/50 backdrop-blur-sm font-medium shadow-sm">回到这里，重新拾起那些年</span>
            <h1 className="text-7xl md:text-8xl font-calligraphy mb-8 text-ruc-red drop-shadow-md leading-tight">
              每一寸光阴，都值得珍藏
            </h1>
            <div className="flex items-center justify-center space-x-6 mb-12">
              <div className="h-[1px] w-16 bg-ruc-red opacity-30"></div>
              <span className="text-ruc-red text-2xl md:text-3xl tracking-[0.4em] font-medium font-serif">—— 中国人民大学校友纪念社区 ——</span>
              <div className="h-[1px] w-16 bg-ruc-red opacity-30"></div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link to="/map">
                <button className="bg-ruc-red text-white text-2xl px-12 py-4 rounded-full flex items-center mx-auto space-x-4 group shadow-2xl hover:bg-ruc-red/90 transition-all duration-300">
                  <span className="tracking-widest font-bold">开启你的时光匣</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3 Column Section */}
      <section className="max-w-[1440px] mx-auto px-12 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* A. 今日记忆碎片 */}
          <motion.div whileHover={{ y: -8 }} className="paper-card p-8 rounded-2xl transition-all duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold ruc-red font-serif">今日记忆碎片</h3>
              <button onClick={() => setCurrentMemory((prev) => (prev + 1) % memories.length)} className="text-gray-400 hover:text-ruc-red transition-colors flex items-center space-x-1">
                <RefreshCcw className="w-3 h-3" />
                <span className="text-xs tracking-wider">更多 &gt;</span>
              </button>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex flex-col items-center justify-center bg-white p-4 rounded-xl shadow-sm border border-gray-100 min-w-[100px]">
                <span className="text-4xl font-bold text-gray-800">{currentDate.day}</span>
                <span className="text-xs text-gray-400 uppercase tracking-tighter">{currentDate.monthYear}</span>
                <div className="h-[1px] w-full bg-gray-100 my-2"></div>
                <span className="text-xs font-bold text-ruc-red">{currentDate.weekday}</span>
              </div>
              <div className="flex-1 pt-2">
                <p className="text-base text-gray-700 leading-relaxed font-serif italic mb-4">“{memories[currentMemory].text}”</p>
                <p className="text-right text-xs text-gray-400">—— {memories[currentMemory].year} {memories[currentMemory].college} 校友</p>
              </div>
            </div>
          </motion.div>

          {/* B. 热门留言 */}
          <motion.div whileHover={{ y: -8 }} className="paper-card p-8 rounded-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold ruc-red font-serif">热门留言</h3>
              <Link to="/board" className="text-gray-400 hover:text-ruc-red text-sm tracking-wider">MORE &gt;</Link>
            </div>
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="group p-4 rounded-xl hover:bg-white/50 transition-all border border-transparent hover:border-accent-gold/20">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-base font-bold text-gray-800">{comment.user} <span className="text-xs font-normal text-gray-400">({comment.role})</span></span>
                    <span className="text-xs text-gray-300">{comment.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{comment.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* C. 校园事物快览 */}
          <motion.div whileHover={{ y: -8 }} className="paper-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold ruc-red font-serif mb-10">校园事物快览</h3>
            <div className="space-y-6">
              {campusSpots.map((spot) => (
                <Link key={spot.name} to="/map" className="flex items-center group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-inner flex items-center justify-center mr-4 group-hover:scale-110 transition-transform text-accent-gold">
                    {spot.icon}
                  </div>
                  <div className="flex-1 border-b border-gray-100 pb-3 group-hover:border-accent-gold/30 transition-colors">
                    <h4 className="text-base font-bold text-gray-800">{spot.name}</h4>
                    <p className="text-xs text-gray-400">{spot.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Graduation Banner Section */}
      <section className="max-w-[1440px] mx-auto px-12">
        <div className="relative h-[200px] rounded-2xl overflow-hidden shadow-xl group border border-ruc-red/10 bg-[#FDFBF7]">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]"></div>
          <div className="absolute inset-0 flex items-center justify-between px-20">
            <div className="flex items-center space-x-12">
              <div className="w-32 h-32 rounded-lg overflow-hidden shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <img src="images/ruc田径场.jpg" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-5xl font-serif font-bold ruc-red mb-3 tracking-tighter">毕业季 · 致青春</h2>
                <p className="text-gray-400 font-serif italic text-lg">“蓦然回首，恰是风华正茂。”</p>
              </div>
            </div>
            <Link to="/album?tag=毕业照">
              <button className="bg-ruc-red text-white px-8 py-3 rounded-full font-bold flex items-center space-x-2 hover:bg-ruc-red-dark transition-all shadow-lg">
                <span>进入专题</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          {/* Decorative hand-drawn icons placeholder */}
          <div className="absolute top-4 right-20 opacity-20 pointer-events-none">
            <img src="images/ruc实事求是石-手绘.png" className="w-24 grayscale" />
          </div>
        </div>
      </section>

      {/* Album Grid */}
      <section className="max-w-[1440px] mx-auto px-12">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-serif font-bold ruc-red">推荐相册墙</h2>
          <Link to="/album" className="text-gray-400 hover:text-ruc-red transition-all font-medium tracking-widest text-base flex items-center">
            更多相册 <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: '一勺池的春意', img: 'images/ruc一勺池.jpg', loc: '一勺池' },
            { title: '明德楼的庄严', img: 'images/ruc明德楼群.jpeg', loc: '明德楼' },
            { title: '图书馆的宁静', img: 'images/ruc图书馆.jpg', loc: '图书馆' },
            { title: '求是石前的誓言', img: 'images/ruc实事求是石.jpg', loc: '东门' },
            { title: '百家廊的清幽', img: 'images/ruc百家廊.png', loc: '百家廊' },
            { title: '世纪馆的荣光', img: 'images/ruc世纪馆.jpg', loc: '世纪馆' }
          ].map((album, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 group">
              <div className="rounded-xl overflow-hidden mb-5 aspect-square relative">
                <img src={album.img} className="w-full h-full object-cover sepia-[.2] group-hover:sepia-0 transition-all duration-1000" />
              </div>
              <h4 className="font-bold text-gray-800 font-serif text-lg mb-2">{album.title}</h4>
              <div className="flex justify-between text-xs text-gray-400">
                <span>📍 {album.loc}</span>
                <span className="flex items-center space-x-3">
                  <span className="flex items-center"><Heart className="w-3 h-3 mr-1" /> {Math.floor(Math.random() * 500 + 50)}</span>
                  <span className="flex items-center"><MessageCircle className="w-3 h-3 mr-1" /> {Math.floor(Math.random() * 50 + 5)}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
