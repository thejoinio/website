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
                    <LogoGradientMission className="hidden sm:block" />
                  </div>
                  <h2>JOIN Presale</h2>
            </div>  
        </BaseModal>
    )
}