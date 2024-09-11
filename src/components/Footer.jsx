const Footer = () => {
  return (
    <div className="bg-black px-5 pt-16 pb-8 " >
      <img src="/images/audiophile 2.png" alt="" className="mb-8 w-2/5" />
      <p className="  font-semibold mb-10">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="flex justify-between  items-center">
        <p >Copyright 2021. All Rights Reserved</p>
        <div className="flex gap-3">
          <img src="/images/FaceBook.svg" alt="" className="w-5 rounded-md" />
          <img src="/images/Twitter.svg" alt="" className="w-5 rounded-md" />
          <img src="/images/Instagram.svg" alt="" className="w-5 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
