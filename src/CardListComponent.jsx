import Card from "./CardComponent";
import CardFunctionalComp from "./CardComponent";

const CardList = (props) => (
  <div>
    {props.profiles.map((profile) => (
      // <Card key={profile.id} {...profile}/>
      <CardFunctionalComp key={profile.id} {...profile} />
    ))}
  </div>
);

export default CardList;
