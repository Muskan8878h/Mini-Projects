import styled from "styled-components";

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 250px;
  margin: 100px auto;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: auto;
  display: block;
`;

const Button = styled.button`
  margin-top: 15px;
  background: #3b82f6;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2563eb;
  }
`;

function StyledComponent() {
  return (
    <Card>
      <ProfileImage src="https://images.pexels.com/photos/33500387/pexels-photo-33500387.jpeg?cs=srgb&dl=pexels-veronika-andrews-2153322013-33500387.jpg&fm=jpg" alt="profile" />
      <h2>John Doe</h2>
      <p>React Developer</p>
      <Button>Follow</Button>
    </Card>
  );
}

export default StyledComponent;
