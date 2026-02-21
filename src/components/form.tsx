import type { FormEvent } from "react";
import { useState } from "react";
import { Button } from "./button";

export const Form = () => {
  const [inputValue, SetInputValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const regExp =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    const isValid = regExp.test(inputValue);

    if (isValid) {
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    SetInputValue(value);
  };

  return (
    <div className="mb-[300px] absolute top-[-200px] left-0 right-0 mx-auto text-center py-10 px-6 bg-navy-850 rounded-[9px] w-[336px] md:w-[480px] xl:w-[720px]">
      <h2 className="font-bold mb-4 text-[1.25rem]">Get early acces today</h2>
      <p className="text-sm mb-8">It only takes a minute to sign up.</p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 xl:flex-row"
        action=""
      >
        <input
          onChange={handleChange}
          className="bg-white rounded-3xl placeholder:text-gray-400 text-navy-800 text-center h-12 xl:flex-1"
          placeholder="email@example.com"
          required
          value={inputValue}
        />
        {error && (
          <p className="text-red-500 text-sm mt-[-12px]">
            Please provide a valid email
          </p>
        )}
        <Button styles="xl:w-[200px]" text="Get Started For Free" />
      </form>
    </div>
  );
};
