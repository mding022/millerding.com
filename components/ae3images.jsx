
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="py-4 px-6 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="#" prefetch={false}>
            <h1 className="text-2xl font-bold">After Effects API</h1>
          </Link>
        </div>
      </header>
      <main className="flex-1 container mx-auto py-12 px-6">
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-2">Add Images</h2>
          <p className="text-black">Choose 3 images. Accepted file formats: .jpeg, .jpg, .png, .webp</p>
          <p className="text-black mt-2">
            Selected template: <span className="font-bold">NewTemplate.aep</span>
          </p>
        </section>
        <section className="mb-12">
          <div className="p-6 rounded-lg shadow w-full max-w-md mx-auto">
            <div className="grid gap-6 justify-center">
              <div className="w-full">
                <Label htmlFor="image1">Image 1</Label>
                <Input type="file" id="image1" className="w-full" />
              </div>
              <div className="w-full">
                <Label htmlFor="image2">Image 2</Label>
                <Input type="file" id="image2" className="w-full" />
              </div>
              <div className="w-full">
                <Label htmlFor="image2">Image 3</Label>
                <Input type="file" id="image3" className="w-full" />
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center gap-4">
          <Button
            className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Generate Video
          </Button>
          <a href="/ae">
          <Button className="bg-gray-300 text-black px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors">
            Back
          </Button>
          </a>
        </div>
      </main>
    </div>
  )
}