import * as React from "react"

export type ToastProps = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
}

const TOAST_LIMIT = 5

const listeners: Array<(state: ToastProps[]) => void> = []
let memoryState: ToastProps[] = []

function dispatch(toast: ToastProps) {
  memoryState = [toast, ...memoryState].slice(0, TOAST_LIMIT)
  listeners.forEach((l) => l(memoryState))
}

export function useToast() {
  const [toasts, setToasts] = React.useState(memoryState)

  React.useEffect(() => {
    listeners.push(setToasts)
    return () => {
      const i = listeners.indexOf(setToasts)
      if (i > -1) listeners.splice(i, 1)
    }
  }, [])

  return {
    toasts,
    toast: (toast: Omit<ToastProps, "id">) => {
      dispatch({ id: crypto.randomUUID(), ...toast })
    },
  }
}