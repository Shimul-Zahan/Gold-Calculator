import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const TableThree = () => {
    const [activeTable, setActiveTable] = useState("Table 2");
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        clientId: "",
        nationalId: "",
        firstName: "",
        lastName: "",
        phone: "",
    });

    // Handler function to update form state
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/tableOne",
                formData
            );

            console.log("Form submitted successfully!", response.data);
            alert("Form submitted successfully!");
            setOpenModal(false);
            setFormData({
                clientId: "",
                nationalId: "",
                firstName: "",
                lastName: "",
                phone: "",
            });
        } catch (error) {
            if (error.response.status === 409) {
                alert("Data Already Exits");
            } else {
                console.log(error);
            }
        }
    };
    const handleSetActiveTable = (table) => {
        setActiveTable(table);
    };

    return (
        <div className="lg:px-8 px-2">
            <div className="bg-[#005697] mt-5 pt-5 pb-8 lg:px-7 px-4 rounded-lg mb-5">
                <div className="overflow-x-auto mt-3 rounded-lg">
                    <div className="overflow-x-auto ">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm overflow-x-auto">
                            <thead className="ltr:text-left rtl:text-right border-b overflow-x-auto">
                                <tr>
                                <th
                                        className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${
                                            activeTable === "Table 1"
                                                ? "bg-green-500"
                                                : ""
                                        }`}
                                    >
                                        <Link to={"/dashboard"}>Table 1</Link>
                                    </th>
                                    <th
                                        className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${
                                            activeTable === "Table 2"
                                                ? "bg-green-500"
                                                : ""
                                        }`}
                                    >
                                        <Link
                                            to="/dashboard/tableTwo"
                                        >
                                            Table 2
                                        </Link>
                                    </th>
                                    <th
                                        className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${
                                            activeTable === "Table 3"
                                                ? "bg-green-500"
                                                : ""
                                        }`}
                                    >
                                        <Link
                                            to="/dashboard/tableThree"
                                        >
                                            Table 3
                                        </Link>
                                    </th>
                                    <th
                                        className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${
                                            activeTable === "Table 4"
                                                ? "bg-green-500"
                                                : ""
                                        }`}
                                    >
                                        <Link
                                            to="/dashboard/tableFour"
                                        >
                                            Table 4
                                        </Link>
                                    </th>
                                    <th
                                        className={`whitespace-nowrap px-4 py-2 font-medium text-gray-900 ${
                                            activeTable === "Gold Samples Table"
                                                ? "bg-green-500"
                                                : ""
                                        }`}
                                    >
                                        <Link
                                            to="#"
                                            onClick={() =>
                                                handleSetActiveTable(
                                                    "Gold Samples Table"
                                                )
                                            }
                                        >
                                            Gold Samples Table
                                        </Link>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                    <div className="p-2 mx-auto sm:p-4 bg-white">
                        <div className="flex flex-col md:flex-row justify-center lg:justify-between mb-5">
                            <div>
                                <h2 className="mb-4 text-2xl font-semibold leading-tight">
                                    {activeTable}
                                </h2>
                            </div>
                            <div className="flex gap-2">
                                <button className="bg-[#005697] px-3  text-white rounded-full">
                                    <div className="mx-auto flex items-center justify-center">
                                        <button
                                            onClick={() => setOpenModal(true)}
                                            className="rounded-md  py-2 px-5 text-white"
                                        >
                                            добавить
                                        </button>
                                        <div
                                            onClick={() => setOpenModal(false)}
                                            className={`fixed z-[100] flex items-center justify-center ${
                                                openModal
                                                    ? "opacity-1 visible"
                                                    : "invisible opacity-0"
                                            } inset-0 h-full w-full bg-black/20 backdrop-blur-sm duration-100`}
                                        >
                                            <div
                                                onClick={(e_) =>
                                                    e_.stopPropagation()
                                                }
                                                className={`absolute w-full rounded-lg bg-white drop-shadow-2xl sm:w-[500px] ${
                                                    openModal
                                                        ? "opacity-1 translate-y-0 duration-300"
                                                        : "-translate-y-20 opacity-0 duration-150"
                                                }`}
                                            >
                                                <form
                                                    onSubmit={handleSubmit}
                                                    className="px-5 pb-5 pt-3 lg:pb-10 lg:pt-5 lg:px-10"
                                                >
                                                    <svg
                                                        onClick={() =>
                                                            setOpenModal(false)
                                                        }
                                                        className="mx-auto mr-0 w-10 cursor-pointer fill-black dark:fill-white"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <g strokeWidth="0"></g>
                                                        <g
                                                            id="SVGRepo_tracerCarrier"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        ></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
                                                        </g>
                                                    </svg>
                                                    <div className="">
                                                        <label
                                                            htmlFor="clientId"
                                                            className="block"
                                                        >
                                                            Client ID
                                                        </label>
                                                        <input
                                                            id="clientId"
                                                            type="text"
                                                            name="clientId"
                                                            value={
                                                                formData.clientId
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            placeholder="Client ID"
                                                            className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black "
                                                        />

                                                        <label className="block">
                                                            National ID
                                                        </label>
                                                        <input
                                                            id="nationalId"
                                                            type="text"
                                                            name="nationalId"
                                                            value={
                                                                formData.nationalId
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            placeholder="National ID"
                                                            className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black  "
                                                        />

                                                        <label className="block">
                                                            First Name
                                                        </label>
                                                        <input
                                                            id="firstName"
                                                            type="text"
                                                            name="firstName"
                                                            value={
                                                                formData.firstName
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            placeholder="First Name"
                                                            className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black  "
                                                        />

                                                        <label className="block">
                                                            Last Name
                                                        </label>
                                                        <input
                                                            id="lastName"
                                                            type="text"
                                                            name="lastName"
                                                            value={
                                                                formData.lastName
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            placeholder="Last Name"
                                                            className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black "
                                                        />

                                                        <label className="block">
                                                            Contact Info
                                                        </label>
                                                        <input
                                                            id="phone"
                                                            type="text"
                                                            name="phone"
                                                            value={
                                                                formData.phone
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            placeholder="Contact number"
                                                            className="block w-full rounded-lg p-3 pl-10 outline-none drop-shadow-lg bg-white text-black "
                                                        />
                                                    </div>
                                                    {/* button type will be submit for handling form submission*/}
                                                    <button
                                                        type="submit"
                                                        className="relative py-2.5 px-5 rounded-lg mt-6 bg-green-500 text-white w-full drop-shadow-lg "
                                                    >
                                                        Submit
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button className="bg-[#005697] px-3  text-white rounded-full">
                                    удалить
                                </button>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            {activeTable === "Table 1" && (
                                <div className="overflow-x-auto">
                                    <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                                        <colgroup>
                                            <col className="w-5" />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col />
                                            <col className="w-5" />
                                        </colgroup>
                                        <thead>
                                            <tr className="">
                                                <th className="p-3">
                                                    ClientID
                                                </th>
                                                <th className="p-3">
                                                    National ID
                                                </th>
                                                <th className="p-3">
                                                    FirstName
                                                </th>
                                                <th className="p-3">
                                                    LastName
                                                </th>
                                                <th className="p-3">
                                                    Contact Info
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="border-b ">
                                            <tr>
                                                <td className="px-3 py-2">
                                                    <p>Dwight Adams</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>Dwight Adams</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p className="">
                                                        Spirit Media
                                                    </p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>555-873-9812</p>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <p>dwight@adams.com</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {activeTable === "Table 2" && (
                                <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                                    {/* Table 2 content */}
                                </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableThree;
