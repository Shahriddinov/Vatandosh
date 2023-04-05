import { UserIcon, Globe } from "../../../../../../../assets/images/expert";

const data = [
  {
    id: 1,
    country: "Rossiya",
    number: 24,
  },
  {
    id: 2,
    country: "Turkiya",
    number: 18,
  },
  {
    id: 3,
    country: "Germaniya",
    number: 16,
  },
  {
    id: 4,
    country: "Rossiya",
    number: 8,
  },
  {
    id: 5,
    country: "Malayziya",
    number: 4,
  },
  {
    id: 6,
    country: "Rossiya",
    number: 2,
  },
];

function CouncilStatics() {
  return (
    <div className="council-right">
      <div>
        <span className="council--span">
          <h5>Ro‘yxatdan o‘tganlar</h5>
          <img src={UserIcon} />
        </span>
        <h4>88</h4>
        <p>Xalqaro olimlar va ekspertlar</p>
      </div>
      <div className="council-bottom">
        <span className="council--span">
          <h5>Xorijiy davlatlar</h5>
          <img src={Globe} />
        </span>
        {data.map((data) => (
          <span className="council-span">
            <h5>{data.country}</h5>
            <p>{data.number}</p>
          </span>
        ))}
      </div>
    </div>
  );
}

export default CouncilStatics;
