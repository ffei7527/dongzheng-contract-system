import React from 'react';
import { MENU_RULES } from '../constants';
import { RefreshCw, Plus, Edit, Trash2, Settings, Table, MoreHorizontal } from 'lucide-react';
import { User, Folder, LayoutDashboard, Users, Settings as SettingsIcon, List } from 'lucide-react';

const iconMap: any = {
  user: User,
  folder: Folder,
  dashboard: LayoutDashboard,
  users: Users,
  general: SettingsIcon,
  category: List,
  auth: Users,
  men: Folder
};

const MenuRules: React.FC = () => {
  return (
    <div className="p-4 bg-[#f3f4f6] min-h-full">
      <div className="bg-white rounded shadow-sm border border-gray-200">
         <div className="p-4 border-b border-gray-100">
          <h2 className="text-gray-700 font-medium mb-1">菜单规则</h2>
          <p className="text-xs text-gray-400">菜单规则通常对应一个控制器的方法,同时菜单栏数据也从规则中获取</p>
        </div>

        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="bg-[#1f2937] p-1.5 rounded text-white"><RefreshCw size={14}/></button>
            <button className="bg-emerald-500 px-3 py-1.5 rounded text-white text-sm flex items-center"><Plus size={14} className="mr-1"/> 添加</button>
            <button className="bg-emerald-400 px-3 py-1.5 rounded text-white text-sm flex items-center"><Edit size={14} className="mr-1"/> 编辑</button>
            <button className="bg-red-400 px-3 py-1.5 rounded text-white text-sm flex items-center"><Trash2 size={14} className="mr-1"/> 删除</button>
            <button className="bg-gray-500 px-3 py-1.5 rounded text-white text-sm flex items-center"><Settings size={14} className="mr-1"/> 更多</button>
            <button className="bg-red-500 px-3 py-1.5 rounded text-white text-sm flex items-center"> 显示全部</button>
          </div>
          <div className="flex items-center space-x-2">
             <div className="flex border rounded overflow-hidden">
                <button className="px-2 py-1.5 bg-gray-100 border-r"><Table size={14} /></button>
                <button className="px-2 py-1.5 bg-white border-r"><MoreHorizontal size={14} /></button>
             </div>
          </div>
        </div>

        <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 font-medium border-b">
              <tr>
                <th className="p-4 w-10"><input type="checkbox" /></th>
                <th className="p-4">ID</th>
                <th className="p-4">标题</th>
                <th className="p-4">图标</th>
                <th className="p-4">规则</th>
                <th className="p-4">权重</th>
                <th className="p-4">状态</th>
                <th className="p-4">菜单</th>
                <th className="p-4 text-center">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MENU_RULES.map((rule) => {
                const IconComponent = iconMap[rule.icon] || SettingsIcon;
                return (
                <tr key={rule.id} className="hover:bg-gray-50">
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4">{rule.id}</td>
                  <td className="p-4 flex items-center"><span className="text-gray-400 mr-2">▶</span> {rule.title}</td>
                  <td className="p-4"><IconComponent size={16} /></td>
                  <td className="p-4 text-gray-500">{rule.rule}</td>
                  <td className="p-4">{rule.weight}</td>
                  <td className="p-4 flex items-center">
                     <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                     <span className="text-emerald-500">{rule.status === 'Normal' ? '正常' : '禁用'}</span>
                  </td>
                  <td className="p-4">
                    <div className={`w-10 h-5 rounded-full p-1 cursor-pointer transition-colors ${rule.isMenu ? 'bg-emerald-500' : 'bg-gray-300'}`}>
                      <div className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform ${rule.isMenu ? 'translate-x-5' : 'translate-x-0'}`}></div>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <button className="p-1.5 bg-[#1f2937] text-white rounded"><Plus size={12} /></button>
                      <button className="p-1.5 bg-emerald-500 text-white rounded"><Edit size={12} /></button>
                      <button className="p-1.5 bg-red-500 text-white rounded"><Trash2 size={12} /></button>
                    </div>
                  </td>
                </tr>
              )})}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuRules;