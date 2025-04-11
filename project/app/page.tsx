import Link from "next/link";
import {
  IconBrain,
  IconArrowRight,
  IconSparkles,
  IconBook,
  IconWallet,
  IconInbox,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
    </div>
  );
}

function Hero() {
  return (
    <div className="flex gap-4 px-20 lg:px-40 py-20 lg:py-30 items-center">
      <div className="flex flex-col gap-4 basis-1/2">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Learn Anything with AI-Powered Roadmaps on Blockchain
        </h1>
        <p className="text-md lg:text-xl text-muted-foreground">
          LearnProf combines the power of AI with Solana blockchain to create
          personalized learning experiences.
        </p>
        <div className="flex gap-4">
          <Button>
            Start Learning <IconArrowRight className="h-4 w-4" />{" "}
          </Button>
          <Button variant="outline">Connect Wallet</Button>
        </div>
      </div>
      <div className="basis-1/2 overflow-hidden">
        <AspectRatio ratio={1/1} className="w-full">
          <Image src="/working.png" alt="man_working" fill className="w-full h-full object-cover" />
        </AspectRatio>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-20 lg:px-40 py-20 lg:py-30">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-primary/30 rounded-full w-fit h-fit p-2">
          <IconBrain className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">AI-Powered Learning</h3>
        <p className="text-gray-500 w-2/3">
          Our advanced AI generates personalized learning content based
          on your specific interests and goals.
        </p>
      </div>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-primary/30 rounded-full w-fit h-fit p-2">
          <IconWallet className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">
          Blockchain Integration
        </h3>
        <p className="text-gray-500 w-2/3">
          Your learning progress and achievements are securely stored on
          the Solana blockchain.
        </p>
      </div>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="bg-primary/30 rounded-full w-fit h-fit p-2">
          <IconInbox className="h-6 w-6 text-primary" />
        </div>
        <h3 className="text-xl font-bold">
          Structured Roadmaps
        </h3>
        <p className="text-gray-500 w-2/3">
            Our advanced AI generates personalized learning content based
            on your specific interests and goals.
        </p>
      </div>
    </div>
  );
}
