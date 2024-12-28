import "../styles/DonatePage.css";

const DonatePage = () => {
  return (
    <div>
      <h1>Donate</h1>
      <p>Help keep up the good fight against establishment RINOs</p>
      <form action="">
        <div>
          <label htmlFor="fname">First Name:</label>
          <input type="text" name="fname" id="fname" />
        </div>
        <div>
          <label htmlFor="lname">Last Name:</label>
          <input type="text" name="lname" id="lname" />
        </div>
        <div>
          <label htmlFor="address">Billing Address:</label>
          <input type="text" name="address" id="address" autoComplete="on" />
        </div>
        <div>
          <label htmlFor="zip">Zip Code:</label>
          <input type="text" name="zip" id="zip" />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" name="state" id="state" list="states" />
          <datalist id="states">
            <option value="AL" />
            <option value="AK" />
            <option value="AZ" />
            <option value="AR" />
            <option value="AS" />
          </datalist>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default DonatePage;
