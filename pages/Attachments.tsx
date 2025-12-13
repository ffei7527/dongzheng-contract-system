import React from 'react';
import { ATTACHMENTS } from '../constants';
import { RefreshCw, Plus, Edit, Trash2, Search, Table, Grid, Upload } from 'lucide-react';

const Attachments: React.FC = () => {
  return (
    <div className="p-4 bg-[#f3f4f6] min-h-full">
      <div className="bg-white rounded shadow-sm border border-gray-200">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-gray-700 font-medium mb-1">附件管理</h2>
          <p className="text-xs text-gray-400">主要用于管理上传到服务器或第三方存储的数据</p>
        </div>
        
        {/* Filters */}
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 flex items-center space-x-2">
            <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm">全部</button>
            <button className="text-gray-500 hover:text-gray-700 px-3 py-1 rounded text-sm">分类一</button>
            <button className="text-gray-500 hover:text-gray-700 px-3 py-1 rounded text-sm">分类二</button>
            <button className="text-gray-500 hover:text-gray-700 px-3 py-1 rounded text-sm">自定义</button>
            <button className="bg-white text-blue-600 border px-3 py-1 rounded text-sm">未归类</button>
            <div className="flex-1"></div>
            <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded text-xs flex items-center"><span className="mr-1">▼</span> 类型筛选</button>
        </div>

        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="bg-[#1f2937] p-1.5 rounded text-white"><RefreshCw size={14}/></button>
            <button className="bg-emerald-500 px-3 py-1.5 rounded text-white text-sm flex items-center"><Plus size={14} className="mr-1"/> 添加</button>
            <button className="bg-emerald-400 px-3 py-1.5 rounded text-white text-sm flex items-center"><Edit size={14} className="mr-1"/> 编辑</button>
            <button className="bg-red-400 px-3 py-1.5 rounded text-white text-sm flex items-center"><Trash2 size={14} className="mr-1"/> 删除</button>
            <button className="bg-blue-500 px-3 py-1.5 rounded text-white text-sm flex items-center"><Upload size={14} className="mr-1"/> 归类</button>
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
                <th className="p-4">类别</th>
                <th className="p-4">预览</th>
                <th className="p-4">文件名</th>
                <th className="p-4">文件大小</th>
                <th className="p-4">宽度</th>
                <th className="p-4">高度</th>
                <th className="p-4">图片类型</th>
                <th className="p-4">存储引擎</th>
                <th className="p-4">Mime类型</th>
                <th className="p-4">创建日期</th>
                <th className="p-4 text-center">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {ATTACHMENTS.map((file) => (
                <tr key={file.id} className="hover:bg-gray-50">
                  <td className="p-4"><input type="checkbox" /></td>
                  <td className="p-4">{file.id}</td>
                  <td className="p-4"><span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">{file.category}</span></td>
                  <td className="p-4">
                    <img src={file.previewUrl} alt="Preview" className="h-8 w-auto object-contain bg-gray-100 border rounded cursor-pointer" />
                  </td>
                  <td className="p-4 text-blue-500 cursor-pointer hover:underline">{file.filename}</td>
                  <td className="p-4 text-gray-500">{file.size}</td>
                  <td className="p-4 text-gray-500">{file.width}</td>
                  <td className="p-4 text-gray-500">{file.height}</td>
                  <td className="p-4 text-blue-400">png</td>
                  <td className="p-4 text-blue-400">local</td>
                  <td className="p-4 text-blue-400">{file.mimeType}</td>
                  <td className="p-4 text-gray-500">{file.createTime}</td>
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
      </div>
    </div>
  );
};

export default Attachments;
