import Button from "../Button";
import Input from "../Input";

const QuoteForm = () => {
  return (
    <div className="px-20 py-20">
      <form className="w-2/3  grid grid-cols-2  gap-6">
        <div className="flex flex-col space-y-3">
          <label htmlFor="fullname" className="text-white text-sm">Full Name *</label>
          <Input placeholder="Enter a full name" />
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="fullname" className="text-white text-sm">Website *</label>
          <Input placeholder="Enter  your website" />
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="fullname" className="text-white text-sm">E-mail *</label>
          <Input placeholder="Enter your email address" />
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="fullname" className="text-white text-sm">Budget *</label>
          <Input placeholder="Select" />
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="fullname" className="text-white text-sm">Phone Number *</label>
          <Input placeholder="Enter your phone number" />
        </div>

        <div className="flex flex-col space-y-3">
          <label htmlFor="fullname" className="text-white text-sm">Best Start Date *</label>
          <Input placeholder="22 - 05 - 2023" />
        </div>

        <Button text={'Send Request'} />
      </form>
    </div>
  );
}

export default QuoteForm;