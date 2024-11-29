import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const name =  form.name.value ;
    const email =  form.email.value ;
    const userr = {name, email};
    console.log(userr);
    const updatedUser = {name, email};

    fetch(`http://localhost:5000/users/${loadedUser._id}`,{
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data);
    })

  }
  return (
    <div>
      <h3>update information of : {loadedUser.name}</h3>

      <form onSubmit={handleUpdate}>
        <input type="text" name="name" id="" defaultValue={loadedUser?.name}/>
        <br />
        <input type="email" name="email" id="" defaultValue={loadedUser?.email}/>
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
