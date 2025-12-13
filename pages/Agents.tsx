import React from 'react';
import { AGENTS } from '../constants';
import { RefreshCw, Plus, Trash2, Edit, Search, Table, Grid } from 'lucide-react';

const Agents: React.FC = () => {
  return (
    <div className="p-4 bg-[#f3f4f6] min-h-full">
      <div className="bg-white rounded shadow-sm border border-gray-200">
         <div className="p-4 border-b border-gray-100">
          <h2 className="text-gray-700 font-medium mb-1">添加代理</h2>
          <p className="text-xs text-gray-400">一个管理员可以有多个角色组,左侧的菜单根据管理员所拥有的权限进行生成</p>
        </div>

        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="bg-[#1f2937] p-1.5 rounded text-white"><RefreshCw size={14}/></button>
            <button className="bg-emerald-500 px-3 py-1.5 rounded text-white text-sm flex items-center"><Plus size={14} className="mr-1"/> 添加</button>
            <button className="bg-red-400 px-3 py-1.5 rounded text-white text-sm flex items-center"><Trash2 size={14} className="mr-1"/> 删除</button>
          </div>
          <div className="flex items-center space-x-2">
             <div className="relative">
                <input type="text" placeholder="搜索" className="border rounded px-3 py-1.5 text-sm focus:outline-none"/>
             </div>
             <div className="flex border rounded overflow-hidden">
                <button className="px-2 py-1.5 bg-gray-100 border-r"><Table size={14} /></button>
                <button className="px-2 py-1.5 bg-white border-r"><Grid size={14} /></button>
                <button className="px-2 py-1.5 bg-white"><Search size={14} /></button>
             </div>
          </div>
        </div>

        <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 font-medium border-b">
              <tr>
                <th className="p-4 w-10"><input type="checkbox" /></th>
                <th className="p-4">ID</th>
                <th className="p-4">用户名</th>
                <th className="p-4">昵称</th>
                <th className="p-4">所属组别</th>
                <th className="p-4">电子邮箱</th>
                <th className="p-4">手机号</th>
                <th className="p-4">状态</th>
                <th className="p-4">最后登录</th>
                <th className="p-4 text-center">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {AGENTS.map((agent) => (
                <tr key={agent.id} className="hover:bg-gray-50">
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4">{agent.id}</td>
                  <td className="p-4">{agent.username}</td>
                  <td className="p-4">{agent.nickname}</td>
                  <td className="p-4"><span className="bg-[#1f2937] text-white text-xs px-2 py-1 rounded">{agent.groupName}</span></td>
                  <td className="p-4">{agent.email}</td>
                  <td className="p-4">{agent.phone}</td>
                  <td className="p-4 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                    <span className="text-emerald-500">{agent.status === 'Normal' ? '正常' : '禁用'}</span>
                  </td>
                  <td className="p-4">{agent.lastLogin}</td>
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center space-x-1">
                      <button className="p-1.5 bg-emerald-500 text-white rounded"><Edit size={12} /></button>
                      <button className="p-1.5 bg-red-500 text-white rounded"><Trash2 size={12} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
        
        <div className="p-4 text-xs text-gray-500 border-t">
          显示第 1 到第 2 条记录，总共 2 条记录
        </div>
      </div>
    </div>
  );
};

export default Agents;
