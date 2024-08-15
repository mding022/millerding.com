'use client';

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  const sendPostRequest = async () => {
    const image1 = document.getElementById("image1").files[0];
    const image2 = document.getElementById("image2").files[0];
    const formData = new FormData();
    
    formData.append("images", image1);
    formData.append("images", image2);
    formData.append("request_id", "123");

    try {
      let response = await fetch('https://d392-66-171-229-142.ngrok-free.app/uploadfiles', {
        method: "POST",
        body: formData,
      });
    if (response.status === 200) {
      alert("Successfully connected to server.");
    } else {
      alert("Failed with status: " + response.status);
    }
  } catch (error) {
    console.error("Error sending POST request:", error);
    alert("Failed to send request due to an error.");
  }
  };

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
          <p className="text-black">Choose 2 images. Accepted file formats: .jpeg, .jpg, .png, .webp</p>
          <p className="text-black mt-2">
            Selected template: <span className="font-bold">transition.aep</span>
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
            </div>
          </div>
        </section>
        <div className="flex justify-center gap-4">
          <Button
            as="button"
            onClick={sendPostRequest}
            className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Generate Video
          </Button>
          <Link href="/ae">
            <Button className="bg-gray-300 text-black px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors">
              Back
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
