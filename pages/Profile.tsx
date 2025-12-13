import React from 'react';
import { RefreshCw, Search } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="p-4 bg-[#f3f4f6] min-h-full flex flex-col md:flex-row gap-4">
      
      {/* Profile Form */}
      <div className="bg-white rounded shadow-sm border border-gray-200 flex-1 h-fit">
         <div className="p-4 border-b border-gray-100 text-blue-500 border-l-4 border-l-blue-500 font-medium">
            个人资料
         </div>
         <div className="p-6">
            <div className="flex flex-col items-center mb-6">
               <div className="w-24 h-24 rounded-full border-4 border-gray-100 overflow-hidden mb-2 shadow-inner">
                  <img src="https://picsum.photos/200/200?random=logo" alt="Logo" className="w-full h-full object-cover" />
               </div>
               <h2 className="text-xl font-bold text-gray-800">Admin</h2>
            </div>

            <div className="space-y-4">
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">用户名:</label>
                  <input type="text" defaultValue="admin" disabled className="w-full bg-gray-100 border border-gray-200 rounded px-3 py-2 text-sm text-gray-500" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">手机:</label>
                  <input type="text" className="w-full bg-gray-100 border border-gray-200 rounded px-3 py-2 text-sm" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">邮箱:</label>
                  <input type="text" defaultValue="admin@admin.com" className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">昵称:</label>
                  <input type="text" defaultValue="Admin" className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm" />
               </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">密码:</label>
                  <input type="password" placeholder="不修改密码请留空" className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm" />
               </div>

               <div className="pt-2">
                  <button className="bg-[#1f2937] hover:bg-gray-800 text-white px-6 py-2 rounded text-sm mr-2">提交</button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 px-6 py-2 rounded text-sm border border-gray-300">重置</button>
               </div>
            </div>
         </div>
      </div>

      {/* Operation Log */}
      <div className="bg-white rounded shadow-sm border border-gray-200 flex-[1.5] h-fit">
         <div className="p-4 border-b border-gray-100 text-gray-600 font-medium flex items-center">
            <span className="border-l-4 border-gray-400 pl-2">操作日志</span>
         </div>
         
         <div className="p-4">
            <div className="flex items-center justify-between mb-4">
               <button className="bg-[#1f2937] p-1.5 rounded text-white"><RefreshCw size={14}/></button>
               <div className="flex items-center">
                  <input type="text" placeholder="搜索" className="border rounded-l px-3 py-1.5 text-sm focus:outline-none border-r-0" />
                  <button className="bg-white border rounded-r p-1.5 px-3 text-gray-500 hover:bg-gray-50"><Search size={14} /></button>
               </div>
            </div>

            <table className="w-full text-left text-sm text-gray-600">
               <thead className="bg-gray-50 text-gray-700 font-medium border-b">
                  <tr>
                     <th className="p-3">ID</th>
                     <th className="p-3">标题</th>
                     <th className="p-3">链接</th>
                     <th className="p-3">ip</th>
                     <th className="p-3 text-center">操作</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                  <tr>
                     <td colSpan={5} className="p-8 text-center text-gray-400">
                        没有找到匹配的记录
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>

    </div>
  );
};

export default Profile;
