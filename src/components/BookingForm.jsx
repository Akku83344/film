/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const BookingForm = ({ open, setOpen, show, setIsSuccessOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    localStorage.setItem("bookData", JSON.stringify(formData));
    setOpen(false);
    setIsSuccessOpen(true);
    setTimeout(() => {
      setIsSuccessOpen(false);
    }, 3000);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-primary text-secondary px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="text-secondary hover:text-gray-100 focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h1"
                      className="text-3xl font-semibold leading-6"
                    >
                      Book Movie
                    </Dialog.Title>
                  </div>
                  <div className="my-8">
                    <h1 className="text-xl font-semibold">{show.name}</h1>
                    <div className="mt-1">
                      {show.schedule.time}{" "}
                      {show.schedule.days.map((item, index) => (
                        <span key={index}>{(index ? ", " : "") + item}</span>
                      ))}
                    </div>
                  </div>
                  <form onSubmit={onSubmit}>
                    <div className="mt-4">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6"
                      >
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          onChange={onChange}
                          required
                          className="block w-full px-3 rounded-md border-0 py-1.5 shadow-sm bg-bodyBg ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary :focus-visible:none sm:text-sm sm:leading-6"
                          placeholder="Akku"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6"
                      >
                        Email
                      </label>
                      <div className="mt-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          onChange={onChange}
                          required
                          className="block w-full px-3 rounded-md border-0 py-1.5 shadow-sm bg-bodyBg ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary :focus-visible:none sm:text-sm sm:leading-6"
                          placeholder="akku@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="phoneNo"
                        className="block text-sm font-medium leading-6"
                      >
                        Phone No
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="phoneNo"
                          id="phoneNo"
                          onChange={onChange}
                          required
                          className="block w-full px-3 rounded-md border-0 py-1.5 shadow-sm bg-bodyBg ring-1 ring-inset ring-secondary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary :focus-visible:none sm:text-sm sm:leading-6"
                          placeholder="0123456789"
                        />
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-secondary px-3 py-2 text-lg font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Book
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default BookingForm;
