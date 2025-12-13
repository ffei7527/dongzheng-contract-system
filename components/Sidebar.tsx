import React, { useState } from 'react';
import { 
  FileText, 
  Settings, 
  ChevronDown, 
  ChevronRight,
  Shield
} from 'lucide-react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, onNavigate }) => {
  const [openMenus, setOpenMenus] = useState<string[]>(['auth', 'general']);

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => 
      prev.includes(menu) ? prev.filter(m => m !== menu) : [...prev, menu]
    );
  };

  const MenuItem = ({ 
    icon: Icon, 
    label, 
    isActive, 
    onClick,
    hasSubmenu = false,
    isOpen = false
  }: any) => (
    <div 
      className={`
        flex items-center px-4 py-3 cursor-pointer text-sm font-medium transition-colors
        ${isActive ? 'bg-blue-600 text-white border-l-4 border-blue-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}
        ${!isActive && 'border-l-4 border-transparent'}
      `}
      onClick={onClick}
    >
      <Icon size={18} className="mr-3" />
      <span className="flex-1">{label}</span>
      {hasSubmenu && (
        isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />
      )}
    </div>
  );

  const SubMenuItem = ({ label, isActive, onClick }: any) => (
    <div 
      className={`
        pl-12 py-2 cursor-pointer text-sm transition-colors flex items-center
        ${isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300'}
      `}
      onClick={onClick}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-50"></span>
      {label}
    </div>
  );

  return (
    <div className="w-64 bg-[#1f2937] h-screen flex flex-col text-white flex-shrink-0">
      {/* Brand */}
      <div className="h-14 flex items-center px-4 bg-[#111827] border-b border-gray-700">
        <span className="text-lg font-bold tracking-wide">东证融汇合同系统</span>
      </div>

      {/* User Info */}
      <div className="p-4 flex items-center border-b border-gray-700 bg-[#1f2937]">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl mr-3">
          <img src="https://picsum.photos/50/50?random=user" alt="Admin" className="w-full h-full rounded-full object-cover" />
        </div>
        <div>
          <div className="text-sm font-semibold text-white">Admin</div>
          <div className="flex items-center text-xs text-green-400 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-green-400 mr-1.5"></span>
            在线
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 bg-[#1f2937]">
        <div className="relative">
          <input 
            type="text" 
            placeholder="搜索菜单" 
            className="w-full bg-[#374151] text-gray-300 text-sm rounded px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-500"
          />
          <div className="absolute right-3 top-2.5 text-gray-500">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto sidebar-scroll">
        <MenuItem 
          icon={FileText} 
          label="合同管理" 
          isActive={currentPage === 'CONTRACTS'} 
          onClick={() => onNavigate('CONTRACTS')} 
        />
        
        <MenuItem 
          icon={Shield} 
          label="权限管理" 
          hasSubmenu 
          isOpen={openMenus.includes('auth')} 
          onClick={() => toggleMenu('auth')}
        />
        {openMenus.includes('auth') && (
          <div className="bg-[#111827] py-1">
            <SubMenuItem 
              label="角色组" 
              isActive={currentPage === 'ROLES'} 
              onClick={() => onNavigate('ROLES')} 
            />
            <SubMenuItem 
              label="添加代理" 
              isActive={currentPage === 'AGENTS'} 
              onClick={() => onNavigate('AGENTS')} 
            />
            <SubMenuItem 
              label="管理员日志" 
              isActive={false} 
              onClick={() => {}} 
            />
          </div>
        )}

        <MenuItem 
          icon={Settings} 
          label="常规管理" 
          hasSubmenu 
          isOpen={openMenus.includes('general')} 
          onClick={() => toggleMenu('general')}
        />
        {openMenus.includes('general') && (
          <div className="bg-[#111827] py-1">
            <SubMenuItem 
              label="菜单规则" 
              isActive={currentPage === 'MENUS'} 
              onClick={() => onNavigate('MENUS')} 
            />
            <SubMenuItem 
              label="系统配置" 
              isActive={currentPage === 'CONFIG'} 
              onClick={() => onNavigate('CONFIG')} 
            />
            <SubMenuItem 
              label="附件管理" 
              isActive={currentPage === 'ATTACHMENTS'} 
              onClick={() => onNavigate('ATTACHMENTS')} 
            />
            <SubMenuItem 
              label="个人资料" 
              isActive={currentPage === 'PROFILE'} 
              onClick={() => onNavigate('PROFILE')} 
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;