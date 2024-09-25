import { useState } from "react";
import CategoryPills from "./Components/CategoryPills";
import { categories, videos } from "./Data/Home";
import PageHeader from "./layouts/PageHeader";
import VideoGridItems from "./Components/VideoGridItems";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader></PageHeader>

      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div>Sidebar</div>

        <div className="overflow-x-hidden pb-4 px-8 text-xs">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills categories={categories} selectedCategory={selectedCategory} onSelect={setSelectedCategory}></CategoryPills>
          </div>

          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {
              videos.map(video => (
                <VideoGridItems key={video.id} {...video}></VideoGridItems>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;