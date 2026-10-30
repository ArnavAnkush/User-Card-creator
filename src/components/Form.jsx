
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({users,setUsers, setToggle, updateData}) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode:"onChange",
    defaultValues: updateData
  });

  let formSubmit = (data) => {
    if (updateData) {
        setUsers((prev) => {
          return prev.map((val) => {
            return val.id === updateData.id ? {...data} : val
          })
        })
    } else{
          console.log(data);
    let arr = [...users, {...data, id: nanoid()}]
    setUsers(arr);
    localStorage.setItem("users", JSON.stringify(arr));
    }
    reset();
    setToggle(prev=> !prev)
  }

  return (
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-xl font-bold">Create User</h1>

      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col w-100 gap-2 p-8 rounded-xl bg-black border-2 border-white"
      >
        <input
          {...register("name", {
            required: "Name is required",
          })}
          className="p-2 rounded border border-white"
          type="text"
          placeholder="Name"
        />
        {errors.name && (
          <p className="text-red-500">{errors.name.message}</p>
        )}

        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email",
            },
          })}
          className="p-2 rounded border border-white"
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}

        <input
          {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Enter exactly 10 digits",
            },
          })}
          className="p-2 rounded border border-white"
          type="tel"
          placeholder="Contact"
        />
        {errors.mobile && (
          <p className="text-red-500">{errors.mobile.message}</p>
        )}

        <input
          {...register("image", {
            required: "Image URL is required",
          })}
          className="p-2 rounded border border-white"
          type="url"
          placeholder="Image URL"
        />
        {errors.image && (
          <p className="text-red-500">{errors.image.message}</p>
        )}

        <button
          type="submit"
          className="bg-blue-500 p-2 rounded-xl cursor-pointer"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default Form;
