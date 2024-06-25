import Image from "next/image";
import Logo from "../assets/Logo.png";
import LandingImg from "../assets/main.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image className="max-w-xs" src={Logo} alt="logo" />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,600px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            <span className="text-primary">Youre friendly</span> Job app Manager
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Job Tracker is an application designed to streamline your job search
            process by organizing and tracking your job applications. Stay
            updated on application statuses, interview schedules, and follow-ups
            all in one place.
          </p>
          <Button className="mt-4" asChild>
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
}
