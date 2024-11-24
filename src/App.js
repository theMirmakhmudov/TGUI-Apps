import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router importi
import '@telegram-apps/telegram-ui/dist/styles.css'; // Telegram UI stilini import qilish
import { AppRoot } from '@telegram-apps/telegram-ui'; // Telegram UI komponenti

// O'zingizning sahifalaringizni import qilish
import Home from './pages/Home'; // Home sahifasi
import Team from './pages/Team'; // Team sahifasi
import About from './pages/About'; // About sahifasi

import Provider from './components/Provider'; // Provider komponenti import qilish

export const App = () => {
  return (
    <Router> {/* React Router yordamida sahifalarni ko'rsatish */}
      <Provider> {/* Provider komponentini AppRoot ichida ishlatish */}
        <AppRoot>
          {/* Routes komponenti yordamida sahifalar o'rtasida navigatsiya */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home sahifasi */}
            <Route path="/team" element={<Team />} /> {/* Team sahifasi */}
            <Route path="/about" element={<About />} /> {/* About sahifasi */}
          </Routes>
        </AppRoot>
      </Provider>
    </Router>
  );
};

export default App;
