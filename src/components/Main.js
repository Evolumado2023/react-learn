import React from "react";

const Main = () =>{
    return (

        <main>
            <h2>Aqui é a parte principal do sistema. É aqui que vai todo os conteúdo</h2>
            <p>
            Os componentes React podem ter estado (state) configurando this.state em seus construtores. this.state deve ser considerado como privado para o componente React que o definiu. 
            Vamos armazenar o valor atual do Square em this.state e alterá-lo quando o Square for clicado.
            </p>
        </main>
    );
}

export default Main;