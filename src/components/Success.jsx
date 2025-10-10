export const Success = ({ data }) => {
  return (
    <div className="flex flex-col bg-white p-10 rounded-2xl w-[380px] shadow-md text-center">
      <h2 className="text-xl font-semibold">🎉 You’re All Set!</h2>
      <p className="text-gray-500 mt-2">Registration completed successfully.</p>
    </div>
  );
};
