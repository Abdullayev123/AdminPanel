async function getAll() {
  const myFetch = await fetch(
    "https://6726668b302d03037e6d6f04.mockapi.io/users"
  );
  const data = await myFetch.json();
  return data;
}

async function getByID(id) {
  const myFetch = await fetch(
    "https://6726668b302d03037e6d6f04.mockapi.io/users/" + id
  );
  const data = await myFetch.json();
  return data;
}

async function adding(obj) {
  const addFetch = await fetch(
    "https://6726668b302d03037e6d6f04.mockapi.io/users",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }
  );
  await addFetch.json();
}

async function userDelete(id) {
  const addFetch = await fetch(
    "https://6726668b302d03037e6d6f04.mockapi.io/users/" + id,
    {
      method: "DELETE",
    }
  );
  await addFetch.json();
}
async function userUpdate(id, obj) {
  const addFetch = await fetch(
    "https://6726668b302d03037e6d6f04.mockapi.io/users/" + id,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }
  );
  await addFetch.json();
}
export { getAll, adding, userDelete, userUpdate, getByID };
