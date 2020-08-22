import React from 'react';
import './style.css';

const Form = ({ data }) => {
  const { formDesc, donationAmount, targetAmount, btnText } = data;

  return (
    <div className="bg-c400 lg:p-20 p-6 text-center">
      <p className="text-c000">{formDesc}</p>
      <form className="mx-auto mt-12">
        <div class="flex">
          <div class="w-1/2">
            <input
              class="w-full py-7 px-5 text-center text-base focus:outline-none"
              type="number"
              placeholder="100"
            />
          </div>
          <div class="w-1/2">
            <select
              class="donation__select w-full py-7 text-center text-base font-semibold focus:outline-none text-c100"
              name="USD"
              id="currencies"
            >
              <option className="bg-c000 text-c100" value=">USD">
                USD
              </option>
              <option className="bg-c000 text-c100" value="EUR">
                EUR
              </option>
              <option className="bg-c000 text-c100" value="EGP">
                EGP
              </option>
            </select>
          </div>
        </div>
        <div class="lg:grid lg:grid-cols-2 gap-2 md:flex mb-0 sm:mb-4 mt-6 ">
          <div class="h-20 mb-4 md:mb-0 flex-shrink ">
            <button class="amount__btn bg-c000 h-full text-c100 w-full text-base font-semibold">
              {donationAmount}
            </button>
          </div>
          <div class="md:mb-0 h-20 mb-4 flex-shrink">
            <button class="amount__btn bg-c000 h-full text-c100 w-full text-base font-semibold">
              {targetAmount}
            </button>
          </div>
        </div>
        <button class="bg-c300 btn w-full py-6 text-c100 font-black">
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default Form;
