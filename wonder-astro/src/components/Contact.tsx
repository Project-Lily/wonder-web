import React, { useEffect, useState } from 'react'

const phone = "KzYyODE3MDAwNDMzOQ==";
const email = "Y29udGFjdEB3b25kZXItcmVhZGVyLmlk";

export default function Contact() {

  const [_phone, _setPhone] = useState("...");
  const [_email, _setEmail] = useState("...");

  // This is to protect our contact from spam, thank me later
  useEffect(() => {
    _setPhone(atob(phone));
    _setEmail(atob(email));
  }, []);

  return (
    <section className="m-5 md:text-right">
      <div className="text-wonder-purple font-bold text-2xl pb-2">Contact Us!</div>
      <div className="text-black font-light text-xl">
        <i className="pr-2 fa-solid fa-phone text-wonder-purple"></i> {_phone} <br />
        <i className="pr-2 fa-brands fa-instagram text-wonder-purple"></i> @wonder_reader.id <br />
        <i className="pr-2 fa-solid fa-envelope text-wonder-purple"></i> {_email} <br />
      </div>
    </section>
  );
}