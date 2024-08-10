import React, { useState } from 'react';
import './App.css';
import '@telegram-apps/telegram-ui/dist/styles.css';
import { AppRoot, Tabbar } from '@telegram-apps/telegram-ui';

const tabs = [
  { id: 1, text: 'Profil', Icon: () => <div className="icon">👤</div> },
  { id: 2, text: 'Products', Icon: () => <div className="icon">🛒</div> },
];

export const App = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  return (
    <AppRoot>
      <Tabbar>
        {tabs.map(({ id, text, Icon }) => (
          <Tabbar.Item
            key={id}
            text={text}
            selected={currentTab === id}
            onClick={() => setCurrentTab(id)}
          >
            <Icon />
          </Tabbar.Item>
        ))}
      </Tabbar>
      
    </AppRoot>
  );
};

export default App;
