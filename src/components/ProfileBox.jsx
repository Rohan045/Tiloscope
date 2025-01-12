import { UserRoundPen, X, LoaderCircle } from "lucide-react";
import { React, useState } from "react";
import { useEditProfileManagementStore, useDialogManagementStore, useLoaderManagementStore } from "../stores/DialogManagementStore";
import { useUserManagementStore } from "../stores/UserManagementStore";
import {
    putApiCall,
} from "../interceptors/ApiCallInterceptors";
import userIcon from "../assets/user-icon.png";
import IconInfo from "./IconInfo";

const ProfileBox = () => {
    const { profileInfo, setProfileInfo } = useEditProfileManagementStore();
    const { setDialogInfo } = useDialogManagementStore();
    const { setLoaderInfo } = useLoaderManagementStore();
    const { setLoggedInUserInfo } = useUserManagementStore();
    const [formData, setFormData] = useState({ password: "", confPassword: "" });
    const [isChecked, setIsChecked] = useState(false);
    const [passError, setPassError] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCheckboxChange = (event) => {
        setPassError((event.target.checked === true && passError === true) ? true : false);
        setFormData({ password: "", confPassword: "" });
        setIsChecked(event.target.checked);
    };
    const handlePassword = (e) => {
        const { name, value } = e.target;
        if (isChecked && (e.target.value !== formData.confPassword || e.target.value === "")) {
            setPassError(true);
        } else {
            setPassError(false);
        }
        setFormData({ ...formData, [name]: value });
    }
    const handleConfPassword = (e) => {
        const { name, value } = e.target;
        if (isChecked && (formData.password !== e.target.value || e.target.value === "")) {
            setPassError(true);
        } else {
            setPassError(false);
        }
        setFormData({ ...formData, [name]: value });
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileInfo({ ...profileInfo, [name]: value });
    };
    const updateProfile = async () => {
        try {
            const payload = {
                "id": profileInfo.id,
                "name": profileInfo.name,
                "photoUrl": profileInfo.photoUrl,
                "description": profileInfo.description,
                "password": isChecked && formData.password !== "" ? formData.password : null
            }
            setLoading(true);
            const response = await putApiCall('/auth/player', payload, true);
            setLoggedInUserInfo(response);
        } catch {
            setDialogInfo({
                type: "error",
                text: "Error while updating profile",
            });
        } finally {
            setLoading(false);
            setProfileInfo(undefined);
            setDialogInfo({
                type: "info",
                text: "Profile updated",
            })
        }
    }
    return (
        <div className="card flex flex-col w-full bg-zinc-800 text-gray-300 md:w-1/2 lg:w-1/4 h-3/4 overflow-auto">
            <div className="flex flex-row justify-between p-3 border-solid border-zinc-700 border-b font-semibold">
                <IconInfo
                    config={{
                        icon: <UserRoundPen />,
                        text: "Profile",
                    }}
                />
                <div
                    className="vertical-centered cursor-pointer"
                    onClick={() => setProfileInfo(undefined)}
                >
                    <X />
                </div>
            </div>
            <div className="flex flex-col bg-[rgb(23,23,23)] p-3">
                <div className="p-3 h-fit overflow-auto">
                    <div className="justify-items-center w-full">
                        <img
                            src={profileInfo.photoUrl || userIcon}
                            alt="user-icon"
                            className="rounded-full object-cover w-[120px] h-[120px] p-5 lg:w-[150px] lg:h-[150px]"
                        />
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="photoUrl">Photo Url:</label>
                            <input
                                type="photoUrl"
                                id="photoUrl"
                                name="photoUrl"
                                value={profileInfo.photoUrl}
                                onChange={handleChange}
                                required
                                className="bg-zinc-800"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="name"
                                id="name"
                                name="name"
                                value={profileInfo.name}
                                onChange={handleChange}
                                required
                                className="bg-zinc-800"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profileInfo.email}
                                onChange={handleChange}
                                required
                                className="bg-zinc-800"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description:</label>
                            <input
                                type="description"
                                id="description"
                                name="description"
                                value={profileInfo.description}
                                onChange={handleChange}
                                maxLength={30}
                                required
                                className="bg-zinc-800"
                            />
                        </div>
                    </form>
                    <div className="flex w-2/3 text-sm">
                        <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                            className=""
                        />
                        <span className="pl-2">Change Password ?</span>
                    </div>
                    {isChecked ? <form>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handlePassword}
                                className="bg-zinc-800"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confPassword"
                                name="confPassword"
                                value={formData.confPassword}
                                onChange={handleConfPassword}
                                className="bg-zinc-800"
                                required
                            />
                        </div>
                        {passError ? <div class="text-red-500 text-sm">Passwords do not match!!</div> : <></>}
                    </form> : <></>}
                </div>

                <div className="flex flex-row justify-end">
                    <div className="">
                        <button className="bg-transparent border-solid border-zinc-700 border-[1px]" onClick={() => setProfileInfo(undefined)}>Discard</button>
                    </div>
                    <div className="pl-2">
                        <button className={"border-solid border-zinc-700 border-[1px]" + (passError ? " bg-red-500 hover:bg-red-500" : " bg-transparent")} disabled={passError} onClick={() => updateProfile()}>{loading ? <LoaderCircle className="animate-spin"/> : "Update"}</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProfileBox;
