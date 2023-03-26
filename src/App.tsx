import { useState } from "react";
import styled from "styled-components";

const CODE_LENGTH = 5;
const App = () => {
  const [codes, setCodes] = useState("");

  return (
    <Container>
      <Title>Verification Code</Title>
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
        <div className="flex gap-3 mt-4 text-[#1EBA66]">Code correct</div>
      ) : (
        <div className="flex gap-3 mt-4 text-reanalyze">Code uncorrect</div>
      )}
      <Button>Next</Button>
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

const Title = styled.h1`
  margin: 32px auto;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
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
`;

const InputText = styled.input`
  border: 1px solid #dedfdf;
  border-radius: 10px;
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  width: 100%;
`;

const Input2 = styled(InputText)`
  margin-top: 8px;
  height: 44px;
  border: 1px solid #f1f1f1;
  ::-webkit-input-placeholder {
    color: #dedfdf;
  }
  ::-ms-input-placeholder {
    color: #dedfdf;
  }
`;

const Button = styled.button`
  width: 255px;
  padding: 12px;
  background: #2e2e2e;
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  margin-top: 36px;
`;

export default App;
