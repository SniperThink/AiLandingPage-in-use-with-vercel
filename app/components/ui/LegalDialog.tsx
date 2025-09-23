"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/app/components/ui/dialog"
import { Button } from "@/app/components/ui/button"

interface LegalDialogProps {
  title: string;
  children: React.ReactNode;
  triggerText: string;
  className?: string;
}

export function LegalDialog({ 
  title, 
  children, 
  triggerText,
  className 
}: LegalDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={`hover:underline text-inherit ${className}`}>
          {triggerText}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#111827] border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center text-white mb-4 pb-2 border-b border-gray-700">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="prose prose-invert prose-sm max-w-none">
          {children}
        </div>
        <div className="mt-6 flex justify-end">
          <DialogClose asChild>
            <Button variant="outline" className="text-gray-200 border-gray-700 hover:bg-gray-800">
              Close
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LegalDialog
