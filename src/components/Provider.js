import React, { useState, useEffect, useCallback, useTransition } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppRoot, Tabbar } from '@telegram-apps/telegram-ui';
// import { Users, Info } from 'lucide-react';
import { ReactComponent as UserIcon } from './icons/user.svg';
import { ReactComponent as GroupIcon } from './icons/group.svg';
import { ReactComponent as InfoIcon } from './icons/info.svg';

const tabs = [
  { id: 1, text: 'Profile', Icon: UserIcon, path: '/' },
  { id: 2, text: 'Team', Icon: GroupIcon, path: '/team' },
  { id: 3, text: 'About', Icon: InfoIcon, path: '/about' },
];

const Provider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const activeTab = tabs.find(tab => tab.path === location.pathname);
    setCurrentTab(activeTab ? activeTab.id : null);
  }, [location.pathname]);

  const handleTabClick = useCallback(
    (path) => {
      startTransition(() => {
        navigate(path);
      });
    },
    [navigate]
  );

  return (
    <AppRoot>
      <main>{children}</main>
      <Tabbar className="custom-tabbar">
        {tabs.map(({ id, text, Icon, path }) => (
          <Tabbar.Item
            key={id}
            text={text}
            selected={currentTab === id}
            onClick={() => handleTabClick(path)}
            className={`custom-tab-item ${currentTab === id ? 'selected' : ''}`}
          >
            {/* Ikonani kichiklashtirish */}
            <Icon className="w-4 h-4" /> {/* Bu yerda 16px o'lcham berilgan */}
          </Tabbar.Item>
        ))}
      </Tabbar>
      {isPending && <div>Loading...</div>} {/* Sahifa yuklanayotganini ko'rsatish */}
    </AppRoot>
  );
};

export default Provider;
