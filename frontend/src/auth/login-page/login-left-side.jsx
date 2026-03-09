const LoginLeftSide = () => {
  return (
    <div className="w-1/2 items-center justify-center p-8">
      <div className="w-full flex flex-col rounded-2xl py-4 px-20 text-white bg-black h-full relative">
        {/* Decorative Curved Shapes */}
        <DecorativeCurvedShapes />

        <div className="flex h-full flex-col items-start justify-center gap-3 ">
          <span className="text-sm font-medium opacity-80">Welcome back</span>
          <h1 className="text-5xl font-semibold text-white">
            Log in to your account
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-sm">
            Enter your credentials to access your dashboard and continue from
            where you left off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginLeftSide;

const DecorativeCurvedShapes = () => {
  return (
    <>
      <div className="absolute -top-16 -left-[3.3rem] rotate-90">
        <div className="border-8 border-white rounded-t-full border-b-0 w-52 h-[6.6rem] opacity-50"></div>
      </div>
      <div className="absolute bottom-4 right-[0.3rem] -rotate-32">
        <div className="border-8 border-white rounded-t-full border-b-0 w-52 h-[6.6rem] opacity-60" />
      </div>
    </>
  );
};
