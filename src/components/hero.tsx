import { Button } from "./button";

export const Hero = () => {
  return (
    <section className="-mt-20 relative z-10">
        <h1 className="text-center text-2xl font-raleway font-bold px-2">All your files in one secure location, accessible anywhere.</h1>

        <p className="text-center text-sm mt-6 px-4">FileSend is a secure way to share files with others. It is a free service that allows you to send files to anyone, anywhere in the world.</p>

        <div className="text-center mt-6 mb-10">
            <Button text="Get Started" styles="w-[240px]" />
        </div>
    </section>
  )
}
