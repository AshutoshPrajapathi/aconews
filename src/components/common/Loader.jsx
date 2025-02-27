import React from "react";
import { Circles} from 'react-loader-spinner'
const Loader = () => {
  return (
  <div className="cente flex justify-center items-center loader-overlay">
      <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
    
  </div>
  );
};

export default Loader;