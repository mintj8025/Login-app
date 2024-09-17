const mockUser = {
    username: 'testuser',
    password: 'testpassword' // อย่าเก็บรหัสผ่านจริงในโค้ด
  };
  
  export const checkCredentials = (username: string, password: string) => {
    return username === mockUser.username && password === mockUser.password;
  };
  