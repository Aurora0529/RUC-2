import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Settings, Edit3, Camera, MessageSquare, Heart, Footprints, 
  ChevronRight, LogOut, ShieldCheck, Mail, Calendar, GraduationCap,
  Bell, ThumbsUp, MessageCircle, User, Lock, FileText, Sparkles, Plus,
  PenTool
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('我的上传');

  const tabs = ['我的上传', '我的留言', '我的收藏', '我的足迹'];

  const photos = [
    { id: 1, title: '秋日明德楼', date: '2016-10-21', img: '/images/ruc明德楼群.jpeg' },
    { id: 2, title: '毕业季·青春不散场', date: '2020-06-18', img: '/images/ruc田径场.jpg' },
    { id: 3, title: '立德树人', date: '2017-05-04', img: '/images/ruc实事求是石.jpg' },
    { id: 4, title: '人大夜色', date: '2018-11-30', img: '/images/ruc世纪馆.jpg' },
  ];

  const notifications = [
    { id: 1, type: '系统通知', content: '您的照片《秋日明德楼》收到了...', time: '10分钟前', icon: <Bell className="w-4 h-4 text-orange-400" /> },
    { id: 2, type: '点赞通知', content: '校友“清风徐来”点赞了您的照片', time: '1小时前', icon: <ThumbsUp className="w-4 h-4 text-red-400" /> },
    { id: 3, type: '留言通知', content: '校友“RUC小助手”回复了您的留言', time: '3小时前', icon: <MessageCircle className="w-4 h-4 text-blue-400" /> },
    { id: 4, type: '私信消息', content: '您有1条新的私信消息', time: '5分钟前', icon: <Mail className="w-4 h-4 text-purple-400" /> },
  ];

  const stats = [
    { label: '上传照片', value: '128', icon: <Camera className="w-5 h-5" /> },
    { label: '点赞总数', value: '3256', icon: <ThumbsUp className="w-5 h-5" /> },
    { label: '留言被回复', value: '89', icon: <MessageSquare className="w-5 h-5" /> },
    { label: '入驻天数', value: '1258', icon: <Calendar className="w-5 h-5" /> },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1440px] mx-auto px-12 py-10 font-serif"
    >
      <div className="grid grid-cols-12 gap-8">
        {/* Main Content Area */}
        <div className="col-span-8 space-y-8">
          
          {/* 1. Header Profile Card */}
          <div className="paper-card p-10 rounded-2xl relative overflow-hidden border-b-4 border-ruc-red/20">
            {/* Postal/Envelope Elements */}
            <div className="absolute top-6 right-10 w-24 h-24 opacity-20 pointer-events-none">
              <img src="/images/中国人民大学校徽.png" className="w-full h-full object-contain grayscale" />
            </div>
            <div className="absolute top-4 right-4 w-16 h-20 border-2 border-dashed border-gray-300 rounded flex items-center justify-center pointer-events-none">
              <div className="text-xs text-gray-300 text-center leading-tight">POSTAGE<br/>STAMP</div>
            </div>

            <div className="flex items-start space-x-10 relative z-10">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-36 h-36 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center space-x-1 bg-ruc-red text-white px-3 py-1 rounded-full text-xs shadow-sm">
                  <ShieldCheck className="w-3 h-3" />
                  <span className="font-bold tracking-wider">校友认证</span>
                </div>
              </div>

              <div className="flex-1 pt-2">
                <div className="flex items-center space-x-4 mb-6">
                  <h2 className="text-4xl font-bold text-gray-800">时光旅人</h2>
                  <span className="px-3 py-0.5 bg-accent-gold/20 text-accent-gold rounded text-sm font-bold flex items-center">
                    <Sparkles className="w-3 h-3 mr-1" /> RUCer
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-8 text-base mb-6">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <span className="text-gray-400 min-w-[4rem]">真实姓名：</span>
                    <span className="font-bold">李思思</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <span className="text-gray-400 min-w-[4rem]">入学年份：</span>
                    <span className="font-bold">2016年</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <span className="text-gray-400 min-w-[4rem]">院&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;系：</span>
                    <span className="font-bold">新闻学院</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <span className="text-gray-400 min-w-[4rem]">班&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级：</span>
                    <span className="font-bold">2016级 新闻学 (1) 班</span>
                  </div>
                </div>

                <p className="text-gray-500 italic text-base border-l-2 border-ruc-red/20 pl-4 py-1 mb-6">
                  “在人大，遇见更好的自己；在时光里，遇见更好的我们。”
                </p>
              </div>

              <button className="flex items-center space-x-2 px-6 py-2 bg-ruc-red text-white rounded-lg text-base font-bold hover:bg-ruc-red/90 transition-all shadow-lg self-end mb-4">
                <Edit3 className="w-4 h-4" />
                <span>编辑资料</span>
              </button>
            </div>
          </div>

          {/* 2. Content Tabs & Sections */}
          <div className="space-y-6">
            <div className="flex space-x-12 border-b border-gray-100 pb-2 px-4">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-4 text-lg font-bold transition-all ${
                    activeTab === tab ? 'text-ruc-red' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-1 bg-ruc-red rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* My Uploads Section */}
            <div className="paper-card p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-gray-800 flex items-center">
                  我上传的照片 <span className="ml-2 text-base font-normal text-gray-400">(128)</span>
                </h3>
                <button className="flex items-center space-x-2 px-4 py-2 bg-ruc-red/10 text-ruc-red rounded-lg text-sm font-bold hover:bg-ruc-red/20 transition-all">
                  <Plus className="w-4 h-4" />
                  <span>上传照片</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-6">
                {photos.map(photo => (
                  <motion.div key={photo.id} whileHover={{ y: -5 }} className="group">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 shadow-sm border border-gray-100">
                      <img src={photo.img} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <h4 className="text-base font-bold text-gray-800 mb-1">{photo.title}</h4>
                    <p className="text-xs text-gray-400">{photo.date}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-ruc-red' : 'bg-gray-200'}`} />
                ))}
              </div>
            </div>

            {/* Latest Messages */}
            <div className="paper-card p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-bold text-gray-800">最新留言记录 <span className="ml-2 text-base font-normal text-gray-400">(28)</span></h3>
                <button className="text-gray-400 hover:text-ruc-red text-sm tracking-wider">查看全部 &gt;</button>
              </div>
              <div className="bg-paper-cream/30 p-6 rounded-2xl border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <img src="/images/RUC·时光驿站logo图.png" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-base">RUC小助手</span>
                        <span className="px-2 py-0.5 bg-ruc-red text-white text-xs rounded uppercase">校友</span>
                      </div>
                      <span className="text-xs text-gray-300">2024-05-20 14:30</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">欢迎加入“RUC·时光驿站”，这里记录着我们的青春与回忆，期待您分享更多时光故事！</p>
                    <button className="text-xs font-bold text-gray-400 hover:text-ruc-red transition-colors">回复</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Statistics */}
            <div className="paper-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-8">我的时光统计</h3>
              <div className="grid grid-cols-4 gap-6 mb-8">
                {stats.map(stat => (
                  <div key={stat.label} className="bg-paper-cream/50 p-6 rounded-2xl text-center border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mx-auto mb-4 text-ruc-red shadow-sm">
                      {stat.icon}
                    </div>
                    <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}<span className="text-sm ml-1 font-normal text-gray-400">{stat.label === '入驻天数' ? '天' : stat.label === '上传照片' ? '张' : '次'}</span></p>
                  </div>
                ))}
              </div>
              <button className="w-full py-6 bg-ruc-red text-white rounded-2xl text-xl font-bold flex items-center justify-center space-x-4 hover:bg-ruc-red/90 transition-all shadow-xl group">
                <FileText className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span>生成个人时光报告</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-4 space-y-8">
          {/* 1. Message Center */}
          <div className="paper-card p-8 rounded-2xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-800">消息中心</h3>
              <button className="text-gray-400 hover:text-ruc-red text-sm tracking-wider">查看全部 &gt;</button>
            </div>
            <div className="space-y-6">
              {notifications.map(note => (
                <div key={note.id} className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all">
                    {note.icon}
                  </div>
                  <div className="flex-1 border-b border-gray-50 pb-4 group-hover:border-gray-100 transition-colors">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-bold text-gray-800">{note.type}</span>
                      <span className="text-xs text-gray-300">{note.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 line-clamp-1">{note.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Quick Access */}
          <div className="paper-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-8">快捷入口</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: '个人主页', icon: <User className="w-6 h-6" /> },
                { label: '时光报告', icon: <Sparkles className="w-6 h-6" /> },
                { label: '账号设置', icon: <Settings className="w-6 h-6" /> },
                { label: '隐私设置', icon: <Lock className="w-6 h-6" /> },
              ].map(item => (
                <div key={item.label} className="p-6 rounded-2xl bg-paper-cream/20 border border-gray-50 hover:bg-white hover:shadow-md transition-all text-center group cursor-pointer">
                  <div className="text-ruc-red mb-3 group-hover:scale-110 transition-transform flex justify-center">{item.icon}</div>
                  <span className="text-sm font-bold text-gray-600">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Decorative Note */}
          <div className="relative pt-12">
            <motion.div 
              whileHover={{ rotate: -2 }}
              className="bg-[#fff9e6] p-10 shadow-xl relative transform -rotate-1 border border-yellow-100/50"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 backdrop-blur-sm rounded shadow-sm border border-white/20"></div>
              <p className="text-2xl font-calligraphy text-gray-600 leading-loose">
                时光不老，<br />
                我们不散。<br />
                <span className="block text-right mt-6 text-2xl">—— RUC</span>
              </p>
              <div className="absolute -bottom-10 -right-4 w-48 h-48 opacity-90 pointer-events-none">
                <PenTool className="w-full h-full text-gray-800/10 rotate-12" />
              </div>
            </motion.div>
            {/* Real pen image simulation or icon */}
            <div className="absolute -bottom-16 -right-12 w-64 h-64 pointer-events-none rotate-[25deg]">
              <div className="w-1 h-48 bg-gradient-to-b from-gray-800 to-gray-400 rounded-full shadow-2xl relative">
                <div className="absolute top-0 w-3 h-12 bg-accent-gold rounded-full -left-1 shadow-inner"></div>
              </div>
            </div>
          </div>

          <button className="w-full py-4 text-gray-400 text-sm font-bold flex items-center justify-center space-x-2 hover:text-ruc-red transition-colors pt-12">
            <LogOut className="w-4 h-4" />
            <span>退出当前账号</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
