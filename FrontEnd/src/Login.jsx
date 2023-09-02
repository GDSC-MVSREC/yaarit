function Login() {
  return (
    <>
      <div className="mx-[10vh] my-[5vh] max-w-full">
        <div className="grid grid-cols-2 max-w-full h-[90vh] shadow-lg">
          <div className="credentials-bg grid place-content-center">
            <div
              className="grid px-[30px] py-[60px] rounded-lg border-[2px] box-shadow-quote border-[#dfe4ff] bg-[#dfe4ff4d] backdrop-blur
"
            >
              <span>Your</span>
              <span>Destination</span>
              <span>Awaits.</span>
              <br />
              <span>Unlock your educational journey</span>
            </div>
          </div>
          <div>Login</div>
        </div>
      </div>
    </>
  );
}

export default Login;
