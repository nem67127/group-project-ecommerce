import styled from "styled-components";

const ItemDetail = ({ item }) => {
  return (
    <Detail>
      <Img src={item.imageSrc} alt={item.name} />
      <Description>
        <Name>{item.name}</Name>
        <Price>
          Price : <PriceSpan>{item.price}</PriceSpan>
        </Price>
        <Stock>
          Stock :<Span> {item.numInStock}</Span>
        </Stock>
        <Category>
          Category: <Span>{item.category}</Span>
        </Category>
        <Company>
          made by {"  "} {item.companyId}
        </Company>
        <CompanyURL>company website: {item.companyId} </CompanyURL>
      </Description>
    </Detail>
  );
};

const Detail = styled.div`
  background-color: var(--color-main-white);
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 10px;
  /* border: 1px solid blue; */
  color: var(--color-font-darkgrayy);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 50px 0 20px 0;
  }


`;

const Img = styled.img`
  display: block;
  max-height: 300px;
  width: auto;
  height: 50%;
  border-radius: 8px;
  margin: 30px;
  /* border: 1px solid red; */
  @media (max-width: 768px) {
    margin: 10px;
  }

  @media (max-width: 425px) {
    max-height: 150px;
  }
`;

const Description = styled.div`
  width: 70%;
  margin: 20px 60px;
  display: flex;
  flex-direction: column;
  font-size: 1em;

  @media (max-width: 425px) {
    font-size: 13px;
  }
`;

const Name = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  margin: 0.1em 0;
  border-bottom: 1px solid var(--color-font-darkgray);
  padding-bottom: 8px;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`;
const Price = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const PriceSpan = styled.span`
  font-weight: 600;
  color: var(--color-point-pink);
  font-size: 18px;
`;

const Stock = styled.p`
  margin: 5px 0;
`;

const Span = styled.span`
  color: var(--color-point-pink);
  font-size: 15px;
  font-weight: 500;
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
const Category = styled.p`
  margin: 10px 0;
`;

const Company = styled.p`
  margin-top: 15px;
`;
const CompanyURL = styled.a`
  margin-top: 10px;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: var(--color-main-blue);
  }
`;
export default ItemDetail;
