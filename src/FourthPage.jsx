import "./assets/css/Fourthpage.css";

const FourthPage = () => {
  return (
    <div className="fourth-page">
      <h1>GET IN TOUCH</h1>
      <form
        className="flex flex-col gap-8 cu-form "
        action="https://docs.google.com/forms/d/e/1FAIpQLSfy7wrOR_BH68KlKcAjp20EzCKhGHBf-DzQ4jMAJcX7EvimCg/formResponse"
      >
        <div className="form-field">
          <label className="label" htmlFor="entry.2005620554">
            Name:
          </label>
          <input
            className="cu-input"
            type="text"
            id="entry.2005620554"
            name="entry.2005620554"
            required
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="entry.1045781291">
            Email:
          </label>
          <input
            className="cu-input"
            type="email"
            id="entry.1045781291"
            name="entry.1045781291"
            required
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="entry.1065046570">
            Subject:
          </label>
          <input
            type="text"
            className="cu-input"
            id="entry.1065046570"
            name="entry.1065046570"
          />
        </div>
        <div className="form-field">
          <label className="label" htmlFor="entry.1166974658">
            Message:
          </label>
          <input
            type="text"
            className="cu-input"
            id="entry.1166974658"
            name="entry.1166974658"
          />
        </div>
        <div className="form-field">
          <button className="submit-btn" type="submit">
            <p>Submit</p>
            <ion-icon name="arrow-forward-sharp"></ion-icon>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FourthPage;
