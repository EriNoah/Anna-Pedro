import React from "react";

function Home() {
  return (
    <div className="flex m-10">
      <div>
        <h1 className="text-4xl">
          Bem vindos ao site de celebração de nossa união
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab a,
          dolorem nesciunt natus facere necessitatibus obcaecati perspiciatis
          voluptatem esse rerum! Quos minus odio suscipit corporis doloremque
          quas fuga. Nesciunt, quae.
        </p>
      </div>
      <div className=" w-full">
        <img
          className="max-h-[500px] absolute"
          src="/images/foto1.jpg"
          alt="foto1"
        />
        <img
          className="max-h-[300px] relative top-80 left-60"
          src="/images/foto2.jpg"
          alt="foto2"
        />
      </div>
    </div>
  );
}

export default Home;
