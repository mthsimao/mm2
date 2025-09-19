import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 dark:text-white flex flex-col min-h-screen">
      {/* Conteúdo principal */}
      <main className="flex-grow py-8">
        <div className="max-w-[730px] mx-auto flex flex-col items-center gap-6 text-xl p-4">
          <h2 className="text-2xl font-bold text-center">Oii!</h2>

          <p>
            Espero que goste desse textinho que fiz para você, leia com carinho!
          </p>

          <p>
            Amo você e todos os momentos que tivemos/temos/teremos juntos, você
            é uma pessoa muito muito especial pra mim. Quando eu estou ao seu
            lado eu me sinto amado, me sinto cuidado, e claramente, me sinto
            muito feliz. Acho q deu pra percerber desde que a gente começou a se
            relacionar mais intimamente que eu me tornei alguém mais feliz..
          </p>

          <p>
            Eu não quero ser a loucura da sua vida, eu não quero ser o caos, não
            quero bagunçar nada e nem desorganizar, eu só quero ser o colo que
            vai fazer você esquecer por alguns minutos o seu dia díficil no
            trabalho. Eu quero ser o cafuné que vai fazer você dormir no meu
            ombro, quero ser a pessoa que vai te fazer esquecer um pouco dos
            seus problemas quando nós estivermos juntos. Quero ser pra você a
            calmaria que você precisa para dar uma relaxada.
          </p>

          <p>
            Quero ser o seu porto seguro, quero te dar ouvidos quando voce só
            quiser reclamar mesmo sem pedir conselho nem dica; Não quero ser a
            solução mágica para todos os seus problemas, quero ser apenas uma
            ilha de paz e carinho para você em todo o caos que acontece na sua
            vida.
          </p>

          <p>
            Na sua vida, quero entrar sem fazer bagunças, quero ficar com você
            sem loucuras, sem caos, sem confusão, sem nada disso, só estar lá,
            te admirando, observando cada detalhe seu...
          </p>

          <p>
            Quem ia ser idiota de levar caos e loucura para uma pessoa como
            você? Eu não. Pra você eu só quero ser o colo, o carinho, os beijos,
            os abraços, paz e o cuidado que você precisa em meio ao caos que
            vivemos diariamente.
          </p>

          <p>
            Além de te amar, eu te admiro, você faz meus dias melhores, você
            consegue colocar um sorriso no meu rosto mesmo estando longe, e cada
            dia que passa, eu fico mais ansioso pra chegar ao fim de semana e te
            ver, ficar junto com você. Eu agradeço todos os dias por ter você em
            minha vida, e pode ter certeza, que se eu tivesse outras vidas, eu
            te escolheria em todas elas.
          </p>
        </div>
      </main>

      {/* Footer sempre no final */}
      <Footer />
    </div>
  );
};

export default HomePage;
