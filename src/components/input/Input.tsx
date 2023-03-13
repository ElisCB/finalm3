import { IInputProps } from "../../providers/@types";

function InputComponent({ label, register, type, placeholder }: IInputProps) {
  return (
    <div className="flex flex-col mx-auto my-auto w-full max-w-xs md:max-w-lg">
      <label className="text-base md:text-lg font-bold font-normal mb-2">
        {label}
      </label>

      <input
        className="border rounded-lg py-2 px-6 mb-2 w-full"
        placeholder={placeholder}
        {...register}
        type={type}
      />
    </div>
  );
}

export default InputComponent;
