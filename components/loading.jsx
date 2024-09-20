"use client"

export default function Loading() {

    const Skeleton = ({ width, height }) => (
        <div
          className="animate-pulse bg-gray-200 rounded"
          style={{ width, height }}
        ></div>
      );

      
    return (
        <div className="flex flex-col min-h-[100dvh] text-foreground overflow-visible bg-background">
        <main className="flex-1 container px-4 md:px-6 py-12 md:py-16 lg:py-20">
          <section id="about" className="mb-12 md:mb-15 lg:mb-16">
            <Skeleton width="300px" height="40px" />
            <Skeleton width="500px" height="20px" className="mt-4" />
          </section>
          <section id="education" className="mb-10 md:mb-14 lg:mb-16">
            <Skeleton width="200px" height="30px" />
            <Skeleton width="600px" height="100px" className="mt-4" />
          </section>
          <section id="experience" className="mb-10 md:mb-14 lg:mb-16">
            <Skeleton width="200px" height="30px" />
            <Skeleton width="600px" height="200px" className="mt-4" />
          </section>
          <section id="projects" className="mb-10 md:mb-14 lg:mb-16">
            <Skeleton width="200px" height="30px" />
            <Skeleton width="600px" height="200px" className="mt-4" />
          </section>
        </main>
      </div>
    )
}