"use client";
import { useForm } from "react-hook-form";
import * as React from "react";
import Image from "next/image";
import { useState } from "react";

type FormInputs = {
  fullName: string;
  email: string;
  phone: number;
};

const CareerForm = () => {
  const {
    register,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormInputs>();

  const onChangeName = (e: any) => {
    const value = e.target.value;
    const isValid = /^[A-Za-z]+$/i.test(value);

    if (!isValid || value.length < 3 || value.length > 60) {
      setError("fullName", {
        type: "manual",
        message: "Incorrect name",
      });
    } else {
      clearErrors("fullName");
    }
  };

  const onChangeEmail = (e: any) => {
    const value = e.target.value;
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      value
    );

    if (!isValid || value.length < 15 || value.length > 100) {
      setError("email", {
        type: "manual",
        message: "Invalid email",
      });
    } else {
      clearErrors("email");
    }
  };

  const onChangePhone = (e: any) => {
    const value = e.target.value;

    if (value.length > 13 || value.length < 10 || !/^\d+$/.test(value)) {
      setError("phone", {
        type: "manual",
        message: "Incorrect phone",
      });
    } else {
      clearErrors("phone");
    }
  };

  const [isChecked, setIschecked] = useState(false);

  const onChangeCheckBox = () => {
    setIschecked(!isChecked);
  };

  React.useEffect(() => {
    setError("fullName", {
      type: "manual",
      message: "Incorrect name",
    });
    setError("email", {
      type: "manual",
      message: "Invalid email",
    });
    setError("phone", {
      type: "manual",
      message: "Incorrect phone",
    });
  }, [setError]);

  return (
    <section>
      <div className="flex flex-col md:mt-[103px] xl:mt-[25px]">
        <p className="w-[179px] text-white self-end mt-[24px] font-extralight text-[14px] tracking-tight text-left leading-6 md:leading-5 md:tracking-normal md:text[13px] md:w-[221px] md:self-start md:mt-0 xl:w-[234px] xl:text-[18px] xl:leading-6 xl:mb-[14px]">
          Don&apos;t miss your opportunity! Fill out the form right now and join
          our team!
        </p>
        <form className="mt-[24px] flex flex-col md:flex-col md:mt-[64px] xl:flex-col xl:gap-[16px] xl:mt-0 xl:w-[607px]">
          <div className="md:flex xl:gap-[24px]">
            <div className="xl:flex xl:flex-col xl:gap-[20px]">
              <label className="relative mb-[16px] flex flex-col gap-[4px] text-[12px] text-white font-extralight tracking-[3px] md:w-[221px] xl:w-full">
                Full name
                <input
                  {...(register("fullName"),
                  {
                    required: true,
                    minLength: 3,
                    maxLength: 60,
                    pattern: {
                      value: `/^[A-Za-z]+$/i`,
                      message: "Incorrect name",
                    },
                  })}
                  className="hover:transition-all focus:transition-all bg-white bg-opacity-5 text-white text-[13px] xl:text-[20px] hover:bg-opacity-10 focus:bg-opacity-10 h-[24px] pl-[8px] pr-[8px] outline-none xl:h-[28px]"
                  placeholder="John Smith"
                  pattern="/^[A-Za-z]+$/i"
                  onChange={onChangeName}
                />
                {errors.fullName && (
                  <p className="flex flex-row gap-[3px] text-[#FF5757] tracking-widest self-end tracking-[3px] absolute top-[50px] right-0 xl:top-[56px]">
                    <Image
                      src="/cross-icon.svg"
                      alt="Cross"
                      width={18}
                      height={18}
                      priority
                    />
                    {errors.fullName.message}
                  </p>
                )}
              </label>
              <label className="relative mb-[16px] flex flex-col gap-[4px] text-[12px] text-white font-extralight  mt-[4px] tracking-[3px] md:w-[221px] xl:mt-0 xl:w-full">
                E-mail
                <input
                  {...(register("email"),
                  {
                    required: true,
                    minLength: 15,
                    maxLength: 100,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email",
                    },
                  })}
                  pattern="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"
                  className="hover:transition-all focus:transition-all bg-white bg-opacity-5 text-white text-[13px] xl:text-[20px] hover:bg-opacity-10 focus:bg-opacity-10 h-[24px] pl-[8px] pr-[8px] outline-none xl:h-[28px]"
                  placeholder="johnsmith@email.com"
                  onChange={onChangeEmail}
                />
                {errors.email && (
                  <p className="flex flex-row gap-[3px] text-[#FF5757] tracking-widest self-end tracking-[3px] absolute top-28 right-0 xl:top-32 absolute top-[50px] right-0 xl:top-[56px]">
                    <Image
                      src="/cross-icon.svg"
                      alt="Cross"
                      width={18}
                      height={18}
                      priority
                    />
                    {errors.email.message}
                  </p>
                )}
              </label>
              <label className="mb-[16px] flex flex-col gap-[4px] text-[12px] text-white font-extralight  mt-[4px] tracking-[3px] md:w-[221px] xl:mt-0 xl:w-full">
                Position
                <input
                  className="hover:transition-all focus:transition-all bg-white bg-opacity-5 text-white text-[13px] xl:text-[20px] hover:bg-opacity-10 focus:bg-opacity-10 h-[24px] pl-[8px] pr-[8px] outline-none xl:h-[28px]"
                  placeholder="Movie maker"
                />
              </label>
              <label className="relative mb-[16px] flex flex-col gap-[4px] text-[12px] text-white font-extralight tracking-[3px] md:w-[221px] xl:w-full">
                Phone
                <input
                  {...(register("phone"),
                  {
                    required: true,
                    minLength: 15,
                    maxLength: 15,
                    pattern: {
                      value: `/^[A-Za-z]+$/i`,
                      message: "Incorrect phone",
                    },
                  })}
                  className="hover:transition-all focus:transition-all bg-white bg-opacity-5 text-white text-[13px] xl:text-[20px] hover:bg-opacity-10 focus:bg-opacity-10 h-[24px] pl-[8px] pr-[8px] outline-none xl:h-[28px]"
                  placeholder="(097) 12 34 567"
                  pattern="/^[A-Za-z]+$/i"
                  onChange={onChangePhone}
                />
                {errors.phone && (
                  <p className="flex flex-row gap-[3px] text-[#FF5757] tracking-widest self-end tracking-[3px] absolute top-[50px] right-0 xl:top-[56px]">
                    <Image
                      src="/cross-icon.svg"
                      alt="Cross"
                      width={18}
                      height={18}
                      priority
                    />
                    {errors.phone.message}
                  </p>
                )}
              </label>
            </div>
            <div className="flex flex-col w-full md:ml-[20px] xl:ml-0">
              <label className="flex flex-col gap-[4px] text-[12px] text-white font-extralight tracking-[3px] md:w-[221px] md:h-[228px] xl:w-[292px] xl:h-[268px]">
                Message
                <textarea className="hover:transition-all focus:transition-all bg-white bg-opacity-5 h-[193px] md:h-[228px] xl:text-[20px] w-full xl:h-[174px] hover:bg-opacity-10 focus:bg-opacity-10 resize-none outline-none p-[8px] xl:w-[292px] xl:h-[268px]"></textarea>
              </label>
            </div>
          </div>
          <div className="flex flex-col relative">
            <div className="flex flex-row gap-[8px] mt-[16px]">
              <label className="w-[22px] h-[22px] relative">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="opacity-0"
                  onClick={onChangeCheckBox}
                  onChange={onChangeCheckBox}
                  checked={isChecked}
                />
                {isChecked ? (
                  <Image
                    src="/checkbox-checked.svg"
                    alt="Checkbox"
                    width={22}
                    height={22}
                    priority
                    className="absolute top-0 left-0 cursor-pointer"
                  />
                ) : (
                  <Image
                    src="/checkbox.svg"
                    alt="Checkbox"
                    width={22}
                    height={22}
                    priority
                    className="absolute top-0 left-0 cursor-pointer"
                  />
                )}
              </label>
              <p className="text-[12px] text-white font-extralight w-[250px]">
                I confirm my consent to the processing of personal data.
              </p>
            </div>
            <button className="text-[30px] font-medium text-white text-end uppercase mt-[16px] self-end hover:opacity-5 focus:opacity-5 hover:transition-all focus:transition-all md:mt-[9px] xl:text-[32px] md:absolute md:bottom-[27px] xl:bottom-[63px] xl:right-[10px]">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CareerForm;
