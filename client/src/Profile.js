function Profile({ user }) {
  return user ? (
    <div className="flexflex-col m-20">
      <h1 className="font sans font-black text-6xl">{`Hi,  ${user?.name}!`}</h1>
      <h2>{user?.image}</h2>
    </div>
  ) : (
    <h1 className="font sans font-black text-6xl m-20">Loading Profile...</h1>
  );
}

export default Profile;
