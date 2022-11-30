import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateProfile({ user, setUser }) {
  const [newName, setNewName] = useState(user?.name);
  const [newUsername, setNewUsername] = useState(user?.username);

  const navigate = useNavigate();

  useEffect(() => {
    setNewName(user?.name);
    setNewUsername(user?.username);
  }, [user]);

  function handleUpdateProfile(e) {
    e.preventDefault();
    const updatedProfileObj = {
      name: newName,
      username: newUsername,
    };

    fetch(`/users/${user?.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProfileObj),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
        navigate("/profile");
      } else {
        res.json().then((data) => alert(data.errors));
      }
    });
  }

  return (
    <div className="flex flex-col justify-center items-center font-sans mt-52">
      <h1 className="font-sans font-black text-8xl">Update Profile:</h1>
      <form
        onSubmit={handleUpdateProfile}
        className="flex flex-col justify-center items-start m-6"
      >
        <div className="flex flex-row items-center mb-3">
          <label className="font-sans font-bold text-4xl mr-4">Name:</label>
          <input
            type="text"
            placeholder={user?.name}
            onChange={(e) => setNewName(e.target.value)}
            className="font-sans font-bold p-2 text-2xl"
          ></input>
        </div>
        <div className="flex flex-row items-center mb-6">
          <label className="font-sans font-bold text-4xl mr-4">Username:</label>
          <input
            type="text"
            placeholder={user?.username}
            onChange={(e) => setNewUsername(e.target.value)}
            className="font-sans font-bold p-2 text-2xl"
          ></input>
        </div>
        <input
          type="submit"
          className="font-sans font-bold bg-black text-white text-2xl p-3 rounded-lg hover:animate-bounce"
        ></input>
      </form>
    </div>
  );
}

export default UpdateProfile;
