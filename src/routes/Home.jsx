import '../SASS/Home.scss'

export default function Home(){
    return(
        <>
        <main>
            <div className='parte_esquerda'>  

                <section className="sessao_imagem"> 
                    <img src="src\assets\img1.png" alt="Imagem começo" />
                </section>

                <section className="apresentacao">
                    <div className="bloco_apresentacao"> 
                        <h1> Oque é AOS(Apneia Obstrutiva do Sono) </h1>

                        <div className="texto">
                            <p> A apnéia obstrutiva do sono (AOS) é uma condição em que a respiração é interrompida durante o sono devido ao colapso das vias aéreas superiores. A AOS pode ser grave e, em casos mais extremos, existe risco de morte por parada cardiorrespiratória, sendo mais comum em pessoas com doenças obstrutivas de vias aéreas superiores e pessoas com obesidade. A incidência de eventos cardiovasculares, como infarto agudo do miocárdio e acidente vascular cerebral, é elevada em pacientes com AOS. Quanto maior a gravidade da AOS, maior é o risco de mortalidade, principalmente para indivíduos com índice de apnéia-hipopneia (IAH) acima de 30 eventos por hora. </p>
                            
                        </div>
                    </div>

                    <button> Mais informações </button>
                </section>
            </div> 

            <div className="parte_direita">

                <section className="explicacao"> 

                    <div className="bloco1"> 
                        <h2> Nosso Alarme </h2>
                        <p> desenvolvemos um sistema onde um oxímetro, aparelho responsável por medir a saturação (medida que indica a quantidade de oxigênio presente no sangue). Caso a saturação da pessoa afetada caia a níveis perigosos, iniciará um alarme (no aparelho e no contato de emergência escolhido pelo usuário) visando acordá-la, com interrupção do perigo imediato de uma morte súbita ou um evento cardiovascular mais grave durante o sono. Os dados adquiridos pelo aparelho irão para uma base de dados que o médico terá acesso a partir do código no aparelho do seu paciente, assim otimizando o tratamento do mesmo..</p>
                    </div>

                    

                    <div className="bloco3"> 
                        <h2> Funcionamento </h2>
                        <p> Para materializar essa ideia, decidimos iniciar o desenvolvimento do sistema, que será ligado ao usuário e conta com os seguintes componentes: 

Um sensor de oximetria/frequência cardíaca 

Um alarme sonoro 

Um microcontrolador com conexão Wi-Fi (utilizamos um ESP32 para a simulação) 

 

O sensor de oximetria será responsável por enviar informações via Wi-Fi para o servidor onde será construída a base de dados. Além disso, o sensor de oximetria também será responsável por acionar o alarme em casos críticos. Não apenas o alarme será ativado durante uma situação de alto risco do usuário, mas também o alarme nos números de emergência cadastrados no aparelho.  </p>
                    </div>

                </section>
            </div>

            <h2> Por que usufruir do nosso Alarme </h2>

        </main>

        <section className="vantagens">      

            <div className="parte2">
                <img src="src\assets\tarefa.png" alt="icone2" />

                <div className="parte2_texto">
                    <h4> Ajuda a manter uma base de dados </h4>
                    <p> Mantem uma base de dados que pode ser utilizada pelos medicos para melhorar o nivel do tratamento dos pacientes afetados pela AOS. </p>
                </div>
                
            </div>

            <div className="parte3">
                <img src="src\assets\tarefa.png" alt="icone3" />

                <div className="parte3_texto">
                    <h4> Diminui risco de vida e complicaçoes mais serias </h4>
                    <p> Utilizando nosso produto, pessoas que antes tinham grandes chances de terem crises de AOS e não tinham condição de fazer um tratamento agora podem se sentir mias seguras. </p>
                </div>
                
            </div>
        </section>
        </>
    )
}