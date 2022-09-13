import Box from 'features/Box';
import {
  Button,
  FormStyled,
  Input,
  Label,
} from 'components/ContactForm/ContactForm.styled';
import { Container } from 'features/Container/Container';
import { Heading, SubHeading } from 'features/Headings/Headings.styled';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { authOperations } from 'redux/auth';

const LoginPage = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(authOperations.logIn({ email, password }));
    resetForm();
  };

  return (
    <Box my={0} mx="auto" py={5} as="section">
      <Helmet>
        <title>Sign in page</title>
      </Helmet>

      <Container>
        <Box mb={32}>
          <Heading>Welcome back</Heading>
          <SubHeading>Please sign in to your account</SubHeading>
        </Box>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleChange, values: { email, password } }) => (
            <FormStyled>
              <Label>
                Email
                <Input
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Label>
                Password
                <Input
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </Label>
              <Button type="submit">Sign in</Button>
            </FormStyled>
          )}
        </Formik>
        <Box mt={32}>
          <SubHeading>
            Don't have an Account?{' '}
            <Link to="/register" style={{ color: '#C79CFC' }}>
              Sign Up
            </Link>
          </SubHeading>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
