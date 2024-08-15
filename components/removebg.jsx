'use client';

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
    const sendPostRequest = async () => {
        // const image1 = document.getElementById("image1").files[0];
        // const formData = new FormData();

        // formData.append("images", image1);
        // formData.append("request_id", "123");
        alert("Success! Connected the faceswap url to complete @ fs1image.jsx")
        // try {
        //     let response = await fetch('https://d392-66-171-229-142.ngrok-free.app/uploadfiles', {
        //         method: "POST",
        //         body: formData,
        //     });
        //     if (response.status === 200) {
        //         alert("Successfully connected to server.");
        //     } else {
        //         alert("Failed with status: " + response.status);
        //     }
        // } catch (error) {
        //     console.error("Error sending POST request:", error);
        //     alert("Failed to send request due to an error.");
        // }
    };

    return (
        <div className="flex flex-col h-screen">
            <header className="py-4 px-6 shadow">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="#" prefetch={false}>
                        <h1 className="text-2xl font-bold">Remove background</h1>
                    </Link>
                </div>
            </header>
            <main className="flex-1 container mx-auto py-12 px-6">
                <section className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-2">Add Image</h2>
                    <p className="text-black">Drag and drop any image, or upload.</p>
                    <p className="text-black mt-2">
                        Accepted file formats: <span className="font-bold">.jpg, .jpeg, .webp, .png</span>
                    </p>
                </section>
                <section className="mb-12">
                    <div className="p-6 rounded-lg shadow w-full max-w-md mx-auto">
                        <div className="grid gap-6 justify-center">
                            <div className="w-full">
                                <Label htmlFor="image1">Drag and Drop Image</Label>
                                <Input type="file" id="image1" className="w-full" />
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
                        Remove background
                    </Button>
                    <Link href="/">
                        <Button className="bg-gray-300 text-black px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors">
                            Back
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    );
}
