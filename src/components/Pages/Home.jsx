import React from "react";

function Home() {
  return (
    <div className="flex m-10 gap-5">
      <div className="max-w-[1000px]">
        <h1 className="text-6xl mb-10">
          Bem vindos ao site de celebração de nossa união
        </h1>
        <p className="text-gray-400 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab a,
          dolorem nesciunt natus facere necessitatibus obcaecati perspiciatis
          voluptatem esse rerum! Quos minus odio suscipit corporis doloremque
          quas fuga. Nesciunt, quae. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Quidem quaerat ut accusantium.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          adipisci ipsam vero soluta natus recusandae sit, doloribus doloremque
          quasi libero. Quia neque sint exercitationem, similique voluptatum
          fugiat fugit voluptates quo!
        </p>
      </div>
      <div className=" w-full  me-14">
        <img
          className="max-h-[500px] absolute drop-shadow-2xl rounded-lg"
          src="/images/foto1.jpg"
          alt="foto1"
        />
        <img
          className="max-h-[300px] relative top-80 left-60 rounded-lg drop-shadow-2xl "
          src="/images/foto2.jpg"
          alt="foto2"
        />
      </div>
    </div>
  );
}

export default Home;
