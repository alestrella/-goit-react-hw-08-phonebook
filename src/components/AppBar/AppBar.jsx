import { RiContactsBookLine } from 'react-icons/ri';
import { AuthNav } from 'components/AuthNav/AuthNav';
import Box from 'features/Box/Box.js';
import { MainHeading } from 'features/Headings/Headings.styled';
import { UserMenu } from 'components/UserMenu/UserMenu.jsx';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box p={4} width="100%" as="header">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxWidth={960}
        p={5}
        m="0 auto"
        bg="bgDark"
        boxShadow="header"
        borderRadius="semiMiddle"
      >
        <MainHeading>
          <RiContactsBookLine size={26} style={{ marginRight: 16 }} />
          PhoneBook
        </MainHeading>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </Box>
  );
};

export default AppBar;
