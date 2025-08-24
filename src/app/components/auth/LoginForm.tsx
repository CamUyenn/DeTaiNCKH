import React from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/homepage');
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="input-group">
        <label htmlFor="user-id">Mã người dùng</label>
        <input
          type="text"
          id="user-id"
          placeholder="Nhập mã người dùng"
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Mật khẩu</label>
        <input
          type="password"
          id="password"
          placeholder="Nhập mật khẩu"
          required
        />
      </div>
      <div className="role-checkbox-group">
        <input type="radio" id="student" name="role" />
        <label htmlFor="student">Sinh viên</label>
      </div>
      <div className="role-checkbox-group">
        <input type="radio" id="teacher" name="role" />
        <label htmlFor="teacher">Giảng viên</label>
      </div>
      <button type="submit" className="btn-login">
        Đăng nhập
      </button>
    </form>
  );
};

export default LoginForm;