import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, MapPin, X, Heart, MessageCircle } from 'lucide-react';

const Map = () => {
  const [selectedSpot, setSelectedSpot] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const spots = [
    { id: 1, name: '实事求是石', type: '景观区', pos: { x: 88, y: 48 }, desc: '位于东门入口，人大校训所在地。', history: '毛泽东同志题写，激励一代代人大人。', memory: '每天进出校门，看到“实事求是”四个字，提醒自己要脚踏实地。', image: 'images/ruc实事求是石.jpg' },
    { id: 2, name: '明德楼群', type: '教学区', pos: { x: 75, y: 50 }, desc: '承载求知岁月的精神地标。', history: '人大最具代表性的建筑群，见证无数学术盛会。', memory: '记得在明德主楼熬过的夜，和窗外初升的太阳。', image: 'images/ruc明德楼群.jpeg' },
    { id: 3, name: '一勺池', type: '景观区', pos: { x: 65, y: 42 }, desc: '校园内的灵动水景，静谧悠然。', history: '命名取自“一勺之多，可见江海”。', memory: '春天在这里看樱花，秋天在这里踩银杏。', image: 'images/ruc一勺池.jpg' },
    { id: 4, name: '图书馆', type: '教学区', pos: { x: 50, y: 45 }, desc: '知识的海洋，思想的殿堂。', history: '新图书馆于2011年落成，是国内领先的高校图书馆。', memory: '那些年为了抢座早起排队的日子，如今回想起来都是甜的。', image: 'images/ruc图书馆.jpg' },
    { id: 5, name: '教二草坪', type: '景观区', pos: { x: 45, y: 35 }, desc: '阳光明媚的日子，这里是人大人最爱的休憩地。', history: '见证了无数次吉他弹唱和草坪朗读。', memory: '教二草坪的阳光，是我们最纯粹的青春。', image: 'images/ruc教二草坪.png' },
    { id: 6, name: '求是楼', type: '教学区', pos: { x: 35, y: 70 }, desc: '庄严厚重的教学楼。', history: '命名取自校训“实事求是”。', memory: '在求是楼上课的日子，感受到了学术的严谨。', image: 'images/ruc求是楼.png' },
    { id: 7, name: '百家廊', type: '景观区', pos: { x: 70, y: 30 }, desc: '幽静的回廊，适合漫步思考。', history: '连接校园多个区域，充满人文气息。', memory: '雨天走在百家廊，听着雨声读着书。', image: 'images/ruc百家廊.png' },
    { id: 8, name: '世纪馆', type: '活动区', pos: { x: 25, y: 80 }, desc: '大型室内场馆，举办各类典礼。', history: '为迎接新世纪而建，是校园地标之一。', memory: '开学典礼和毕业典礼都在这里，是开始也是结束。', image: 'images/ruc世纪馆.jpg' },
    { id: 9, name: '田径场', type: '活动区', pos: { x: 20, y: 35 }, desc: '挥洒汗水的操场。', history: '记录了无数次校运会和体测。', memory: '晚上的操场最热闹，有人跑步，有人唱歌，有人恋爱。', image: 'images/ruc田径场.jpg' },
    { id: 10, name: '学生活动中心', type: '活动区', pos: { x: 40, y: 60 }, desc: '学生社团和课外活动的聚集地。', history: '丰富多彩的校园生活在这里展开。', memory: '在这里办过人生中第一场晚会，那是梦想起航的地方。', image: 'images/ruc学生活动中心.png' },
    { id: 11, name: '西门', type: '景观区', pos: { x: 10, y: 50 }, desc: '校园西侧的主要出入口。', history: '见证了学校与周边社区的交融。', memory: '西门外的美食，是我们课后的小确幸。', image: 'images/ruc西门.png' },
    { id: 12, name: '明德广场', type: '景观区', pos: { x: 80, y: 55 }, desc: '明德楼前的开阔广场，鸽群聚集。', history: '重大活动的举办地。', memory: '广场上的白鸽，总是能让人在忙碌中感到惬意。', image: 'images/人大_明德楼.png' },
    { id: 13, name: '北区食堂', type: '生活区', pos: { x: 55, y: 20 }, desc: '校园内人气极高的餐厅。', history: '提供了丰富多样的餐饮选择。', memory: '北食的鸡腿，永远是心中的白月光。', image: 'images/ruc手绘地图.jpg' },
    { id: 14, name: '品园宿舍区', type: '生活区', pos: { x: 42, y: 25 }, desc: '核心学生住宿区。', history: '数万校友曾经的“家”。', memory: '品园的灯光，照亮了无数个追梦的夜晚。', image: 'images/ruc手绘地图.jpg' },
    { id: 15, name: '知行楼群', type: '生活区', pos: { x: 85, y: 25 }, desc: '位于校园东北部的建筑群。', history: '包含教学、办公及住宿功能。', memory: '知行合一，是我们在人大的必修课。', image: 'images/ruc手绘地图.jpg' }
  ];

  const filteredSpots = spots.filter(spot => spot.name.includes(searchQuery));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-[1440px] mx-auto px-12 py-10"
    >
      <div className="text-center mb-12">
        <h1 className="text-6xl font-calligraphy mb-4 text-ruc-red">一草一木，皆是故事</h1>
        <p className="text-gray-500 tracking-[0.2em] font-serif italic text-lg">“点击地图上的标记，重温那些陪我们走过青春的地方”</p>
      </div>

      <div className="grid grid-cols-12 gap-8 h-[750px]">
        {/* Left: Map Area */}
        <div className="col-span-8 flex flex-col space-y-6">
          <div className="flex-1 paper-card rounded-[2rem] relative overflow-hidden bg-orange-50/30">
            <div className="absolute inset-0 bg-[url('images/ruc手绘地图.jpg')] bg-cover bg-center opacity-80"></div>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
            
            {/* Simulated Map Background */}
            <div className="absolute inset-0 p-10 flex items-center justify-center">
              <div className="w-full h-full border-2 border-dashed border-accent-gold/20 rounded-xl relative">
                {/* Map Pins */}
                {spots.map((spot) => (
                  <motion.button
                    key={spot.id}
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setSelectedSpot(spot)}
                    className="absolute p-2 bg-white rounded-full shadow-lg border-2 border-ruc-red group"
                    style={{ left: `${spot.pos.x}%`, top: `${spot.pos.y}%` }}
                  >
                    <div className="w-6 h-6 bg-ruc-red text-white rounded-full flex items-center justify-center text-[10px] font-bold">{spot.id}</div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-sm border border-gray-100">
                      {spot.name}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Search Bar on Map */}
            <div className="absolute top-8 left-8 w-80">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索地点名称，如：图书馆、明德楼群..."
                  className="w-full pl-12 pr-4 py-3 bg-white/90 backdrop-blur rounded-full border border-accent-gold/20 focus:outline-none focus:ring-2 focus:ring-ruc-red/20 shadow-sm text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Legend Filter Bar */}
          <div className="paper-card px-8 py-4 rounded-2xl flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest border-r border-gray-100 pr-6">图例筛选</span>
              <div className="flex items-center space-x-4">
                {[
                  { label: '全部', color: 'bg-ruc-red' },
                  { label: '教学楼宇', color: 'bg-orange-400' },
                  { label: '学习科研', color: 'bg-yellow-500' },
                  { label: '生活休闲', color: 'bg-green-500' },
                  { label: '文化场馆', color: 'bg-blue-500' },
                  { label: '运动场所', color: 'bg-purple-500' },
                  { label: '自然景观', color: 'bg-teal-500' },
                ].map((item) => (
                  <button key={item.label} className="flex items-center space-x-2 group">
                    <div className={`w-3 h-3 rounded-full ${item.color} group-hover:scale-125 transition-transform`}></div>
                    <span className="text-xs font-bold text-gray-600 group-hover:text-ruc-red transition-colors">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <button className="flex items-center space-x-2 text-xs font-bold text-gray-400 hover:text-ruc-red transition-colors">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center">
                <Search className="w-4 h-4" />
              </div>
              <span>查看地图列表</span>
            </button>
          </div>
        </div>

        {/* Right: Details Panel */}
        <div className="col-span-4 space-y-6 overflow-y-auto pr-4">
          {selectedSpot ? (
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="paper-card p-8 rounded-2xl sticky top-0"
            >
              <button onClick={() => setSelectedSpot(null)} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
              
              <div className="rounded-xl overflow-hidden mb-6 aspect-video">
                <img src={selectedSpot.image} className="w-full h-full object-cover" />
              </div>

              <h2 className="text-3xl font-serif font-bold ruc-red mb-2">{selectedSpot.name}</h2>
              <span className="inline-block px-3 py-1 bg-ruc-red/10 text-ruc-red text-sm rounded-full mb-6">{selectedSpot.type}</span>

              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-bold text-gray-800 mb-2 flex items-center">
                    <span className="w-1 h-4 bg-accent-gold mr-2"></span> 地点介绍
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{selectedSpot.desc}</p>
                </div>

                <div>
                  <h4 className="text-base font-bold text-gray-800 mb-2 flex items-center">
                    <span className="w-1 h-4 bg-accent-gold mr-2"></span> 校友回忆
                  </h4>
                  <div className="bg-paper-old/30 p-4 rounded-xl italic text-sm text-gray-700 leading-relaxed">
                    “{selectedSpot.memory}”
                    <p className="text-right mt-2 font-bold text-xs">— 2012级 法学院校友</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                  <div className="flex space-x-6 text-xs text-gray-400">
                    <span className="flex items-center"><Heart className="w-3 h-3 mr-1" /> 1286</span>
                    <span className="flex items-center"><MessageCircle className="w-3 h-3 mr-1" /> 342</span>
                  </div>
                  <button className="btn-ruc py-2 text-sm">我来补充回忆</button>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center paper-card p-10 rounded-2xl text-center opacity-60 grayscale-[0.5]">
              <MapPin className="w-16 h-16 text-gray-300 mb-6" />
              <p className="text-gray-400 font-medium">请点击地图上的点位<br />查看那些珍贵的校园记忆</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Map;
