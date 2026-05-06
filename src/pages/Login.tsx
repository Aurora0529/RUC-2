import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, ShieldCheck, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const colleges = [
    "马克思主义学院", "中共党史党建学院", "纪检监察学院", "外国语学院", "哲学院", "国学院", 
    "历史学院", "文学院", "艺术学院", "国际文化交流学院", "劳动人事学院", "财政金融学院", 
    "国际金融学院（卓越社科人才培养基地）", "经济学院", "生态环境学院", "应用经济学院", 
    "和平与发展学院", "法学院（知识产权学院、律师学院）", "新闻学院", "国际关系学院", 
    "社会学院", "人口与健康学院", "商学院", "公共管理学院", "信息资源管理学院", 
    "农业与农村发展学院", "教育学院", "心理学系", "信息学院", "统计学院", 
    "化学与生命资源学院", "物理学院", "统计与大数据研究院", "数学学院", 
    "高瓴人工智能学院", "体育部", "深圳研究院、社会科学高等研究院（深圳）、深圳金融高等研究院", 
    "国际学院（苏州研究院）", "中法学院（远见书院）", "智慧治理学院", 
    "苏州人工智能学院（苏州人工智能实验室）", "继续教育学院、国家治理工程学院", "吴玉章学院", 
    "全球领导力学院（丝路学院）", "“一带一路”国际商学院", "明德书院", "明理书院", 
    "崇实书院", "求是书院", "新民书院"
  ];

  const handleLogin = (e: any) => {
    e.preventDefault();
    // Simulate login
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex"
    >
      {/* Left: Branding */}
      <div className="hidden lg:flex w-1/2 bg-ruc-red relative overflow-hidden items-center justify-center p-20">
        <div className="absolute inset-0 bg-[url('/images/ruc明德楼群.jpeg')] bg-cover bg-center mix-blend-multiply opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-ruc-red via-ruc-red/80 to-transparent"></div>
        
        <div className="relative z-10 text-white max-w-lg">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-7xl font-serif font-bold mb-10 tracking-widest">欢迎回家</h1>
            <p className="text-2xl font-light italic leading-relaxed opacity-80 mb-12">“无论离开多久，人大永远记得你。回到这里，拾起那些属于我们的时光。”</p>
            
            <div className="space-y-6">
              {[
                '连接全球人大校友',
                '珍藏校园珍贵记忆',
                '专属校友互动社区'
              ].map((text, i) => (
                <div key={i} className="flex items-center space-x-4 opacity-70">
                  <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                  <span className="text-base tracking-widest">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decoration */}
        <div className="absolute bottom-10 left-10 opacity-20">
          <div className="w-40 h-40 border-8 border-white rounded-full"></div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-1/2 bg-paper-cream flex items-center justify-center p-10 relative">
        <div className="absolute inset-0 bg-paper-texture opacity-30"></div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full max-w-md relative z-10"
        >
          <div className="paper-card p-10 rounded-[2.5rem] shadow-2xl">
            <div className="flex justify-center space-x-8 mb-10 border-b border-gray-100">
              <button
                onClick={() => setIsLogin(true)}
                className={`pb-4 text-base font-bold tracking-widest transition-all relative ${
                  isLogin ? 'text-ruc-red' : 'text-gray-300'
                }`}
              >
                校友登录
                {isLogin && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-1 bg-ruc-red" />}
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`pb-4 text-base font-bold tracking-widest transition-all relative ${
                  !isLogin ? 'text-ruc-red' : 'text-gray-300'
                }`}
              >
                加入我们
                {!isLogin && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-1 bg-ruc-red" />}
              </button>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {isLogin ? (
                <>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">学号 / 手机号</label>
                    <div className="relative">
                      <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="请输入您的人大标识"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent focus:bg-white focus:border-ruc-red/20 focus:ring-4 focus:ring-ruc-red/5 rounded-2xl transition-all outline-none text-base"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">登录密码</label>
                    <div className="relative">
                      <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-transparent focus:bg-white focus:border-ruc-red/20 focus:ring-4 focus:ring-ruc-red/5 rounded-2xl transition-all outline-none text-base"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">真实姓名</label>
                    <input
                      type="text"
                      className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:bg-white focus:border-ruc-red/20 focus:ring-4 focus:ring-ruc-red/5 rounded-2xl transition-all outline-none text-base"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">入学年份</label>
                      <input
                        type="number"
                        placeholder="如：2016"
                        min="1937"
                        max="2026"
                        className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:bg-white focus:border-ruc-red/20 focus:ring-4 focus:ring-ruc-red/5 rounded-2xl transition-all outline-none text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">所属院系</label>
                      <select className="w-full px-6 py-4 bg-gray-50 border border-transparent rounded-2xl outline-none text-base appearance-none focus:bg-white focus:border-ruc-red/20 transition-all">
                        {colleges.map((college) => (
                          <option key={college} value={college}>{college}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">手机号码</label>
                    <input
                      type="tel"
                      className="w-full px-6 py-4 bg-gray-50 border border-transparent focus:bg-white focus:border-ruc-red/20 focus:ring-4 focus:ring-ruc-red/5 rounded-2xl transition-all outline-none text-base"
                    />
                  </div>
                </>
              )}

              <div className="flex items-center justify-between px-2">
                <label className="flex items-center space-x-2 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-ruc-red focus:ring-ruc-red" />
                  <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">记住我</span>
                </label>
                <button type="button" className="text-xs text-ruc-red font-bold hover:underline">找回密码?</button>
              </div>

              <button type="submit" className="w-full btn-ruc py-4 flex items-center justify-center space-x-4">
                <span className="tracking-widest font-bold text-lg">{isLogin ? '开启时光旅程' : '申请加入社区'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex-1 h-[1px] bg-gray-100"></div>
                <span className="text-xs text-gray-300 uppercase tracking-[0.2em]">或通过以下方式登录</span>
                <div className="flex-1 h-[1px] bg-gray-100"></div>
              </div>
              
              <button className="w-full py-4 border border-gray-100 rounded-2xl flex items-center justify-center space-x-3 hover:bg-gray-50 transition-all group">
                <Mail className="w-4 h-4 text-gray-400 group-hover:text-green-500" />
                <span className="text-sm font-medium text-gray-600">校友邮箱验证登录</span>
              </button>
            </div>
          </div>
          
          <p className="mt-10 text-center text-xs text-gray-400 leading-relaxed">
            登录即代表您已阅读并同意 <button className="text-ruc-red underline">用户协议</button> 和 <button className="text-ruc-red underline">隐私政策</button>
            <br />
            中国人民大学校友会 版权所有
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
