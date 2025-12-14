import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva } from "class-variance-authority"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      `
        fixed z-[100]
        flex flex-col gap-2
        w-full max-w-full
        px-4
        bottom-4
        sm:bottom-4 sm:right-4 sm:left-auto
        sm:max-w-[380px]
      `,
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  `
    group pointer-events-auto relative flex w-full
    items-start justify-between gap-3
    overflow-hidden rounded-xl border
    p-4 text-sm shadow-xl
    transition-all
    data-[state=open]:animate-in
    data-[state=closed]:animate-out
    data-[state=closed]:fade-out-80
    data-[state=open]:slide-in-from-bottom-full
    data-[state=closed]:slide-out-to-right-full
  `,
  {
    variants: {
      variant: {
        default:
          "bg-white text-black border-gray-200 dark:bg-[#111111] dark:text-white dark:border-gray-700",
        destructive:
          "bg-red-600 text-white border-red-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Root
    ref={ref}
    className={cn(toastVariants({ variant }), className)}
    {...props}
  />
))
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      `
        inline-flex h-8 shrink-0 items-center justify-center
        rounded-md border border-gray-300 dark:border-gray-600
        bg-transparent px-3 text-sm font-medium
        transition hover:bg-gray-100 dark:hover:bg-gray-800
        focus:outline-none focus:ring-2
        disabled:pointer-events-none disabled:opacity-50
      `,
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      `
        absolute right-2 top-2 rounded-md p-1
        text-gray-500 hover:text-black
        dark:text-gray-400 dark:hover:text-white
        transition focus:outline-none focus:ring-2
      `,
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
