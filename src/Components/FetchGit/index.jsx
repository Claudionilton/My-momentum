import ClayCard from "@clayui/card";
import ClayButton from "@clayui/button/lib/Group";

function Git() {
  return (
    <div className="col-md-5">
      <ClayCard>
        <ClayCard.Body>
          <ClayCard.Description displayType="title">
            {"Card Title"}
          </ClayCard.Description>
          <ClayCard.Description truncate={false} displayType="text">
            {
              "Some quick example text to build on the card title and make up the bulk of the card content."
            }
          </ClayCard.Description>
          <ClayButton>{"Go somewhere"}</ClayButton>
        </ClayCard.Body>
      </ClayCard>
    </div>
  );
}
export default Git;
