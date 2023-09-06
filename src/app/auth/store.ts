import { create } from 'zustand';

type Profile = {
    username:string,
    email:string,
} | null;

type useProfileStoreType = {
    setProfileData:(data: Profile) => void
    profile:Profile
};

export const useProfileStore = create<useProfileStoreType>((set) => ({
    setProfileData: (data) => set(({ profile: data })),
    profile: null,
}));
