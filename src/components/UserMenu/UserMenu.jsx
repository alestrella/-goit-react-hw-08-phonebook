import Box from 'features/Box';
import { SubHeading } from 'features/Headings/Headings.styled';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import defaultAvatar from './default-avatar.png';
import { LogOutBtn, Avatar } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <Box display="flex" alignItems="center">
      <Avatar src={avatar} alt="" width="32" />
      <SubHeading>Hello, {user.name}</SubHeading>
      <LogOutBtn
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </LogOutBtn>
    </Box>
  );
};
