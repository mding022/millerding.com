'use client';

import React, { useState } from 'react'
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  const [generateText, setGenerateText] = useState("Generate Video");
  const [uploadText, setUploadText] = useState("Upload Images");
  const [videoUrl, setVideoUrl] = useState(null);

  const sendUploadPostRequest = async () => {

    const image1 = document.getElementById("image1").files[0];
    const image2 = document.getElementById("image2").files[0];
    const formData = new FormData();

    formData.append("images", image1);
    formData.append("images", image2);
    formData.append("request_id", "123");

    try {
      setUploadText("Uploading...");
      let response = await fetch('https://d392-66-171-229-142.ngrok-free.app/uploadfiles', {
        method: "POST",
        body: formData,
      });
      if (response.status === 200) {
        setUploadText("200: Success");
        setTimeout(() => {
          setUploadText("Change Images");
        }, 2000);
      } else {
        setUploadText(response.status + ": Failed");
        setTimeout(() => {
          setUploadText("Upload Images");
        }, 1000);
      }
    } catch (error) {
      setUploadText(error + ": Failed");
      setTimeout(() => {
        setUploadText("Upload Images");
      }, 1000);
    }
  };

  const sendCreatePostRequest = async () => {
    setGenerateText("Loading...");
    const formData = new FormData();

    formData.append("request_id", "123");
    formData.append("template", "transition.aep");

    try {
      let response = await fetch('https://d392-66-171-229-142.ngrok-free.app/create', {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        setGenerateText("Success");
        setTimeout(() => {
          setGenerateText("Generate Video");
        }, 1000);
        const blob = await response.blob();
        const vurl = URL.createObjectURL(blob);
        setVideoUrl(vurl);
      } else {
        setGenerateText(response.status + ": Failed")
        setTimeout(() => {
          setGenerateText("Generate Video");
        }, 2000)
      }
    } catch (error) {
      console.error("Error:", error);
      setGenerateText(error + ": Failed")
      setTimeout(() => {
        setGenerateText("Generate Video");
      }, 2000)
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
          {videoUrl && (
            <div className="flex justify-center my-4">
              <div className="flex justify-center items-center" style={{ maxWidth: '150px', width: '100%', marginTop: '12px' }}>
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  style={{ width: '100%', borderRadius: '8px' }} // Adjust borderRadius as needed
                >
                  Your browser does not support video playing.
                </video>
              </div>
            </div>
          )}

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
            onClick={sendUploadPostRequest}
            className="bg-gray-800 text-white px-7 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {uploadText}
          </Button>
          <Button
            as="button"
            onClick={sendCreatePostRequest}
            className="bg-gray-800 text-white px-7 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            {generateText}
          </Button>
          <Link href="/ae">
            <Button className="bg-gray-300 text-black px-7 py-3 rounded-lg hover:bg-gray-400 transition-colors">
              Back
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
