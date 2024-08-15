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
                        <h1 className="text-2xl font-bold">FaceSwap API</h1>
                    </Link>
                </div>
            </header>
            <main className="flex-1 container mx-auto py-12 px-6">
                <section className="mb-12 text-center">
                    <h2 className="text-3xl font-bold mb-2">Add Image</h2>
                    <p className="text-black">Choose 1 image. Accepted file formats: .jpeg, .jpg, .png, .webp</p>
                    <p className="text-black mt-2">
                        Selected template: <span className="font-bold">cow dance</span>
                    </p>
                    <p className="text-black mt-2">
                        Make sure to upload a <span className="font-bold">clear and bright picture</span> for best results
                    </p>
                    <div className="flex items-center justify-center my-4">
                        <img
                            src="/images/cow.jpg"
                            alt="template image"
                            width={400}
                            height={300}
                            className="rounded-lg"
                            style={{ aspectRatio: "400/300", objectFit: "cover" }}
                        />
                    </div>
                </section>
                <section className="mb-12">
                    <div className="p-6 rounded-lg shadow w-full max-w-md mx-auto">
                        <div className="grid gap-6 justify-center">
                            <div className="w-full">
                                <Label htmlFor="image1">Selfie</Label>
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
                        Generate Video
                    </Button>
                    <Link href="/faceswap">
                        <Button className="bg-gray-300 text-black px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors">
                            Back
                        </Button>
                    </Link>
                </div>
            </main>
        </div>
    );
}
