import { useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";
import { mobile, tab } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  ${tab({ width: "50%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;
const Error = styled.p`
  color: red;
`;

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);


  const handleRegister = (e) => {  
    e.preventDefault()
    const registerUser = async () => {
      try {
        const user = { username, email, password1 }
        await publicRequest.post('/auth/register', user)
        .then(res => res.data)
        // .then(res => console.log(res))
        .then( data => {
          console.log(data)
          console.log(username, password1)
          login(dispatch, { username, password: password1 });
        })

      } catch (err) {
        console.log(err)
      }
    }
    if (password1 === password2){
      registerUser()
    }
  }
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          {/* <Input onChange={e => setUsername(e.target.value)} placeholder="name" />
          <Input onChange={e => setUsername(e.target.value)} placeholder="last name" /> */}
          <Input onChange={e => setUsername(e.target.value)} placeholder="username" />
          <Input onChange={e => setEmail(e.target.value)} placeholder="email" />
          <Input onChange={e => setPassword1(e.target.value)} type="password" placeholder="password" />
          <Input onChange={e => setPassword2(e.target.value)} type="password" placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegister}  disabled={isFetching}>CREATE</Button>
          {/* {error && <Error>Something went wrong...</Error>} */}
          <Link to="/login"><Links>Already registerd? Login</Links></Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;