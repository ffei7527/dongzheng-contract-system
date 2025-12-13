import React from 'react';
import { Menu, Home, Trash2, X, Settings } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  activePage: Page;
  pageHistory: Page[];
  onNavigate: (page: Page) => void;
  onClosePage: (page: Page) => void;
}

const pageNames: Record<Page, string> = {
  CONTRACTS: '合同管理',
  ROLES: '角色组',
  AGENTS: '添加代理',
  MENUS: '菜单规则',
  CONFIG: '系统配置',
  ATTACHMENTS: '附件管理',
  PROFILE: '个人资料',
};

const Header: React.FC<HeaderProps> = ({ activePage, pageHistory, onNavigate, onClosePage }) => {
  return (
    <div className="bg-white shadow-sm flex flex-col">
      {/* Top Bar */}
      <div className="h-12 border-b flex items-center justify-between px-4">
        <div className="flex items-center text-gray-600">
          <button className="p-1 hover:bg-gray-100 rounded mr-2">
            <Menu size={20} />
          </button>
          <div className="flex items-center space-x-4 text-sm ml-2">
            {pageHistory.slice(0, 5).map(page => (
              <div 
                key={page}
                className={`flex items-center cursor-pointer hover:text-blue-600 ${activePage === page ? 'text-blue-600 font-medium' : ''}`}
                onClick={() => onNavigate(page)}
              >
                 {pageNames[page]}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4 text-gray-500 text-sm">
          <button className="flex items-center hover:text-gray-700">
            <Home size={16} className="mr-1" />
            主页
          </button>
          <button className="flex items-center hover:text-gray-700">
            <Trash2 size={16} className="mr-1" />
            清除缓存
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <X size={16} />
          </button>
          
          <div className="flex items-center ml-4 border-l pl-4">
             <img src="https://picsum.photos/30/30?random=admin" className="w-6 h-6 rounded-full mr-2" alt="Admin" />
             <span className="mr-1">Admin</span>
             <Settings size={14} />
          </div>
        </div>
      </div>

      {/* Tabs Bar */}
      <div className="h-10 border-b flex items-center bg-white px-2">
        <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar">
           {pageHistory.map((page) => (
             <div 
              key={page}
              className={`
                group flex items-center px-3 py-1.5 text-xs border rounded-sm cursor-pointer whitespace-nowrap
                ${activePage === page ? 'bg-gray-100 border-gray-300 text-gray-800' : 'border-transparent hover:bg-gray-50 text-gray-500'}
              `}
              onClick={() => onNavigate(page)}
             >
               {pageNames[page]}
               {pageHistory.length > 1 && (
                 <span 
                  className="ml-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    onClosePage(page);
                  }}
                 >
                   <X size={12} />
                 </span>
               )}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Header;