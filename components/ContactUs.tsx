"use client";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import * as React from "react";

type FormInputs = {
  fullName: string;
  email: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

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

  React.useEffect(() => {
    setError("fullName", {
      type: "manual",
      message: "Incorrect name",
    });
    setError("email", {
      type: "manual",
      message: "Invalid email",
    });
  }, [setError]);

  return (
    <section className="relative">
      <h1 className="text-[40px] leading-[56px] font-thin text-white uppercase tracking-tighter md:text-[67px] xl:leading-tight xl:text-[98px]">
        Contact <span className="font-medium uppercase">us</span>
      </h1>
      <div className="xl:flex xl:flex-row xl:mt-[71px] xl:gap-[231px]">
        <div className="xl:flex xl:flex-col xl:w-[356px] xl:ml-[107px]">
          <div className="mt-[36px] text-[14px] md:text-[16px] xl:text-[18px] text-white flex flex-row items-top gap-[20px] justify-end md:mt-[40px] xl:mt-0 md:justify-start md:ml-[64px] xl:justify-end xl:ml-0">
            <div className="flex flex-col">
              <Link href="tel:+380981234567">+38 (098) 12 34 567</Link>

              <Link href="tel:+380731234567">+38 (073) 12 34 567</Link>
            </div>
            <p className="font-extralight flex text-[12px]">Phone number</p>
          </div>
          <div className="mt-[24px] text-[14px] md:text-[16px] xl:text-[18px] text-white flex flex-row items-center gap-[19px] ml-[16px] md:ml-[34px] xl:mt-[64px] xl:ml-0">
            <Link href="mailto:support@carptravel.com">
              support@carptravel.com
            </Link>
            <p className="font-extralight flex text-[12px]">E-mail</p>
          </div>
          <div className="mt-[24px] text-[14px] md:text-[16px] xl:text-[18px] text-white flex flex-row gap-[20px] items-top ml-[16px] justify-end mr-[15px] md:absolute md:top-[95px] md:right-[145px] md:mt-0 xl:static xl:mt-[124px] xl:mr-0 xl:flex-row-reverse xl:justify-end xl:ml-[130px]">
            <p className="font-extralight flex text-[12px]">Follow us</p>
            <ul>
              <li>facebook</li>
              <li>instagram</li>
              <li>youtube</li>
              <li>tiktok</li>
            </ul>
          </div>
        </div>
        <form className="mt-[12px] flex flex-col md:flex-row md:mt-[64px] xl:flex-col xl:gap-[16px] xl:mt-0">
          <div className="xl:flex xl:flex-row xl:gap-[20px]">
            <label className="flex flex-col gap-[4px] text-[12px] text-white font-extralight tracking-[3px] md:w-[221px]">
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
                className="bg-white bg-opacity-5 text-white text-[13px] xl:text-[20px] hover:bg-opacity-10 focus:bg-opacity-10 h-[24px] pl-[8px] pr-[8px] outline-none xl:h-[28px]"
                placeholder="John Smith"
                pattern="/^[A-Za-z]+$/i"
                onChange={onChangeName}
              />
              {errors.fullName && (
                <p className="flex flex-row gap-[3px] text-[#FF5757] tracking-widest self-end tracking-[3px]">
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
            <label className="flex flex-col gap-[4px] text-[12px] text-white font-extralight  mt-[4px] tracking-[3px] md:w-[221px] xl:mt-0">
              E-mail
              <input
                {...(register("fullName"),
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
                className="bg-white bg-opacity-5 text-white text-[13px] xl:text-[20px] hover:bg-opacity-10 focus:bg-opacity-10 h-[24px] pl-[8px] pr-[8px] outline-none xl:h-[28px]"
                placeholder="johnsmith@email.com"
                onChange={onChangeEmail}
              />
              {errors.email && (
                <p className="flex flex-row gap-[3px] text-[#FF5757] tracking-widest self-end tracking-[3px]">
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
          </div>
          <div className="flex flex-col md:w-full md:ml-[20px] xl:ml-0">
            <label className="flex flex-col gap-[4px] text-[12px] text-white font-extralight tracking-[3px]">
              Message
              <textarea className="bg-white bg-opacity-5 h-[193px] hover:bg-opacity-10 focus:bg-opacity-10 resize-none outline-none p-[8px]"></textarea>
            </label>
            <button className="text-[30px] font-medium text-white text-end uppercase mt-[16px] self-end xl:text-[32px]">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
