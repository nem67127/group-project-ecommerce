import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [items, setItems] = useState();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    fetch(`/api/items`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setItems(data.data);
        setStatus("idle");
      });
  }, []);

  if (status === "loading") {
    return <>Loading</>;
  }

  return (
    <>
      <Container>
        <Wrapper>
          {items.results.map((theItems) => {
            return (
              <Item>
                <Linkw to={`item/${theItems._id}`}>
                  <Img
                    key={theItems}
                    src={theItems.imageSrc}
                    alt={theItems.name}
                  />
                  <Name>{theItems.name}</Name>
                </Linkw>
              </Item>
            );
          })}
        </Wrapper>
      </Container>
    </>
  );
};

export default HomePage;

const Container = styled.div`
  background-color: #f4bfbf;
  padding-top: 14px;
  padding-bottom: 14px;
`;

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 250px 250px 250px 250px;
  row-gap: 20px;
  grid-gap: 20px;
  margin-top: 20px;
`;

const Item = styled.div`
  max-width: 250px;
  max-height: fit-content;
  width: auto;
  height: auto;
  border-radius: 8px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: white;
`;

const Linkw = styled(Link)`
  text-decoration: none;
  color: black;
  width: max-content;
  :hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  display: flex;
  align-items: center;
  max-width: 250px;
  max-height: 250px;
  width: auto;
  height: auto;
  border-radius: 8px;
  margin: 30px;
  margin-bottom: 3px;
`;

const Name = styled.p`
  font-family: var(--font-poppins);
  font-weight: bold;
  text-align: center;
  text-size-adjust: auto;
  max-width: 250px;
`;
