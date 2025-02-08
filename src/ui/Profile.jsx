import logo from "/logo.png";

function Profile() {
  return (
    <div className="my-8 flex items-start justify-between">
      <div>
        <div className="text-4xl font-semibold tracking-wider">Jeff Chee</div>
        <div className="font-light">Front-End Developer</div>
      </div>

      <img src={logo} alt="Jeff Chee" />
    </div>
  );
}

export default Profile;
