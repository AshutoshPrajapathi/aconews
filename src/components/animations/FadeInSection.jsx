import React from "react";
import { Transition } from "@headlessui/react";

const FadeInSection = ({ children }) => {
  return (
    <Transition
      appear={true}
      show={true}
      enter="transition-opacity duration-700"
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      {children}
    </Transition>
  );
};

export default FadeInSection;