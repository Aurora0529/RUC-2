import { motion, AnimatePresence } from 'framer-motion';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, Filter, Plus, Heart, MessageCircle, Share2, X, 
  ChevronLeft, ChevronRight, Star, Footprints, Upload, 
  Calendar, MapPin, User, Shield, Camera, Image as ImageIcon,
  Clock, Sparkles
} from 'lucide-react';

const Album = () => {
  const navigate = useNavigate();
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [filter, setFilter] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [isLoggedIn] = useState(true); // Mock login status

  // Time Filters
  const [yearRange, setYearRange] = useState(2025);
  const [selectedMonth, setSelectedMonth] = useState('全部');
  const [selectedSeason, setSelectedSeason] = useState('全部');

  const categories = ['全部', '毕业照', '课堂&自习', '宿舍生活', '食堂干饭', '四季校园', '社团活动', '其他'];
  const months = ['全部', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
  const seasons = ['全部', '春', '夏', '秋', '冬'];

  const [photos, setPhotos] = useState([
    { id: 1, title: '2018届毕业合影，青春不散场', user: '那年的风', year: 2018, month: '6月', season: '夏', college: '新闻学院', location: '明德广场', category: '毕业照', likes: 268, comments: 36, image: 'images/毕业照1.jpg' },
    { id: 2, title: '期末前的图书馆自习', user: '学海无涯', year: 2019, month: '12月', season: '冬', college: '图书馆', location: '图书馆阅览室', category: '课堂&自习', likes: 156, comments: 18, image: 'images/自习1.png' },
    { id: 3, title: '宿舍夜谈，笑声满屋', user: '野生学长', year: 2020, month: '10月', season: '秋', college: '品园五楼', location: '宿舍', category: '宿舍生活', likes: 198, comments: 24, image: 'images/宿舍1.webp' },
    { id: 4, title: '北区食堂的红烧肉真香！', user: '干饭第一名', year: 2021, month: '4月', season: '春', college: '北区食堂', location: '学生食堂三楼', category: '食堂干饭', likes: 321, comments: 42, image: 'images/北区食堂.jpg' },
    { id: 5, title: '秋天的落叶', user: '摄影小白', year: 2017, month: '11月', season: '秋', college: '校园', location: '校园小路', category: '四季校园', likes: 215, comments: 27, image: 'images/秋季落叶.jpg' },
    { id: 6, title: '雪中的校园', user: 'RUCer', year: 2016, month: '1月', season: '冬', college: '校园', location: '校园', category: '四季校园', likes: 189, comments: 16, image: 'images/冬日雪景.jpg' },
    { id: 7, title: '吉他社迎新演出', user: '爱乐人', year: 2022, month: '9月', season: '秋', college: '世纪馆', location: '世纪馆前', category: '社团活动', likes: 145, comments: 20, image: 'images/爱乐社.jpg' },
    { id: 8, title: '书法社团挥毫泼墨', user: '墨香', year: 2023, month: '5月', season: '春', college: '学生活动中心', location: '活动室', category: '社团活动', likes: 178, comments: 15, image: 'images/书法社团.jpg' },
    { id: 9, title: '春日桃花盛开', user: '春日使者', year: 2024, month: '4月', season: '春', college: '校园', location: '一勺池边', category: '四季校园', likes: 230, comments: 30, image: 'images/春季桃花.jpg' },
    { id: 10, title: '篮球场上的汗水', user: '灌篮高手', year: 2020, month: '10月', season: '秋', college: '体育场', location: '室外篮球场', category: '其他', likes: 165, comments: 12, image: 'images/篮球场.png' }
  ]);

  const filteredPhotos = useMemo(() => {
    return photos.filter(p => {
      const matchCategory = filter === '全部' || p.category === filter;
      const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.user.toLowerCase().includes(searchQuery.toLowerCase());
      const matchYear = p.year <= yearRange;
      const matchMonth = selectedMonth === '全部' || p.month === selectedMonth;
      const matchSeason = selectedSeason === '全部' || p.season === selectedSeason;
      
      return matchCategory && matchSearch && matchYear && matchMonth && matchSeason;
    }).sort((a, b) => b.id - a.id);
  }, [photos, filter, searchQuery, yearRange, selectedMonth, selectedSeason]);

  const hotPhotos = useMemo(() => {
    return [...photos].sort((a, b) => b.likes - a.likes).slice(0, 5);
  }, [photos]);

  const handleUploadClick = () => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      setShowUploadModal(true);
    }
  };

  const [comments, setComments] = useState<any>([
    { id: 1, user: '清风徐来', text: '我也在那天！后面穿白色外衣的是我😁', time: '2019年4月2日', likes: 12 },
    { id: 2, user: 'RUCer_小新', text: '人大东门的春天真的百看不厌。', time: '2024年5月20日', likes: 5 }
  ]);

  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const comment = {
      id: comments.length + 1,
      user: '时光旅人',
      text: newComment,
      time: '刚刚',
      likes: 0
    };
    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleLike = (id: number) => {
    setPhotos(photos.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleIWasThere = (id: number) => {
    // Logic for "I was there"
    alert('已记录您的足迹！');
  };

  const handleFavorite = (id: number) => {
    // Logic for Favorite
    alert('已收藏到个人时光舱！');
  };

  const handlePrevPhoto = () => {
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[prevIndex]);
  };

  const handleNextPhoto = () => {
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
  };

  const [uploadData, setUploadData] = useState({
    title: '',
    year: 2024,
    location: '',
    desc: '',
    category: '毕业照',
    privacy: '公开'
  });

  const handleUploadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPhoto = {
      id: photos.length + 1,
      ...uploadData,
      user: '时光旅人',
      year: Number(uploadData.year),
      month: '5月', // Mock current month
      season: '春', // Mock current season
      college: '新闻学院', // Mock
      likes: 0,
      comments: 0,
      image: 'images/ruc实事求是石.jpg' // Mock uploaded image
    };
    setPhotos([newPhoto, ...photos]);
    setShowUploadModal(false);
    // Reset form
    setUploadData({
      title: '',
      year: 2024,
      location: '',
      desc: '',
      category: '毕业照',
      privacy: '公开'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1440px] mx-auto px-12 py-10"
    >
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-6xl font-calligraphy mb-4 text-gray-900">时光影集 · 每一帧都动人</h1>
          <p className="text-gray-500 text-lg tracking-widest font-serif italic">“时光会走远，记忆会留影。欢迎上传你的照片，分享你的人大故事。”</p>
        </div>
        <button 
          onClick={handleUploadClick}
          className="bg-ruc-red text-white px-10 py-4 rounded-full flex items-center space-x-3 hover:bg-ruc-red/90 transition-all shadow-xl group"
        >
          <Upload className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
          <span className="text-xl font-bold tracking-widest">上传你的人大记忆</span>
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-2.5 rounded-full text-lg transition-all whitespace-nowrap border-2 ${
              filter === cat 
                ? 'bg-ruc-red border-ruc-red text-white shadow-lg' 
                : 'bg-white border-gray-100 text-gray-500 hover:border-ruc-red hover:text-ruc-red shadow-sm'
            }`}
          >
            {cat}
          </button>
        ))}
        
        <div className="ml-auto relative w-80">
          <input
            type="text"
            placeholder="搜索关键词或校友昵称..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white rounded-full border border-gray-100 focus:outline-none focus:ring-2 focus:ring-ruc-red/20 shadow-sm text-base"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* Main Content: Photo Grid */}
        <div className="col-span-9 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo) => (
              <motion.div
                layoutId={`photo-${photo.id}`}
                key={photo.id}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedPhoto(photo)}
                className="paper-card p-5 rounded-[2rem] cursor-pointer group hover:shadow-2xl transition-all border border-transparent hover:border-accent-gold/20"
              >
                <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3] relative">
                  <img src={photo.image} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/40 text-white font-bold tracking-widest">查看详情</div>
                  </div>
                </div>
                <h4 className="font-bold text-gray-800 font-serif text-lg mb-3 line-clamp-1">{photo.title}</h4>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <User className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-700">@{photo.user}</span>
                      <span className="text-[10px] uppercase tracking-tighter">{photo.year}届 | {photo.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleLike(photo.id); }}
                      className="flex items-center group/icon hover:text-ruc-red transition-colors"
                    >
                      <Heart className="w-4 h-4 mr-1 group-hover/icon:fill-ruc-red transition-all" /> {photo.likes}
                    </button>
                    <span className="flex items-center group/icon"><MessageCircle className="w-4 h-4 mr-1 group-hover/icon:text-blue-500 transition-colors" /> {photo.comments}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredPhotos.length === 0 && (
            <div className="py-32 text-center paper-card rounded-[2rem] opacity-50 grayscale">
              <Camera className="w-20 h-20 mx-auto mb-6 text-gray-300" />
              <p className="text-xl text-gray-400">暂时没有找到相关记忆，换个筛选条件试试吧</p>
            </div>
          )}

          <div className="flex justify-center">
            <button className="px-12 py-4 bg-white border border-gray-100 rounded-full text-base font-bold text-gray-400 hover:text-ruc-red hover:shadow-xl transition-all group">
              查看全部热门照片 <ChevronRight className="w-5 h-5 inline-block group-hover:translate-x-2 transition-transform ml-2" />
            </button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 space-y-10">
          {/* 1. Hot Ranking */}
          <div className="paper-card p-8 rounded-[2rem] border-t-4 border-accent-gold">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold shadow-inner">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-serif tracking-widest">热门照片榜 <span className="ruc-red italic ml-2">TOP 5</span></h3>
            </div>
            <div className="space-y-8">
              {hotPhotos.map((photo, i) => (
                <div key={photo.id} onClick={() => setSelectedPhoto(photo)} className="flex items-center space-x-4 group cursor-pointer">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg border-2 border-white group-hover:scale-105 transition-transform">
                      <img src={photo.image} className="w-full h-full object-cover" />
                    </div>
                    <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold text-white shadow-xl ${i === 0 ? 'bg-accent-gold' : i === 1 ? 'bg-gray-400' : 'bg-gray-300'}`}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h4 className="text-base font-bold text-gray-800 line-clamp-1 group-hover:text-ruc-red transition-colors mb-1">{photo.title}</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">@{photo.user}</span>
                      <span className="text-xs ruc-red font-bold flex items-center"><Heart className="w-3 h-3 mr-1 fill-ruc-red" /> {photo.likes}</span>
                    </div>
                    <div className="mt-1 flex items-center text-[10px] text-gray-300">
                      <MapPin className="w-2 h-2 mr-1" /> {photo.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3 bg-gray-50 text-gray-400 rounded-xl text-sm font-bold hover:bg-gray-100 transition-all">查看完整榜单 &gt;</button>
          </div>

          {/* 2. Time Filter */}
          <div className="paper-card p-8 rounded-[2rem]">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-ruc-red/10 flex items-center justify-center text-ruc-red shadow-inner">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 font-serif tracking-widest">时光筛选器</h3>
            </div>
            
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">年份筛选</label>
                  <span className="text-xl font-bold ruc-red">2000 - {yearRange}</span>
                </div>
                <input 
                  type="range" 
                  min="2000" 
                  max="2025" 
                  value={yearRange}
                  onChange={(e) => setYearRange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-ruc-red"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">月份筛选</label>
                <div className="grid grid-cols-4 gap-2">
                  {months.map(m => (
                    <button 
                      key={m}
                      onClick={() => setSelectedMonth(m)}
                      className={`py-2 rounded-lg text-xs font-bold transition-all ${
                        selectedMonth === m ? 'bg-ruc-red text-white shadow-md' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">季节筛选</label>
                <div className="flex items-center space-x-4">
                  {seasons.map(s => (
                    <button 
                      key={s}
                      onClick={() => setSelectedSeason(s)}
                      className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${
                        selectedSeason === s ? 'bg-ruc-red text-white shadow-md' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => {
                setYearRange(2025);
                setSelectedMonth('全部');
                setSelectedSeason('全部');
                setSearchQuery('');
              }}
              className="w-full mt-10 py-4 border border-dashed border-gray-200 text-gray-300 rounded-xl text-sm font-bold hover:text-ruc-red hover:border-ruc-red transition-all"
            >
              重置所有筛选
            </button>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUploadModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUploadModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="p-10 border-b border-gray-100 flex justify-between items-center bg-paper-cream">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-ruc-red flex items-center justify-center text-white shadow-lg">
                    <Camera className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-800 tracking-wider">上传记忆照片</h2>
                    <p className="text-sm text-gray-400 mt-1 uppercase tracking-widest font-bold">New Memory Fragment</p>
                  </div>
                </div>
                <button onClick={() => setShowUploadModal(false)} className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-400 hover:text-ruc-red transition-all shadow-sm">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-10 space-y-8">
                {/* Image Drop Area */}
                <div className="border-4 border-dashed border-gray-100 rounded-[2rem] p-12 text-center group hover:border-ruc-red/20 hover:bg-ruc-red/[0.02] transition-all cursor-pointer">
                  <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-6 text-gray-300 group-hover:scale-110 group-hover:text-ruc-red transition-all">
                    <ImageIcon className="w-10 h-10" />
                  </div>
                  <p className="text-xl font-bold text-gray-700 mb-2">点击或拖拽照片到这里</p>
                  <p className="text-sm text-gray-400">支持 JPG, PNG 格式，最大 10MB</p>
                </div>

                <form onSubmit={handleUploadSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">照片标题</label>
                      <input 
                        type="text" 
                        placeholder="给这张照片起个名字吧..."
                        required
                        value={uploadData.title}
                        onChange={(e) => setUploadData({...uploadData, title: e.target.value})}
                        className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:bg-white focus:border-ruc-red/20 focus:ring-4 focus:ring-ruc-red/5 rounded-2xl transition-all outline-none text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">拍摄年份</label>
                      <input 
                        type="number" 
                        placeholder="如：2016"
                        required
                        value={uploadData.year}
                        onChange={(e) => setUploadData({...uploadData, year: Number(e.target.value)})}
                        className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:bg-white focus:border-ruc-red/20 focus:ring-4 focus:ring-ruc-red/5 rounded-2xl transition-all outline-none text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">拍摄地点</label>
                      <input 
                        type="text" 
                        placeholder="如：明德广场、一勺池..."
                        required
                        value={uploadData.location}
                        onChange={(e) => setUploadData({...uploadData, location: e.target.value})}
                        className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:bg-white focus:border-ruc-red/20 focus:ring-4 focus:ring-ruc-red/5 rounded-2xl transition-all outline-none text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">记忆分类</label>
                      <select 
                        className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl outline-none text-base appearance-none focus:bg-white focus:border-ruc-red/20 transition-all"
                        value={uploadData.category}
                        onChange={(e) => setUploadData({...uploadData, category: e.target.value})}
                      >
                        {categories.filter(c => c !== '全部').map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">记忆描述</label>
                    <textarea 
                      placeholder="写下这张照片背后的故事..."
                      rows={4}
                      value={uploadData.desc}
                      onChange={(e) => setUploadData({...uploadData, desc: e.target.value})}
                      className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:bg-white focus:border-ruc-red/20 focus:ring-4 focus:ring-ruc-red/5 rounded-2xl transition-all outline-none text-base resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between px-4 pt-4">
                    <div className="flex items-center space-x-8">
                      <label className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="privacy" 
                          value="公开"
                          checked={uploadData.privacy === '公开'}
                          onChange={(e) => setUploadData({...uploadData, privacy: e.target.value})}
                          className="w-5 h-5 accent-ruc-red" 
                        />
                        <span className="text-sm font-bold text-gray-500 group-hover:text-gray-800 transition-colors">全平台公开</span>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer group">
                        <input 
                          type="radio" 
                          name="privacy" 
                          value="仅校友"
                          checked={uploadData.privacy === '仅校友'}
                          onChange={(e) => setUploadData({...uploadData, privacy: e.target.value})}
                          className="w-5 h-5 accent-ruc-red" 
                        />
                        <span className="text-sm font-bold text-gray-500 group-hover:text-gray-800 transition-colors flex items-center">
                          <Shield className="w-3 h-3 mr-1" /> 仅校友可见
                        </span>
                      </label>
                    </div>
                    <button type="submit" className="bg-ruc-red text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-ruc-red-dark transition-all transform hover:scale-105 active:scale-95">
                      确认发布记忆
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Photo Detail Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-8 lg:p-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            ></motion.div>
            
            <motion.div
              layoutId={`photo-${selectedPhoto.id}`}
              className="relative w-full max-w-7xl h-full bg-white rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl"
            >
              {/* Left: Image */}
              <div className="flex-1 bg-black relative flex items-center justify-center overflow-hidden group">
                <img src={selectedPhoto.image} className="max-w-full max-h-full object-contain" />
                <button onClick={() => setSelectedPhoto(null)} className="absolute top-8 left-8 p-4 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all backdrop-blur-md">
                  <X className="w-8 h-8" />
                </button>
                <div className="absolute inset-y-0 left-8 flex items-center">
                  <button 
                    onClick={handlePrevPhoto}
                    className="p-4 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all backdrop-blur-md opacity-0 group-hover:opacity-100 transform -translate-x-10 group-hover:translate-x-0"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                </div>
                <div className="absolute inset-y-0 right-8 flex items-center">
                  <button 
                    onClick={handleNextPhoto}
                    className="p-4 bg-white/10 hover:bg-white/30 text-white rounded-full transition-all backdrop-blur-md opacity-0 group-hover:opacity-100 transform translate-x-10 group-hover:translate-x-0"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center space-x-4">
                  <div className="bg-black/40 backdrop-blur-md px-6 py-2 rounded-full text-white text-sm font-bold tracking-widest border border-white/20">
                    {selectedPhoto.id} / {photos.length}
                  </div>
                </div>
              </div>

              {/* Right: Info */}
              <div className="w-full lg:w-[450px] bg-paper-cream p-12 overflow-y-auto flex flex-col">
                <div className="mb-10">
                  <div className="flex items-center space-x-5 mb-8">
                    <div className="w-14 h-14 rounded-full bg-ruc-red flex items-center justify-center text-white text-xl font-bold shadow-lg">R</div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-xl tracking-wider">@{selectedPhoto.user}</h4>
                      <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">{selectedPhoto.year}届 | {selectedPhoto.college}</p>
                    </div>
                    <button className="ml-auto px-6 py-2 border-2 border-ruc-red text-ruc-red text-sm font-bold rounded-full hover:bg-ruc-red hover:text-white transition-all">关注</button>
                  </div>
                  
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6 tracking-wide leading-tight">{selectedPhoto.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8 italic font-serif opacity-80">
                    “{selectedPhoto.desc || '那年的春天，樱花开得真美，我们在树下拍了很多照片，时光匆匆，但这份美好永远留在了回忆里。'}”
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-400 mb-10 pb-10 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-accent-gold" />
                      <span className="font-bold">{selectedPhoto.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-accent-gold" />
                      <span className="font-bold">{selectedPhoto.year}年{selectedPhoto.month || '5月'}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4 mb-10">
                    <button 
                      onClick={() => handleLike(selectedPhoto.id)}
                      className="flex flex-col items-center justify-center space-y-2 group p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all"
                    >
                      <Heart className={`w-6 h-6 ${selectedPhoto.likes > 0 ? 'text-ruc-red fill-ruc-red' : 'text-gray-300'} group-hover:text-ruc-red transition-colors`} />
                      <span className="text-xs text-gray-400 font-bold">{selectedPhoto.likes}</span>
                    </button>
                    <button className="flex flex-col items-center justify-center space-y-2 group p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
                      <MessageCircle className="w-6 h-6 text-gray-300 group-hover:text-blue-500 transition-colors" />
                      <span className="text-xs text-gray-400 font-bold">{comments.length}</span>
                    </button>
                    <button 
                      onClick={() => handleFavorite(selectedPhoto.id)}
                      className="flex flex-col items-center justify-center space-y-2 group p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all"
                    >
                      <Star className="w-6 h-6 text-gray-300 group-hover:text-accent-gold transition-colors" />
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">收藏到时光舱</span>
                    </button>
                    <button 
                      onClick={() => handleIWasThere(selectedPhoto.id)}
                      className="flex flex-col items-center justify-center space-y-2 group p-4 rounded-2xl bg-accent-gold/10 shadow-sm hover:shadow-md transition-all border border-accent-gold/20"
                    >
                      <Footprints className="w-6 h-6 text-accent-gold" />
                      <span className="text-[10px] text-accent-gold font-bold uppercase tracking-tighter">我也在那儿</span>
                    </button>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="flex-1 space-y-8">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">全部评论 ({comments.length})</h4>
                    <button className="text-xs text-gray-400 hover:text-ruc-red font-bold">查看全部 &gt;</button>
                  </div>
                  <div className="space-y-6">
                    {comments.map((comment: any) => (
                      <div key={comment.id} className="flex space-x-4 group">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex-shrink-0 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center">
                          <User className="w-6 h-6 text-orange-300" />
                        </div>
                        <div className="flex-1 border-b border-gray-50 pb-4 group-last:border-0">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-bold text-gray-800 tracking-wider">{comment.user}</span>
                            <span className="text-[10px] text-gray-300">{comment.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed font-serif">{comment.text}</p>
                          <div className="mt-2 flex items-center space-x-4">
                            <button className="text-[10px] font-bold text-gray-400 hover:text-ruc-red transition-colors uppercase tracking-widest">回复</button>
                            <button className="text-[10px] font-bold text-gray-400 hover:text-ruc-red transition-colors flex items-center"><Heart className="w-2.5 h-2.5 mr-1" /> {comment.likes || 0}</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Comment Input */}
                <form onSubmit={handleAddComment} className="mt-8 pt-8 border-t border-gray-100 relative z-10">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="写下你的留言吧..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="w-full pl-6 pr-16 py-4 bg-white rounded-2xl border border-gray-100 focus:outline-none focus:ring-4 focus:ring-ruc-red/5 focus:border-ruc-red/20 text-base shadow-sm transition-all"
                    />
                    <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-ruc-red text-white text-sm font-bold rounded-xl shadow-lg hover:bg-ruc-red-dark transition-all transform hover:scale-105 active:scale-95">发送</button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Album;
