import React from "react";

import { Text, Input, Button } from "components";

const MacBookPro14OnePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] p-[362px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[32px] items-center justify-start w-[auto]">
          <Text
            className="text-black_900 text-left w-[auto]"
            as="h1"
            variant="h1"
          >
            Login
          </Text>
          <div className="flex flex-col gap-[16px] items-start justify-start w-[auto]">
            <div className="flex flex-col gap-[2px] items-center justify-center w-[324px]">
              <Text
                className="self-stretch text-gray_600 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Email
              </Text>
              <Input
                className="font-normal not-italic p-[0] text-[12px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                wrapClassName="md:h-[auto] self-stretch sm:h-[auto] w-[100%]"
                type="email"
                name="email"
                placeholder="harry@potter.com"
              ></Input>
            </div>
            <div className="flex flex-col gap-[2px] items-center justify-center w-[324px]">
              <Text
                className="self-stretch text-gray_600 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Password
              </Text>
              <Input
                className="font-normal not-italic p-[0] text-[12px] placeholder:text-bluegray_300 text-bluegray_300 text-left w-[100%]"
                wrapClassName="md:h-[auto] self-stretch sm:h-[auto] w-[100%]"
                type="password"
                name="Input"
                placeholder="enter password"
              ></Input>
            </div>
          </div>
          <Button className="cursor-pointer font-medium min-w-[61px] text-[14px] text-center text-white_A700 w-[auto]">
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default MacBookPro14OnePage;
