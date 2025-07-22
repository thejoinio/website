'use client'
import { LogoGradientMission } from "@/assets/svg"
import { BaseModal } from "../modal"
import { useModal } from "@/contexts/modal-context"

export const Presale = () => {
    const {isOpen, onClose} = useModal();
    return (
        <BaseModal isOpen={isOpen} onClose={onClose}>
          <div className="w-[90%] sm:w-3/4 mx-auto">
                  <div className="flex justify-center items-center mt-4">
                    <LogoGradientMission className="block" />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 mt-8">
                    <h2 className="text-center">Success!</h2>
                    <p className="text-center">You are now on the Join waitlist.</p>
                  </div>
            </div>  
        </BaseModal>
    )
}