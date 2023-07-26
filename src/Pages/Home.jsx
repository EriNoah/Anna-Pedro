import React from "react";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";

function Home() {
  return (
    <div className="m-10 gap-5 container">
      <div className="flex flex-col justify-center items-center gap-10 mb-10">
        <div className="w-auto flex me-14">
          <img
            className="max-h-[500px]  drop-shadow-2xl rounded-lg"
            src={foto1}
            alt="foto1"
          />
          <img
            className="max-h-[300px]  top-80 left-60 rounded-lg drop-shadow-2xl "
            src={foto2}
            alt="foto2"
          />
        </div>
        <div className="flex justify-center content-center m-10">
          <h1 className="py-5 text-2xl font-bold text-[#636566]  text-center border-r p-7 border-[#636566] ">
            Dia 21 de outubro de 2023, <br />
            16:50
          </h1>
          <h1 className="py-5 text-2xl font-bold border-l p-7 border-[#636566] text-[#636566] text-center">
            Dr. Marco Paulo Simon Jardim, <br />
            857, salão de festas <br />
            Esporte fino
          </h1>
        </div>
        <div>
          <h1 className="text-5xl mb-10">
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
      </div>
    </div>
  );
}

export default Home;
