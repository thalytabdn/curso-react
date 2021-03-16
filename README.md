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

Maneira mais simples de definir um componente:

```javascript
function HelloWorld() {
    return <h1>Hello World</h1>;
}
```

## Props e PropTypes

Um componente pode receber parâmetros, chamados *props*, e retorna uma hierarquia de elementos para exibir através do método *render*.

Torna a saída dos componentes dinâmica. Podem ter propriedades de vários tipos simples. São passadas quando o componente é utilizado.

Exemplo de utilização de props:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

## State