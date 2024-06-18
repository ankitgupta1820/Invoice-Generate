import React from "react";

const footer = ({name,email,website,phone, bankname, bankaccount}) => {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap item-center justify-center">
          <li>
            <span className="font-bold">Your Name:</span> {name}
          </li>
          <li>
            <span className="font-bold">Your Email:</span>{email}
          </li>
          <li>
            <span className="font-bold"> Phone Number:</span> {phone}
          </li>
          <li>
            <span className="font-bold">Bank:</span>{bankname}
          </li>
          <li>
            <span className="font-bold">Account Holder:</span>{name}
          </li>
          <li>
            <span className="font-bold">Account Number:</span>{bankaccount}
          </li>
          <li>
            <span className="font-bold">Website:</span><a href={website}  rel="noopener noreferrrer">{website}</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default footer;
