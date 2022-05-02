import {ChatTeardropDots} from "phosphor-react"
import { useState } from "react"
import { Popover } from "@headlessui/react"

export function Widget(){
    /* const [isOpen, setIsOpen] = useState(false)

    function toggleWidget() {
      setIsOpen(!isOpen)  
    }
 */
    return (
        <Popover className="absolute bottom-4 right-4">
            {/*isOpen && <p>Hello World</p>*/ /* && substitui a condicional if e ?, executando a segunda parte da instrução apenas se a primeira for TRUE */}
            <Popover.Panel>Hello World</Popover.Panel> 

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">                
                <ChatTeardropDots className="w-6 h-6"/>

                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2"></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}