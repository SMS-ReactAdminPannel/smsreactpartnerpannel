import { FONTS } from "../../constants/constants";

const replies = [
  {
    name: 'John Doe',
    service: 'General',
    enquiry: 'Need help with engine noise.',
    reply: 'Please visit our service center this week.',
  },
  {
    name: 'Jane Smith',
    service: 'AC Repair',
    enquiry: 'AC not cooling properly.',
    reply: 'AC technician will call you today.',
  },
];

const ReplyMessageList = () => {
  return (
    <div className="space-y-4">
      {replies.map((item, index) => (
        <div key={index} className="p-4 bg-gray-50 border rounded shadow-sm" >
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Service:</strong> {item.service}</p>
          <p><strong>Enquiry:</strong> {item.enquiry}</p>
          <p className="text-red-700 mt-2" style={{...FONTS.tableHeader}} ><strong>Reply:</strong> {item.reply}</p>
        </div>
      ))}
    </div>
  );
};

export default ReplyMessageList;
