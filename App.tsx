import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Contracts from './pages/Contracts';
import Roles from './pages/Roles';
import Agents from './pages/Agents';
import MenuRules from './pages/MenuRules';
import Config from './pages/Config';
import Attachments from './pages/Attachments';
import Profile from './pages/Profile';
import { Page } from './types';

const App: React.FC = () => {
  // Helper to get page from hash
  const getPageFromHash = (): Page => {
    const hash = window.location.hash.replace('#', '').toUpperCase();
    const validPages: Page[] = ['CONTRACTS', 'ROLES', 'AGENTS', 'MENUS', 'CONFIG', 'ATTACHMENTS', 'PROFILE'];
    return validPages.includes(hash as Page) ? (hash as Page) : 'CONTRACTS';
  };

  const [activePage, setActivePage] = useState<Page>(getPageFromHash);
  const [pageHistory, setPageHistory] = useState<Page[]>(() => [getPageFromHash()]);

  // Sync state when URL hash changes (Back/Forward button or manual change)
  useEffect(() => {
    const handleHashChange = () => {
      const newPage = getPageFromHash();
      setActivePage(newPage);
      setPageHistory(prev => {
        if (!prev.includes(newPage)) {
          return [...prev, newPage];
        }
        return prev;
      });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    // Navigate by changing hash, let the effect handle the state update
    window.location.hash = page.toLowerCase();
  };

  const handleClosePage = (page: Page) => {
    const newHistory = pageHistory.filter(p => p !== page);
    setPageHistory(newHistory);
    
    // If we closed the active page, switch to the last one in history
    if (activePage === page && newHistory.length > 0) {
      const lastPage = newHistory[newHistory.length - 1];
      window.location.hash = lastPage.toLowerCase();
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case 'CONTRACTS': return <Contracts />;
      case 'ROLES': return <Roles />;
      case 'AGENTS': return <Agents />;
      case 'MENUS': return <MenuRules />;
      case 'CONFIG': return <Config />;
      case 'ATTACHMENTS': return <Attachments />;
      case 'PROFILE': return <Profile />;
      default: return <Contracts />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar currentPage={activePage} onNavigate={handleNavigate} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header 
          activePage={activePage} 
          pageHistory={pageHistory} 
          onNavigate={handleNavigate}
          onClosePage={handleClosePage}
        />
        <main className="flex-1 overflow-auto bg-[#f3f4f6]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;