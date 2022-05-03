import { CloseButton } from "../CloseButton";
import { useState } from "react";


import bugImageUrl from '../../img/bug.svg';
import ideaImageUrl from '../../img/idea.svg';
import thoughtImageUrl from '../../img/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypesStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imagem de uma lâmpada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'imagem de um balão de pensamento'
        },
    }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {

    const [feedbackType, setFeeedBackType] = useState<FeedbackType | null>(null)

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu Feeedback</span>
                <CloseButton />
            </header>
            {!feedbackType ? (

                <FeedbackTypeStep onFeedbackTypeChanged={setFeeedBackType} />
         
            ) : (
                <p>Hello World</p>
            )}
            <footer>
                Feito com &#9829; por <a className="underline ring-offset-2" href="https://jadson-portifolio.netlify.app/" target="_blank" >Jadson Silva</a>
            </footer>
        </div>
    )
}