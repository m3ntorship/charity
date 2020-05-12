import React from "react"
import ContentLoader from "react-content-loader" 

export const HeadLoader = () => (
         <ContentLoader
           speed={2}
           width={300}
           height={130}
           viewBox="0 0 300 100"
           backgroundColor="#f3f3f3"
           foregroundColor="#ecebeb"
         >
           <rect x="0" y="42" rx="3" ry="3" width="300" height="40" />
         </ContentLoader>
       );


export const DescLoader = () => (
         <ContentLoader
           speed={1}
           width={370}
           height={200}
           viewBox="0 0 370 200"
           backgroundColor="#f3f3f3"
           foregroundColor="#ecebeb"
         >
           <rect x="0" y="42" rx="3" ry="3" width="250" height="10" />
           <rect x="0" y="69" rx="3" ry="3" width="250" height="10" />
           <rect x="0" y="96" rx="3" ry="3" width="250" height="10" />
           <rect x="0" y="120" rx="3" ry="3" width="178" height="10" />
         </ContentLoader>
       );
