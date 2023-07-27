import "./historia.css";
import foto1 from "../assets/nossa_historia_1.jpg";
import foto2 from "../assets/nossa_historia_2.jpg";
import foto3 from "../assets/nossa_historia_3.jpg";

function Historia() {
  return (
    <>
      <div className="div">
        <p className="flex p gap-5">
          Nos conhecemos nos primeiros dias de aula do curso de Filosofia e
          poucos dias depois já estávamos dividindo os detalhes de nossas vidas,
          aos pouquinhos, começamos a nos integrar às famílias um do outro e a
          dividir também as histórias, até parecer que sempre estivemos ali.
          Acreditamos nisso, que nosso laço sempre existiu e que nosso encontro
          se estende de outras vivências para além do que já vivemos nesse plano
          e do que podemos imaginar viver daqui pra frente. Aquele amor que nos
          incendiou, há seis anos atrás, hoje resulta em nosso casamento.
          <img
            className="max-h-[250px] drop-shadow-2xl rounded-lg"
            src={foto1}
            alt="foto1"
          />
        </p>
        <p className="flex gap-5 justify-center p ">
          <img
            className="max-w-[200px] drop-shadow-2xl rounded-lg"
            src={foto2}
            alt="foto2"
          />
          <div className="self-center">
            Vivemos bons momentos, outros nem tão bons assim, viajamos,
            trabalhamos, estudamos, planejamos, mudamos e aproveitamos muito
            cada segundo juntos. Já nos afastamos e nos reencontramos, ainda
            mais fortalecidos e decididos a compartilhar os caminhos; a cada
            perrengue nos fizemos mais sólidos, unidos e parceiros. <br />
            <br />
            Nossa vida a dois se fez e se faz com muito empenho e diálogo, que
            se tornaram os pilares da nossa relação, aprendemos a dialogar e a
            compreender, nosso amor foi espontâneo, mas é também aprendido e
            construído no dia a dia. Fomos aprendendo um com o outro a lidar com
            as dificuldades que atravessamos e a aproveitar as conquistas em
            nosso caminho, que são muitas, a começar pelos amores que somamos ao
            nosso amor, as pessoas que nos cercam, família e amigos que torcem
            por nós e que participam diretamente do nosso crescimento, sem elas
            esse momento não seria possível.
          </div>
        </p>

        <p className="flex gap-5 justify-center p">
          <div className="self-center text-xl tracking-wider">
            Estamos extremamente felizes e emocionados por dividir esse momento
            com vocês, obrigado por ter chegado até aqui com a gente!
          </div>
          <img
            className="max-w-[200px] drop-shadow-2xl rounded-lg"
            src={foto3}
            alt="foto3"
          />
        </p>
      </div>
    </>
    // <div className="flex m-10 gap-5">
    //   <div className="max-w-[1000px] flex gap-10 mb-10">
    //     <div>
    //       <h1 className="text-6xl mb-10">Nossa História</h1>
    //       <p className="text-gray-400 text-lg">
    //         Nos conhecemos nos primeiros dias de aula do curso de Filosofia e
    //         poucos dias depois já estávamos dividindo os detalhes de nossas
    //         vidas, aos pouquinhos, começamos a nos integrar às famílias um do
    //         outro e a dividir também as histórias, até parecer que sempre
    //         estivemos ali. Acreditamos nisso, que nosso laço sempre existiu e
    //         que nosso encontro se estende de outras vivências para além do que
    //         já vivemos nesse plano e do que podemos imaginar viver daqui pra
    //         frente. Aquele amor que nos incendiou, há seis anos atrás, hoje
    //         resulta em nosso casamento.
    //       </p>
    //       <p className="text-gray-400 text-lg mt-5">
    //         Vivemos bons momentos, outros nem tão bons assim, viajamos,
    //         trabalhamos, estudamos, planejamos, mudamos e aproveitamos muito
    //         cada segundo juntos. Já nos afastamos e nos reencontramos, ainda
    //         mais fortalecidos e decididos a compartilhar os caminhos; a cada
    //         perrengue nos fizemos mais sólidos, unidos e parceiros.
    //       </p>
    //       <p className="text-gray-400 text-lg mt-5">
    //         Nossa vida a dois se fez e se faz com muito empenho e diálogo, que
    //         se tornaram os pilares da nossa relação, aprendemos a dialogar e a
    //         compreender, nosso amor foi espontâneo, mas é também aprendido e
    //         construído no dia a dia. Fomos aprendendo um com o outro a lidar com
    //         as dificuldades que atravessamos e a aproveitar as conquistas em
    //         nosso caminho, que são muitas, a começar pelos amores que somamos ao
    //         nosso amor, as pessoas que nos cercam, família e amigos que torcem
    //         por nós e que participam diretamente do nosso crescimento, sem elas
    //         esse momento não seria possível.
    //       </p>
    //       <p className="text-gray-400 text-lg mt-5">
    //         Estamos extremamente felizes e emocionados por dividir esse momento
    //         com vocês, obrigado por ter chegado até aqui com a gente!
    //       </p>
    //     </div>
    //     <div className=" w-auto  me-14">
    //       <img
    //         className="max-h-[500px] absolute drop-shadow-2xl rounded-lg"
    //         src={foto1}
    //         alt="foto1"
    //       />
    //       <img
    //         className="max-h-[2300px] relative top-80 left-60 rounded-lg drop-shadow-2xl"
    //         src={foto2}
    //         alt="foto2"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Historia;
