
"use client"

import { useState, useRef, useEffect } from "react"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function Component() {

    const [isDrawing, setIsDrawing] = useState(false)
    const [color, setColor] = useState("#000000")
    const [lineWidth, setLineWidth] = useState(5)
    const canvasRef = useRef(null)
    const [ctx, setCtx] = useState(null)
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        setCtx(context)
    }, [])
    const handleMouseDown = (e) => {
        setIsDrawing(true)
        ctx.beginPath()
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    }
    const handleMouseMove = (e) => {
        if (!isDrawing) return
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth
        ctx.stroke()
    }
    const handleMouseUp = () => {
        setIsDrawing(false)
        ctx.closePath()
    }
    const handleErase = () => {
        ctx.globalCompositeOperation = "destination-out"
        setLineWidth(20)
    }
    const handlePencil = () => {
        ctx.globalCompositeOperation = "source-over"
        setLineWidth(5)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    return (
        // <div className="flex flex-col items-center justify-center h-screen bg-background">
        //     < div className="flex flex-col items-center justify-center bg-card rounded-lg shadow-lg p-6" >
        //         <canvas
        //             ref={canvasRef}
        //             width={600}
        //             height={400}
        //             className="border border-input rounded-lg mb-4"
        //             onMouseDown={handleMouseDown}
        //             onMouseMove={handleMouseMove}
        //             onMouseUp={handleMouseUp}
        //         />
        //         <div className="flex items-center justify-center gap-4">
        //             <Button onClick={handleClear}>Clear</Button>
        //             <Button onClick={handleErase}>Erase</Button>
        //             <Button onClick={handlePencil}>Pencil</Button>
        //             <Input type="color" value={color} onChange={handleColorChange} className="w-12 h-12 p-0 border-none" />
        //         </div>
        //     </div >
        // </div >
        <div className="flex flex-col h-screen">
            <header className="py-4 px-6 shadow">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="#" prefetch={false}>
                        <h1 className="text-2xl font-bold">AI Eraser</h1>
                    </Link>
                </div>
            </header>
            <canvas
                ref={canvasRef}
                width={600}
                height={400}
                className="border border-input rounded-lg mb-4"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            />
            <div className="flex items-center justify-center gap-4">
                <Button onClick={handlePencil}>AI Eraser</Button>
                <Button onClick={handleErase}>Undo</Button>
                <div className="w-full">
                    <Input type="file" id="image1" className="w-full" />
                </div>
                <Link href="/"prefetch={false}>
                    <Button>Back</Button>
                </Link>
            </div>
        </div>
    )
}