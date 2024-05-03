import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const DateLink = styled.a`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
  cursor: pointer;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = ({ timestamp }) => {
  const handleTimestampClick = () => {
    // Define the behavior when the timestamp is clicked
    console.log("Timestamp clicked!");
  };

  return (
    <Container>
      <Avatar src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo" />
      <Details>
        <Name>John Doe</Name>
        <Text>
          Fix image
        </Text>
        <DateLink href="#" onClick={handleTimestampClick}>
          {timestamp ? timestamp : "1:08:09"} {/* Conditional rendering of timestamp or placeholder */}
        </DateLink>
      </Details>
    </Container>
  );
};

export default Comment;
