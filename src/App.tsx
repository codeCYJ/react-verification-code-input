import { useState } from "react";
import styled from "styled-components";

const CODE_LENGTH = 5;
const App = () => {
  const [codes, setCodes] = useState("");

  return (
    <Container>
      <h1>Verification Code</h1>
      <Box>
        {Array(CODE_LENGTH)
          .fill(0)
          .map((v, i) => {
            return <Display key={i}>{codes[i]}</Display>;
          })}
        <Input
          value={codes}
          onChange={(e) => setCodes(e.target.value)}
          maxLength={CODE_LENGTH}
        />
      </Box>
      {codes.length >= CODE_LENGTH ? (
        <Validation>Code correct</Validation>
      ) : (
        <Validation color="#ff5a60">Code uncorrect</Validation>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 200px 0;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin: 30px 0 20px;
`;

const Display = styled.div`
  width: 60px;
  height: 76px;
  border: 1px solid #dedfdf;
  border-radius: 10px;
  font-weight: 700;
  font-size: 32px;
  color: #2e2e2e;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  position: absolute;
  max-width: 320px;
  padding: 0 20px 3px;
  height: 76px;
  background: none;
  letter-spacing: 50px;
  font-size: 28px;
  color: rgba(0, 0, 0, 0);
  caret-color: black;
  border: none;
  outline: none;
`;

const Validation = styled.p<{ color?: string }>`
  font-weight: 500;
  margin-top: 16px;
  color: ${({ color }) => (color ? color : "#1eba66")};
`;

export default App;
