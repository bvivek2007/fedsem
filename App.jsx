import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState(false);

  function submit(e) {
    e.preventDefault();
    setDetails(true);
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={submit}>
        <input placeholder="Enter Name"
          value={name}
          onChange={e => setName(e.target.value)} />
        <br /><br />

        <input placeholder="Enter Email"
          value={email}
          onChange={e => setEmail(e.target.value)} />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {details && (
        <div>
          <h3>Entered Details</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default App;