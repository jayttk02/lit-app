import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-zinc-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/ind.svg" alt="Devanagari" height={32} width={40} className="mr-4 rounded-md"/>
                    Devanagari
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/jpn.svg" alt="Hiragana" height={32} width={40} className="mr-4 rounded-md"/>
                    Hiragana
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/bgr.svg" alt="Cyrillic" height={32} width={40} className="mr-4 rounded-md"/>
                    Cyrillic
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/khm.svg" alt="Khmer" height={32} width={40} className="mr-4 rounded-md"/>
                    Khmer
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    ... And More
                </Button>
            </div>
        </footer>
    )
}