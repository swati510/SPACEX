export default function RocketList({
  flight_number,
  mission_name,
  mission_id,
  launch_year,
  launch_success,

  links,
  rocket,
}) {
  const rocketImg = links.mission_patch_small;
  return (
    <div className=" col sm-10 md-10 lg-2">
      <div className="card">
        <div className="imgCard">
          <img src={rocketImg} alt={mission_name} />
        </div>
        <div className="cardContain ">
          <span className="fieldValue">
            {mission_name} # {flight_number}
          </span>
          <div className="fieldTitle">
            Mission ids: <span className="fieldValue">{mission_id}</span>
          </div>
          <div>
            Launch Year :<span className="fieldValue">{launch_year}</span>
          </div>
          <div>
            Successful Launch:{" "}
            <span className="fieldValue">
              {launch_success ? "True" : "False"}
            </span>
          </div>
          <div>
            Successful Land: <span className="fieldValue">True</span>
          </div>
        </div>
      </div>
    </div>
  );
}
