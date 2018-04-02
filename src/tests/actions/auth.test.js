import { login, logout } from '../../actions/auth';

test('Login Action Generator', () => {
    const uid = 'abcdefg';
    const action = login( uid );
    expect(action).toEqual({
       type: 'LOGIN',
       uid
   }); 
});

test('Logout Action Generator', () => {
    const action = logout();
    expect(action).toEqual({
       type: 'LOGOUT'
   }); 
});