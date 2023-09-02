function Login() {
  return (
    <>
      <div className="mx-[10vh] my-[5vh] max-w-full">
        <div className="grid grid-cols-2 max-w-full h-[90vh] shadow-lg">
          <div className="credentials-bg grid place-content-center">
            <div className="px-[30px] py-[60px] rounded-2xl border-[2px] box-shadow-quote border-[#dfe4ff] bg-[#dfe4ff4d] backdrop-blur px-[70px]">
              <p className="text-[4.2em] leading-[1.1em] font-black text-white tracking-wider">
                Your
              </p>
              <p className="text-[4.2em] leading-[1.1em] font-black text-white tracking-wider">
                Destination
              </p>
              <p className="text-[4.2em] leading-[1.1em] font-black text-[#15144B] tracking-wider">
                Awaits.
              </p>
              <br />
              <br />
              <span className="font-black text-white">
                Unlock your educational journey
              </span>
            </div>
          </div>
          <div>Login</div>
        </div>
      </div>
    </>
  );
}

export default Login;
