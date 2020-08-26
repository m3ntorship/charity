import React from 'react';

const CardItem = ({
  data,
  cardTitle,
  cardBodyDesc,
  raisedAmount,
  targetedAmount,
  btnText
}) => {
  const { firstIcon, secondIcon } = data;
  return (
    <div className="max-w-sm border border-c800 p-8">
      <div>
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="py-4">
          <div className="font-bold text-lg mb-2 text-c100">{cardTitle}</div>
          <p className="text-c600 text-base leading-loose mt-12 font-medium">
            {cardBodyDesc}
          </p>
          <div>
            <div className="flex items-center text-c600 mt-6">
              <img src={firstIcon} alt="Rasining Fun" />
              <span className="ml-2 text-c200 font-bold">{raisedAmount}</span>
              <span className="ml-2 font-medium">Rasied</span>
            </div>
            <div className="flex items-center text-c600 mt-4 mb-12">
              <img src={secondIcon} alt="Rasining Fun" />
              <span className="ml-2 text-c200 font-bold">{targetedAmount}</span>
              <span className="ml-2 font-medium">Goal</span>
            </div>
            <div className="bg-c800">
              <div
                class="bg-c400 text-xs leading-none text-center text-c000 py-2"
                style={{ width: '25%' }}
              ></div>
            </div>
            <div className="mt-3">
              <button className="bg-c800 px-24 py-6 font-bold text-c600 w-full">
                {btnText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
