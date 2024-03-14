import { create } from "zustand";
import { persist } from 'zustand/middleware'

const store = ((set) => ({
    userUid: '',
    userEmail: '',
    updateUserUid: (uid) => set({userUid : uid}),
    updateUserEmail: (email) => set({userEmail : email}),
    deleteUsers: () =>set({
        userUid: '',
        userEmail: '',
    })
}))

export const useUserStore = create(persist(store, {
    name: 'store'
}))