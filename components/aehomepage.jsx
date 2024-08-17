
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Select a Video Template{"  "}</h1>
        <p className="mt-2 text-muted-foreground md:text-xl">
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
          <Link href="/transition" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">Customize Intro Video</span>
          </Link>
          <img
            src="/images/beforeandafter.jpg"
            alt="Before and After Template"
            width={400}
            height={225}
            className="h-48 w-full object-cover"
            style={{ aspectRatio: "400/225", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-lg font-semibold">transition.aep</h3>
            <p className="text-muted-foreground">Before and after transition</p>
            <Button className="mt-4 w-full" >Select</Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
          <Link href="/newtemplate" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">Customize Product Promo</span>
          </Link>
          <img
            src="images/newtemp.jpg"
            alt="newtemp.jpg"
            width={400}
            height={225}
            className="h-48 w-full object-cover"
            style={{ aspectRatio: "400/225", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-lg font-semibold">NewTemplate.aep</h3>
            <p className="text-muted-foreground">Simple 3 image showcase</p>
            <Button className="mt-4 w-full">Select</Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">Customize Testimonial Reel</span>
          </Link>
          <img
            src="/images/cow.jpg"
            alt="imagename"
            width={400}
            height={225}
            className="h-48 w-full object-cover"
            style={{ aspectRatio: "400/225", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-lg font-semibold">Unnamed.aep</h3>
            <p className="text-muted-foreground">description</p>
            <Button className="mt-4 w-full">Select</Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">Customize Event Recap</span>
          </Link>
          <img
            src="/images/cow.jpg"
            alt="imagename"
            width={400}
            height={225}
            className="h-48 w-full object-cover"
            style={{ aspectRatio: "400/225", objectFit: "cover" }}
          />
          <div className="bg-background p-4">
            <h3 className="text-lg font-semibold">Unnamed.aep</h3>
            <p className="text-muted-foreground">description.</p>
            <Button className="mt-4 w-full">Select</Button>
          </div>
        </div>
      </div>
    </div>
  )
}