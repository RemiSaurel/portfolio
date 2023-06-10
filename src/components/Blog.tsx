import SectionHeader from "./SectionHeader.tsx";

function Blog() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6 items-center justify-center font-medium">
        <div className="m-auto w-full md:w-3/4 lg:w-2/3" id="projects">
          <SectionHeader
            title="blog"
            subtitle="some articles"
            padding={"pt-8"}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
