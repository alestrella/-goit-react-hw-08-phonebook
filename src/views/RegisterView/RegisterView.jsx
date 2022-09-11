import Box from 'components/Box';
import {
  Button,
  FormStyled,
  Input,
  Label,
} from 'components/ContactForm/ContactForm.styled';
import { Container } from 'components/Container/Container';
import { Heading, SubHeading } from 'components/Headings/Headings.styled';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
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
        <Heading>Welcome ! Create new account</Heading>
        <SubHeading>Please fill in the form to continue</SubHeading>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ handleChange, values: { name, email, password } }) => (
            <FormStyled>
              <Label>
                Your Name
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </Label>
              <Label>
                Your Email
                <Input name="email" value={email} onChange={handleChange} />
              </Label>
              <Label>
                Password
                <Input
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Label>
              <Button type="submit">Sign up</Button>
            </FormStyled>
          )}
        </Formik>
      </Container>
    </Box>
  );
};

export default RegisterView;
