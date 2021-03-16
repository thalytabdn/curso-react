# Curso React

Repositório destinado ao estudo da biblioteca reactJS.

## O que é react ?

É uma biblioteca JavaScript declarativa e open source para construção de interfaces com usuário. Permite compor UIs complexas a partir de pequenos e isolados códigos chamados "componentes".

Criando um novo projeto React:

```sh
npx create-react-app <nomeDoProjeto>
```

Para rodar o app:

```sh
npm start
```

## Componentes

Componentes permitem que a UI seja dividade em partes independentes e reutilizáveis.

O método *render* retorna a descrição do que você deseja ver na tela. Em particular, react retorna um elemento React, que é uma descrição simplificada do que renderizar.

Maneira de definir um componente usando uma função:

```javascript
function HelloWorld() {
    return <h1>Hello World</h1>;
}
```
Definir um component utilizando classe:

```javascript
class HelloWorld extends React.Component {
    render(){
        return <h1>Hello World</h1>;
    }
}
```

## Props

Um componente pode receber parâmetros, chamados *props*, e retorna uma hierarquia de elementos para exibir através do método *render*.

Torna a saída dos componentes dinâmica. Podem ter propriedades de vários tipos simples. São passadas quando o componente é utilizado.

Exemplo de utilização de props:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## State

O estado de um componente pode ser considerado como o lugar de onde os dados vem e se transformam ao longo do tempo. Componentes que têm estados devem obrigatoriamente ser uma classe. Eles podem ser alterados ao longo do tempo.

Exemplo de uso de um estado:
```javascript
class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}
```


