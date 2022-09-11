import { AuthNav } from 'components/AuthNav/AuthNav';
import Box from 'components/Box/Box.js';
import { MainHeading } from 'components/Headings/Headings.styled';
import { UserMenu } from 'components/UserMenu/UserMenu.jsx';
import { Header } from './AppBar.styled.js';

const AppBar = () => {
  return (
    <Header>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        maxWidth={1200}
        p={5}
        m="0 auto"
        bg="bgDark"
        boxShadow="header"
      >
        <MainHeading>Phonebook</MainHeading>
        <UserMenu />
        <AuthNav />
      </Box>
    </Header>
  );
};

export default AppBar;
