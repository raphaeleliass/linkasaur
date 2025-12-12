import { create } from "zustand";
import type { authClient } from "@/lib/auth-client";

type TUser = typeof authClient.$Infer.Session.user | null;

interface TStore {
	user: TUser;
	setUser: (user: TUser) => void;
}

export const userStore = create<TStore>((set) => ({
	user: null,
	setUser: (user) => set({ user }),
}));
