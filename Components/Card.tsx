import Button from "./Button";

const Card = () => {
  return (
    <div className="bg-gray-100 border  p-5 border-gray-300  rounded-lg min-w-[350px] space-y-6">
      <h3 className="text-black font-semibold">Affiliate Program Management</h3>
      <p className="text-gray-500 text-sm">Affiliate program management is the process of overseeing and developing a brand’s affiliate marketing program. Most noteworthy, the “outsource” approach towards managing your affiliate program is effectively the best approach.</p>
      <Button text="Learn More" />
    </div>
  );
}

export default Card;