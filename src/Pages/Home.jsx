import React from "react";
import foto1 from "../assets/foto_home.jpg";

function Home() {
  return (
    <div className="m-10 gap-5 ">
      <div className="flex flex-col justify-center items-center gap-10 mb-10">
        <div className="w-[800px] flex ">
          <img className="drop-shadow-2xl rounded-lg" src={foto1} alt="foto1" />
        </div>
        <div className="flex justify-center content-center m-10 tracking-widest">
          <h1 className="py-5 text-2xl font-bold text-[#636566]  text-center border-r p-7 border-[#636566] ">
            Dia 21 de Outubro de 2023, <br />
            16:50
          </h1>
          <h1 className="py-5 text-2xl font-bold border-l p-7 border-[#636566] text-[#636566] text-center">
            Dr. Marco Paulo Simon Jardim, <br />
            857, salão de festas <br />
            Esporte fino
          </h1>
        </div>
        <div className="max-w-[1000px]">
          <h1 className="text-5xl mb-10">
            Bem vindos ao site de celebração de nossa união
          </h1>
          <div className="text-gray-400 text-lg">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
