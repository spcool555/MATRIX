import React from 'react';

function TopHeader() {
  return (
    // <div style={{ position: 'sticky', top: 0, background: 'black', zIndex: 1000 }}>
    <div style={{ position: 'sticky', top: 0, background: 'black', zIndex: 1000 }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: 'white', padding: '10px 20px' }}>
        <a href=""  style={{ textDecoration: 'none', color: 'white' }}>🧺 |</a>
        <a href=""  style={{ textDecoration: 'none', color: 'white' }}>About Us |</a>
        <a href=""  style={{ textDecoration: 'none', color: 'white' }}>News |</a>
        <a href=""  style={{ textDecoration: 'none', color: 'white' }}>Terms & Condition |</a>
        <a href="mailto:service@dermaposh.com"  style={{ marginLeft: '20px', textDecoration: 'none', color: 'white' }}>export@matrixincorporation.com</a>
      </div>
    </div>
  );
}

export default TopHeader;
