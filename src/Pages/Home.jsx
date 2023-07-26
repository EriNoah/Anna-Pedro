import React from "react";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";

function Home() {
  return (
    <div className="flex m-10 gap-5">
      <div className="max-w-[1000px] flex gap-10 mb-10">
        <div>
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
            adipisci ipsam vero soluta natus recusandae sit, doloribus
            doloremque quasi libero. Quia neque sint exercitationem, similique
            voluptatum fugiat fugit voluptates quo!
          </p>
        </div>
        <div className="w-auto me-14">
          <img
            className="max-h-[500px] absolute drop-shadow-2xl rounded-lg"
            src={foto1}
            alt="foto1"
          />
          <img
            className="max-h-[1300px] relative top-80 left-60 rounded-lg drop-shadow-2xl "
            src={foto2}
            alt="foto2"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
