import { useCookie } from '#app';

interface IUserType {
  name: string; 
  email: string;
}

export const useAuth = () => {
  // Manage token and user cookies
  const token = useCookie('auth-token'); 
  const user = useCookie<IUserType>('user'); 

  const login = async (authToken: string, userInfo: IUserType) => {
    user.value = userInfo;
    token.value = authToken;
  };

  const register = async (email: string, password: string) => {
    try {
      await $fetch('http://localhost:8000/api/register', {
        method: 'POST',
        body: { email, password },
      });
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const logout = async () => {
    try {
      const data = await $fetch('http://localhost:8000/api/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token.value}`,
        },
      });
      
      user.value = {name: '', email: ''}
      token.value = null;
      await navigateTo('/login')

    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return { user, token, login, register, logout };
};
