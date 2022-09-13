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

const RegisterView = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
  };

  return (
    <Box my={0} mx="auto" py={5} as="section">
      <Helmet>
        <title>Sign up page</title>
      </Helmet>

      <Container>
        <Box mb={32}>
          <Heading>Create new account</Heading>
          <SubHeading>Please fill in the form to continue</SubHeading>
        </Box>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleChange, values: { name, email, password } }) => (
            <FormStyled>
              <Label>
                Full Name
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </Label>
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
                  placeholder="Must have at least 8 characters"
                />
              </Label>
              <Button type="submit">Sign up</Button>
            </FormStyled>
          )}
        </Formik>
        <Box mt={32}>
          <SubHeading>
            Have an Account?{' '}
            <Link to="/login" style={{ color: '#C79CFC' }}>
              Sign In
            </Link>
          </SubHeading>
        </Box>
      </Container>
    </Box>
  );
};

export default RegisterView;
