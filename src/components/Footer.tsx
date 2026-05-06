const Footer = () => {
  return (
    <footer className="bg-[#2D1B1B] text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold via-ruc-red to-accent-gold opacity-30"></div>
      
      <div className="max-w-[1440px] mx-auto px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16 border-b border-white/5 pb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10">
                <span className="text-xl font-bold">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-widest text-white">RUC·时光驿站</span>
                <span className="text-xs text-gray-500 tracking-tighter mt-1 uppercase">Time Station Alumni Community</span>
              </div>
            </div>
            <p className="text-gray-400 text-base leading-relaxed font-light mb-4">
              实事求是，艰苦奋斗。中国人民大学校友纪念社区，致力于珍藏每一位人大人的独家记忆，连接跨越时空的校园情谊。
            </p>
            <div className="space-y-2 text-sm text-gray-500 font-serif italic">
              <p>版权所有 © 中国人民大学校友会 京ICP备05066828号-1</p>
              <p>地址：北京市海淀区中关村大街59号中国人民大学  邮编：100872</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.4em] uppercase text-accent-gold mb-8">关于我们</h4>
            <ul className="space-y-4 text-base text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">校友会简介</a></li>
              <li><a href="#" className="hover:text-white transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-white transition-colors">隐私政策</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.4em] uppercase text-accent-gold mb-8">帮助中心</h4>
            <ul className="space-y-4 text-base text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">使用帮助</a></li>
              <li><a href="#" className="hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#" className="hover:text-white transition-colors">意见反馈</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold tracking-[0.4em] uppercase text-accent-gold mb-8">关注我们</h4>
            <div className="flex space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white/5 rounded-2xl border border-white/10 mb-3 overflow-hidden p-2">
                  <div className="w-full h-full bg-white/10 flex items-center justify-center rounded-lg">
                    <span className="text-[10px] text-gray-500">二维码占位</span>
                  </div>
                </div>
                <span className="text-xs text-gray-500 font-bold tracking-widest">公众号</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-white/5 rounded-2xl border border-white/10 mb-3 overflow-hidden p-2">
                  <div className="w-full h-full bg-white/10 flex items-center justify-center rounded-lg">
                    <span className="text-[10px] text-gray-500">二维码占位</span>
                  </div>
                </div>
                <span className="text-xs text-gray-500 font-bold tracking-widest">视频号</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 tracking-widest font-bold uppercase">
          <p>© 2026 RUC·时光驿站. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
