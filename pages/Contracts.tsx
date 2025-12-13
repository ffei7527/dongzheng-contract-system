import React from 'react';
import { CONTRACTS } from '../constants';
import { RefreshCw, Plus, Edit, Trash2, Search, Table, Grid } from 'lucide-react';

const Contracts: React.FC = () => {
  return (
    <div className="p-4 bg-[#f3f4f6] min-h-full">
      <div className="bg-white rounded shadow-sm border border-gray-200">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex space-x-2">
            <button className="bg-[#1f2937] hover:bg-gray-800 text-white px-3 py-1.5 rounded text-sm flex items-center">
              <RefreshCw size={14} className="mr-1" />
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded text-sm flex items-center">
              <Plus size={14} className="mr-1" /> 添加
            </button>
            <button className="bg-emerald-400 hover:bg-emerald-500 text-white px-3 py-1.5 rounded text-sm flex items-center">
              <Edit size={14} className="mr-1" /> 编辑
            </button>
            <button className="bg-red-400 hover:bg-red-500 text-white px-3 py-1.5 rounded text-sm flex items-center">
              <Trash2 size={14} className="mr-1" /> 删除
            </button>
          </div>
          
          <div className="flex items-center space-x-2 w-full sm:w-auto">
             <div className="relative flex-1 sm:flex-none">
                <input 
                  type="text" 
                  placeholder="搜索" 
                  className="border border-gray-300 rounded px-3 py-1.5 text-sm w-full sm:w-64 focus:outline-none focus:border-blue-500"
                />
                <Search size={14} className="absolute right-3 top-2.5 text-gray-400" />
             </div>
             <div className="flex border rounded overflow-hidden">
                <button className="px-2 py-1.5 bg-gray-100 hover:bg-gray-200 border-r"><Table size={14} /></button>
                <button className="px-2 py-1.5 bg-white hover:bg-gray-100 border-r"><Grid size={14} /></button>
                <button className="px-2 py-1.5 bg-white hover:bg-gray-100"><Search size={14} /></button>
             </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-700 font-medium border-b">
              <tr>
                <th className="p-4 w-10"><input type="checkbox" className="rounded border-gray-300" /></th>
                <th className="p-4">合同模板</th>
                <th className="p-4">是否签名</th>
                <th className="p-4">姓名</th>
                <th className="p-4">身份证号</th>
                <th className="p-4">地址</th>
                <th className="p-4">签名</th>
                <th className="p-4">查看合同</th>
                <th className="p-4">创建时间</th>
                <th className="p-4 text-center">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {CONTRACTS.map((contract) => (
                <tr key={contract.id} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                  <td className="p-4 text-emerald-500 font-medium">{contract.templateName}</td>
                  <td className="p-4"><span className="text-emerald-500">{contract.isSigned ? '是' : '否'}</span></td>
                  <td className="p-4 font-medium text-gray-900">{contract.name}</td>
                  <td className="p-4 text-gray-500">{contract.idNumber}</td>
                  <td className="p-4 text-gray-500 max-w-xs truncate" title={contract.address}>{contract.address}</td>
                  <td className="p-4">
                    <img src={contract.signatureUrl} alt="Sign" className="h-8 object-contain bg-gray-100 border rounded" />
                  </td>
                  <td className="p-4">
                    <button className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded">点击查看</button>
                  </td>
                  <td className="p-4 text-gray-500">{contract.createTime}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center space-x-1">
                       <button className="p-1.5 bg-emerald-500 text-white rounded hover:bg-emerald-600"><Edit size={12} /></button>
                       <button className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600"><Trash2 size={12} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
           <div className="mb-4 sm:mb-0">
             显示第 1 到第 {CONTRACTS.length} 条记录，总共 {CONTRACTS.length * 7} 条记录 每页显示 
             <select className="mx-2 border rounded px-1">
               <option>10</option>
               <option>20</option>
             </select>
             条记录
           </div>
           <div className="flex items-center space-x-1">
             <button className="px-3 py-1 border rounded bg-white hover:bg-gray-50">上一页</button>
             <button className="px-3 py-1 border rounded bg-[#1f2937] text-white">1</button>
             <button className="px-3 py-1 border rounded bg-white hover:bg-gray-50">2</button>
             <button className="px-3 py-1 border rounded bg-white hover:bg-gray-50">3</button>
             <span className="px-2">...</span>
             <button className="px-3 py-1 border rounded bg-white hover:bg-gray-50">7</button>
             <button className="px-3 py-1 border rounded bg-white hover:bg-gray-50">下一页</button>
             <div className="ml-2 flex items-center">
                跳转 <input type="text" className="w-10 border rounded mx-1 text-center" />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contracts;
