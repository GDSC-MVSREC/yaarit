export default function RegisterLayout({
  fullName,
  setFullName,
  rEmail,
  setREmail,
  phNo,
  setPhoneNo,
  rPass,
  setRPass,
  year,
  setYear,
  branch,
  setBranch,
  plan,
  setPlan,
}) {
  return (
    <>
      <span
        className={"text-[#15144B] text-[2.2em] font-black tracking-wider "}
      >
        Create Account
      </span>
      <span className=" text-[#778391] text-[1.2em] font-[500] tracking-wider">
        Enter your details
      </span>
      <br />
      <br />
      <form className="grid">
        <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
          Full Name
        </span>
        <input
          type="text"
          id="name-register"
          className="credentials-input"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
          required
        ></input>
        <br />
        <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
          Email
        </span>
        <input
          type="text"
          id="email-register"
          className="credentials-input"
          value={rEmail}
          onChange={(e) => {
            setREmail(e.target.value);
          }}
          required
        ></input>
        <br />
        <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
          Phone number
        </span>
        <input
          type="number"
          max={1e10 - 1}
          min={1e9}
          id="phno-register"
          className="credentials-input no-arrow"
          value={phNo}
          onChange={(e) => {
            setPhoneNo(e.target.value);
          }}
          required
        ></input>
        <br />
        <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
          Password
        </span>
        <input
          type="password"
          id="Password-register"
          className="credentials-input"
          value={rPass}
          onChange={(e) => {
            setRPass(e.target.value);
          }}
          required
        ></input>
        <br />
        <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
          Confirm password
        </span>
        <input
          type="password"
          id="rePassword-register"
          className="credentials-input"
          onChange={() => {}}
          required
        ></input>
        <br />

        <div>
          <span className="text-[#15144B] text-[1.2em] font-black tracking-wider">
            Year
          </span>
          <select
            name="year"
            id="year"
            className="credentials-input ml-[10px]"
            required
            onChange={(e) => setYear(e.target.value)}
          >
            <option value=""></option>
            <option value="1">First Year</option>
            <option value="2">Second Year</option>
            <option value="3">Thrid year</option>
            <option value="4">Forth year</option>
          </select>

          <span className="text-[#15144B] text-[1.2em] font-black tracking-wider ml-[15px]">
            Branch
          </span>
          <select
            name="branch"
            id="branch"
            className="credentials-input ml-[10px]"
            required
            onChange={(e) => {
              setBranch(e.target.value);
            }}
          >
            <option value=""></option>
            <option value="cse">CSE</option>
            <option value="it">IT</option>
            <option value="ece">ECE</option>
            <option value="eee">EEE</option>
            <option value="civil">CIVIL</option>
            <option value="mech">MECH</option>
            <option value="auto">AUTO</option>
          </select>
        </div>
        <br />
        <div className="flex justify-between">
          <span
            className={"text-[#15144B] text-[1.5em] font-black tracking-wider "}
          >
            Select your plan
          </span>
          <button className="font-[600]" id="view-details">
            view details &#63;
          </button>
        </div>
        <br />
        <div>
          <input
            type="radio"
            id="1/2"
            name="plan"
            value="1/2"
            required
            onChange={(e) => {
              setPlan(e.currentTarget.value);
            }}
          />
          <span className=" text-[#778391] text-[1.2em] font-[500] tracking-wider ml-[20px]">
            6 months
          </span>
        </div>
        <div>
          <input
            type="radio"
            id="1"
            name="plan"
            value="1"
            onChange={(e) => {
              setPlan(e.currentTarget.value);
            }}
          />
          <span className=" text-[#778391] text-[1.2em] font-[500] tracking-wider ml-[20px]">
            1 year
          </span>
        </div>
        <div>
          <input
            type="radio"
            id="2"
            name="plan"
            value="2"
            onChange={(e) => {
              setPlan(e.currentTarget.value);
            }}
          />
          <span className=" text-[#778391] text-[1.2em] font-[500] tracking-wider ml-[20px]">
            2 years
          </span>
        </div>
        <br />
        <input
          type="submit"
          id="register"
          value="Register"
          className="text-white text-[1.5em] font-black tracking-wider credentials-button "
        ></input>
        <br />
        <br />
      </form>
    </>
  );
}
