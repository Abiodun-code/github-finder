import React from "react"

export interface themeProps{
  theme: unknown | undefined,
  setTheme: React.Dispatch<React.SetStateAction<string>>,
}

export interface childProps{
  children: React.ReactNode
}

export interface usersProps{
  users: never[],
  userRef: React.MutableRefObject<string>,
  FindUser: () => Promise<void>,
  loading: any | undefined
}