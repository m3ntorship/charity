import React from 'react';
import Heading from '../Heading';
import IconWithTextItem from '../IconWithTextItem';
import './style.css';
import OverlapingImg from '../OverlapingImagesItem';

// const WeAreHereToHelp = ({ data }) => {
//   const { title, desc, firstIcon, secondIcon, firstDesc, secondDesc } = data;

//   return (
//     <div>
//       <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 sm:col-gap-8">
//         <div class="col-start-1 md:col-end-2 lg:col-end-5">
//           <h6 class="text-xl text-c100 font-extrabold leading-tighter text-center md:text-left">
//             <Heading
//               primaryTextColor="dark"
//               primaryText={title}
//               primaryClassName="md:text-left text-center"
//             />
//           </h6>
//           <p class="mt-12 text-base text-c600 md:text-left text-center">
//             {desc}
//           </p>
//         </div>
//         <div class="col-start-6 col-end-13 row-start-1 row-end-4 z-10 hidden lg:block">
//           {/* <div class="character__container h-full">
//             <img
//               class="object-cover w-full min-h-full"
//               src={sectionImg}
//               alt=""
//             />
//           </div> */}

//           <OverlapingImg data={data} />
//         </div>
//         {/* <div class="col-start-11 col-end-13 row-start-1 row-end-4 z-10 hidden lg:block">
//           <div class="homesection__greenbox bg-c100">
//             <img
//               class="object-cover w-full h-full"
//               src="/static/media/steve-johnson.jpg"
//               alt=""
//             />
//           </div>
//           <div class="homesection__redbox homepage__section-text bg-c200 text-c000 -ml-8 flex items-center justify-center">
//             <h6 class="text-3xl">{sideTitle}</h6>
//           </div>
//         </div> */}
//         <div class="bg-c800 lg:col-start-1 lg:col-end-13 md:col-start-2 lg:row-start-2 md:row-start-1 overlay__layer px-6 lg:px-0 mt-8 lg:mt-8 sm:mt-0 grid md:grid-cols-2 sm:grid-rows-1">
//           <div class="flex flex-col justify-center items-center">
//             <div class="flex mt-10 w-full md:w-4/5 mx-auto">
//               <IconWithTextItem
//                 data={firstIcon}
//                 textTemplate={firstDesc}
//                 textAlign="center"
//                 paragraphStart="start"
//                 iconStart="end"
//               />
//             </div>
//             <div class="flex items-center my-10 ">
//               <IconWithTextItem
//                 data={secondIcon}
//                 textTemplate={secondDesc}
//                 textAlign="center"
//                 paragraphStart="end"
//                 iconStart="start"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

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
          <div class="col-start-6 col-end-13 row-start-1 row-end-4 z-10 hidden lg:block">
            <OverlapingImg data={data} />
          </div>
        </div>
        <div class="bg-c800 w-full col-start-1 col-end-13 overlay__layerone">
          <div class="container mt-16">
            <div class="w-full lg:w-2/5 flex flex-col justify-center items-center">
              <IconWithTextItem
                data={firstIcon}
                textTemplate={firstDesc}
                textAlign="center"
                paragraphStart="start"
                iconStart="end"
              />
              <IconWithTextItem
                data={secondIcon}
                textTemplate={secondDesc}
                textAlign="center"
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
