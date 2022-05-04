import { Fragment, useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageURL from "../../assets/bug.svg"
import ideaImageURL from "../../assets/idea.svg"
import otherImageURL from "../../assets/thought.svg"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep"

export const feedbackTypes = {
    BUG: { 
        title: "Problema",
        image: {
            source: bugImageURL,
            alt: "Imagem de um inseto"
        }
     },
    IDEA: { 
        title: "Ideia",
        image: {
            source: ideaImageURL,
            alt: "Imagem de uma lâmpada"
        }
     },
    OTHER: { 
        title: "Outro",
        image: {
            source: otherImageURL,
            alt: "Imagem de uma nuvem de pensamento"
        }
     }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false)

    function handleRestartFeedback() {
        setFeedbackSent(false)
        setFeedbackType(null)
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

        { feedbackSent ? (
            <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />
        ) : (
            <Fragment>
                {!feedbackType ? (
                    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                ) : (
                    <FeedbackContentStep
                        onFeedbackSent={() => setFeedbackSent(true)}
                        feedbackType={feedbackType}
                        onFeedbackRestartRequested={handleRestartFeedback} />
                )}
            </Fragment>
        )}
                  
            <footer className="text-xs text-neutral-400">
                Feito com ❤ por <a className="underline underline-offset-2" href="https://github.com/duibarr"  target="_blank" rel="noopener noreferrer">Eduardo</a>
            </footer>
        </div>
    )
}