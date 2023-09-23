import React, { useState } from 'react';

function ThemeButton({isDarkTheme,setIsDarkTheme}) {
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div className='mode'>
        <span>Dark mode</span>
      {/* Toggle slider butonunu oluşturma*/}
      <label className="switch">
        <input type="checkbox" checked={isDarkTheme} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
    </div>
  )
}

export default ThemeButton;