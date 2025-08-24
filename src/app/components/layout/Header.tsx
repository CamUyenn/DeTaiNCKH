'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import './../styles/header.css'; // Đảm bảo bạn có file CSS phù hợp hoặc chỉnh sửa đường dẫn

function AppHeader({ children }: { children: React.ReactNode }) {
  const [selectedSemester, setSelectedSemester] = useState('Học kỳ 1, năm học 2023-2024');
  const router = useRouter(); // Khởi tạo router

  const reloadPage = () => {
    window.location.reload(); // Reload lại trang hiện tại
  };

  const handleSemesterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSemester(event.target.value); // Cập nhật học kỳ được chọn
  };

  const navigateToUsecase = () => {
    router.push('/usecase'); // Điều hướng đến trang usecase
  };

  return (
    <div className="main-container">
      {/* Header */}
      <header className="header">
        <h1>TRƯỜNG ĐẠI HỌC KHOA HỌC - ĐẠI HỌC HUẾ</h1>
      </header>

      {/* Menu */}
      <div className="menu">
        <button
          className="menu-logo"
          onClick={reloadPage}
          style={{ cursor: 'pointer', background: 'none', border: 'none' }}
        >
          <img src="logo_1.png" alt="Logo" />
        </button>
        <div className="menu-buttons">
          <button className="menu-button" onClick={navigateToUsecase}>
            Chấm điểm rèn luyện
          </button>
          <button className="menu-button">Xem điểm rèn luyện</button>
        </div>
      </div>

      {/* Hàng hiển thị học kỳ và khóa học */}
      <div className="semester-row">
        <div className="semester-box">
          <span className="semester-label">Khóa học:</span>
          <span className="semester-value">46 (2022-2026)</span>
        </div>
        <div className="semester-box">
          <span className="semester-label">Học kỳ:</span>
          <select
            className="semester-dropdown"
            value={selectedSemester}
            onChange={handleSemesterChange}
          >
            <option value="Học kỳ 1, năm học 2023-2024">Học kỳ 1, năm học 2023-2024</option>
            <option value="Học kỳ 2, năm học 2023-2024">Học kỳ 2, năm học 2023-2024</option>
            <option value="Học kỳ 1, năm học 2024-2025">Học kỳ 1, năm học 2024-2025</option>
            <option value="Học kỳ 2, năm học 2024-2025">Học kỳ 2, năm học 2024-2025</option>
          </select>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="content-container">{children}</div>
    </div>
  );
}

export default AppHeader;