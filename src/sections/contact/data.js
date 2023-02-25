import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const data = [
  {
    id: 1,
    icon: <HiOutlineMail />,
    link: "mailto:khatimiyoussef211@gmail.com",
  },
  {
    id: 2,
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/youssef-khatimi-7a307b236/",
  },
  { id: 3, icon: <FaWhatsapp />, link: "https://wa.me/+212639432065" },
];

// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546

export default data;
