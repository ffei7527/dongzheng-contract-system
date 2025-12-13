import React from 'react';
import { Upload, List } from 'lucide-react';

const Config: React.FC = () => {
  return (
    <div className="p-4 bg-[#f3f4f6] min-h-full">
      <div className="bg-white rounded shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-gray-700 font-medium mb-1">系统配置</h2>
          <p className="text-xs text-gray-400">可以在此增改系统的变量和分组,也可以自定义分组和变量</p>
        </div>

        {/* Tabs */}
        <div className="px-4 border-b border-gray-100 flex items-center space-x-6 text-sm">
          <button className="py-3 text-gray-500 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">基础配置</button>
          <button className="py-3 text-gray-500 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">字典配置</button>
          <button className="py-3 text-blue-600 border-b-2 border-blue-600 font-medium">系统配置</button>
          <button className="py-3 text-gray-500 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">分成协议</button>
          <button className="py-3 text-gray-500 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">体验协议</button>
          <button className="py-3 text-gray-500 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600">保密协议</button>
        </div>

        {/* Form Content */}
        <div className="p-6">
           <div className="grid grid-cols-12 gap-6 mb-4 font-bold text-gray-600 text-sm border-b pb-2">
             <div className="col-span-2">变量标题</div>
             <div className="col-span-10">变量值</div>
           </div>

           <div className="space-y-6">
             <div className="grid grid-cols-12 gap-6 items-center">
               <div className="col-span-2 text-sm text-gray-600">主标题</div>
               <div className="col-span-10">
                 <input type="text" defaultValue="国泰海通证券股份有限公司" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
               </div>
             </div>

             <div className="grid grid-cols-12 gap-6 items-center">
               <div className="col-span-2 text-sm text-gray-600">副标题</div>
               <div className="col-span-10">
                 <input type="text" defaultValue="保密协议合同" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
               </div>
             </div>

             <div className="grid grid-cols-12 gap-6 items-start">
               <div className="col-span-2 text-sm text-gray-600 pt-2">公章</div>
               <div className="col-span-10">
                 <div className="flex items-center space-x-2 mb-2">
                    <input type="text" defaultValue="/uploads/20250702/cddac78e2a5af1f3ee0bac59bd57ec28.png" className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50" readOnly />
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm flex items-center"><Upload size={14} className="mr-1"/> 上传</button>
                    <button className="bg-[#1f2937] hover:bg-gray-800 text-white px-4 py-2 rounded text-sm flex items-center"><List size={14} className="mr-1"/> 选择</button>
                 </div>
                 <div className="border border-gray-200 rounded p-4 w-32 h-32 flex flex-col items-center justify-center relative group bg-white">
                    <img src="https://picsum.photos/100/100?random=seal" alt="Seal" className="max-w-full max-h-full" />
                    <button className="absolute bottom-0 w-full bg-red-500 text-white text-xs py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <i className="fas fa-trash"></i> 删除
                    </button>
                 </div>
               </div>
             </div>

             <div className="grid grid-cols-12 gap-6 items-center">
               <div className="col-span-2 text-sm text-gray-600">代表</div>
               <div className="col-span-10">
                 <input type="text" defaultValue="国泰海通证券股份有限公司" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
               </div>
             </div>

             <div className="grid grid-cols-12 gap-6 items-center">
               <div className="col-span-2 text-sm text-gray-600">日期</div>
               <div className="col-span-10">
                 <input type="text" defaultValue="2024-10-21" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
               </div>
             </div>

             <div className="grid grid-cols-12 gap-6 items-center">
               <div className="col-span-2 text-sm text-gray-600">底部一句话</div>
               <div className="col-span-10">
                 <input type="text" defaultValue="所有信息请如实填写" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500" />
               </div>
             </div>

             <div className="grid grid-cols-12 gap-6 items-start">
               <div className="col-span-2 text-sm text-gray-600 pt-2">内容</div>
               <div className="col-span-10">
                  {/* Rich Text Editor Simulation */}
                  <div className="border border-gray-300 rounded">
                     <div className="bg-gray-50 border-b p-2 flex space-x-2 text-gray-600">
                        <button className="p-1 hover:bg-gray-200 rounded"><b>B</b></button>
                        <button className="p-1 hover:bg-gray-200 rounded"><i>I</i></button>
                        <button className="p-1 hover:bg-gray-200 rounded"><u>U</u></button>
                        <div className="w-px h-5 bg-gray-300 mx-2 self-center"></div>
                        <select className="text-xs bg-transparent border-none"><option>Helvetica</option></select>
                        <select className="text-xs bg-transparent border-none"><option>14</option></select>
                     </div>
                     <div className="p-4 min-h-[200px] text-sm text-gray-700 bg-white">
                       <p className="mb-2">1、甲方系中国证监会认证的证券投资咨询专业机构，在证券投资咨询方面具有专业优势。</p>
                       <p className="mb-4">2、乙方系个人投资者，需要证券投资咨询机构的专业咨询和指导。</p>
                       <p className="mb-2">甲、乙双方本着诚实信用的原则，经友好协商就甲方向乙方提供证券投资咨询服务达成如下协议：</p>
                       <p className="mb-2 font-bold">第一条 服务范围</p>
                       <p>甲方就深沪证券交易所上市交易的A股股票向乙方提供证券投资分析意见及投资建议，签署协议即生效。</p>
                     </div>
                  </div>
               </div>
             </div>
             
             <div className="grid grid-cols-12 gap-6">
                <div className="col-span-2"></div>
                <div className="col-span-10">
                   <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded text-sm">提交</button>
                   <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded text-sm ml-4">重置</button>
                </div>
             </div>

           </div>
        </div>
      </div>
    </div>
  );
};

export default Config;
