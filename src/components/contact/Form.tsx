import { useState } from "react";

type Props = {
  fullName: string;
  subjectLabel: string;
  messageLabel: string;
  textBtn: string;
};

const Form = ({ fullName, subjectLabel, messageLabel, textBtn }: Props) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex flex-col  items-center gap-3 w-full justify-center">
      <div className="flex flex-col justify-center md:flex-row gap-3 w-full">
        <input
          type="text"
          required
          className="h-10 w-full md:w-80 border-x-2 border-y-2 border-gray-400 rounded-md px-2"
          placeholder={fullName}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          required
          className="h-10 w-full md:w-80  border-x-2 border-y-2 border-gray-400 rounded-md px-2"
          placeholder={subjectLabel}
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
      </div>
      <textarea
        required
        className="h-28 w-full md:w-[652px] border-x-2 border-y-2 border-gray-400 rounded-md px-2"
        placeholder={messageLabel}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <div className="flex w-full md:w-[652px] justify-end ">
        <a
          href={`mailto:adonisfernandezr@gmail.com?subject=${subject}&body=My name is ${name}%0A%0A ${message}%0A%0A`}
          className="bg-blue-500 hover:bg-blue-400 px-2 py-2 md:py-1 rounded-md text-white font-semibold "
        >
          {textBtn}
        </a>
      </div>
    </div>
  );
};

export default Form;
