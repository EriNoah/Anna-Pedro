import React from "react";

function Historia() {
  return (
    <div className="flex m-10 gap-5">
      <div className="max-w-[1000px]">
        <h1 className="text-6xl mb-10">
          Nossa História
        </h1>
        <p className="text-gray-400 text-lg">
          Nos conhecemos nos primeiros dias de aula do curso de Filosofia e poucos dias depois já estávamos dividindo os detalhes de nossas vidas, aos pouquinhos, começamos a nos integrar às famílias um do outro e a dividir também as histórias, até parecer que sempre estivemos ali. Acreditamos nisso, que nosso laço sempre existiu e que nosso encontro se estende de outras vivências para além do que já vivemos nesse plano e do que podemos imaginar viver daqui pra frente. Aquele amor que nos incendiou, há seis anos atrás, hoje resulta em nosso casamento. 
        </p>
        <p className="text-gray-400 text-lg mt-5">
          Vivemos bons momentos, outros nem tão bons assim, viajamos, trabalhamos, estudamos, planejamos, mudamos e aproveitamos muito cada segundo juntos. Já nos afastamos e nos reencontramos, ainda mais fortalecidos e decididos a compartilhar os caminhos; a cada perrengue nos fizemos mais sólidos, unidos e parceiros.
        </p>
        <p className="text-gray-400 text-lg mt-5">
          Nossa vida a dois se fez e se faz com muito empenho e diálogo, que se tornaram os pilares da nossa relação, aprendemos a dialogar e a compreender, nosso amor foi espontâneo, mas é também aprendido e construído no dia a dia. Fomos aprendendo um com o outro a lidar com as dificuldades que atravessamos e a aproveitar as conquistas em nosso caminho, que são muitas, a começar pelos amores que somamos ao nosso amor, as pessoas que nos cercam, família e amigos que torcem por nós e que participam diretamente do nosso crescimento, sem elas esse momento não seria possível. 
        </p>
        <p className="text-gray-400 text-lg mt-5">
          Estamos extremamente felizes e emocionados por dividir esse momento com vocês, obrigado por ter chegado até aqui com a gente!
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

export default Historia;
