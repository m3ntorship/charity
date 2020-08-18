import React from 'react';
import Heading from '../Heading';
import IconWithTextItem from '../IconWithTextItem';
import './style.css';
import OverlapingImg from '../OverlapingImagesItem';

const WeAreHereToHelp = ({ data }) => {
  const { title, desc, firstIcon, secondIcon, firstDesc, secondDesc } = data;
  return (
    <div class="homepage--container mb-24">
      <div class="grid grid-cols-1 grid-rows-1 relative">
        <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 sm:col-gap-8 row-start-1 col-start-1">
          <div class="col-start-1 md:col-end-2 lg:col-end-5">
            <h6 class="text-xl text-c100 font-extrabold leading-tighter text-center md:text-left">
              <Heading
                primaryTextColor="dark"
                primaryText={title}
                primaryClassName="md:text-left text-center"
              />
            </h6>

            <p class="mt-12 text-base text-c600 md:text-left text-center">
              {desc}
            </p>
          </div>
          <div class="col-start-7 col-end-13 row-start-1 row-end-4 z-10 hidden lg:block">
            <OverlapingImg data={data} />
          </div>
        </div>
        <div class="bg-c800 w-full col-start-1 col-end-13 overlay__layerone">
          <div class="container mt-16">
            <div class="w-full lg:w-1/2 grid grid-rows-2">
              <IconWithTextItem
                data={firstIcon}
                textTemplate={firstDesc}
                textAlign="left"
                paragraphStart="start"
                iconStart="end"
              />

              <IconWithTextItem
                data={secondIcon}
                textTemplate={secondDesc}
                textAlign="left"
                paragraphStart="end"
                iconStart="start"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeAreHereToHelp;
