import Box from 'components/Box';
import { SubHeading } from 'components/Headings/Headings.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import defaultAvatar from './default-avatar.png';
import { LogOutBtn, Avatar } from './UserMenu.styled';

export const UserMenu = () => {
  const { name } = useSelector(authSelectors.getUser);
  const avatar = defaultAvatar;

  return (
    <Box display="flex" alignItems="center">
      <Avatar src={avatar} alt="" width="32" />
      <SubHeading>Hello, {name} !</SubHeading>
      <LogOutBtn type="button">Log Out</LogOutBtn>
    </Box>
  );
};
