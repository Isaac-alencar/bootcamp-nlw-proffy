<h1 align="center">Bootcamp Next Level Week</h1>

<strong align="center">O bootcamp que promete te levar ao próximo nível (em uma semana).</strong>

![logo nlw](https://pwa-commerce-uploads-image.s3.us-east-2.amazonaws.com/1+-+NLW+%2302+-+1400x900.jpg)

# Sobre o projeto

Nessa segunda edição da Next Level Week, tive a oportunidade de desenvolver  
uma aplicação que engloba o back-end, front-end e mobile. É sem dúvidas uma  
experiência sensacional que permite muitos conhecimentos novos dentro da stack  
escolhida para o projeto(React, Node, Reac-Native), como para programação no geral.

O projeto dessa edição é uma plataforma de estudos online, que conecta professo-  
res que desejam dar aulas, a jovens estudantes bucando apoio. Esse repositório  
é a versão web do projeto.

# Resultado Final

## Landing page

![landingpage](https://pwa-commerce-uploads-image.s3.us-east-2.amazonaws.com/proffy-landingpage.png)

# Demo

![](https://pwa-commerce-uploads-image.s3.us-east-2.amazonaws.com/proffy-demo.gif)

# TypeScript com React.js

O React.js é uma biblioteca de criação de interfaces com javascript. Há alg-  
um tempo, o TypeScript vêm ganhando mais e mais espaço. E com ferramentas de Des  
envolvimento como Visual Studio Code, fica mais nítido o motivo de ganhar tanto  
apoio da comunidade. Nesse projeto foi utilizado um dos templates disponíveis  
pelo 'create react app'.

para utilizá-lo, basta ter instalado em sua máquina:

- Node;
- Yarn ou npm(default do node);
- create-react-app instalado

Depois dessas ferramentas instaladas:

`Yarn create react-app myapp --template typescript`

#### ou

`npx create-react-app my-app --template typescript`

# Propriedades dos Componentes

Propriedades no React são nada mais nada menos que atributos passados nas tags  
JSX(javascript + XML). Esse é um dos conceitos mais importantes de React.js. É  
uma das formas mais comuns de se passar informações de um componente para o ou-  
tro.

Com TypeScript isso fica ainda mais divertido e interessante. Ao conseguirmos  
integrar as tipagens da linguagem e definir como queremos receber determinada  
informação em um componente.

Ex :

```tsx

/**
 * Com a interface podemos criar um contrato com o nosso código, informando
 * que ao tipar algo com esta interface, devemos seguir o modelo de dados
 * que foi definido nela.
*/
interface CardProps = {
  title: string,
  paragraph: string;
}

/**
 * O simples fato de incluírmos as props no componente funcional React
 * com 'React.FC<CardProps>, já informa que devemos receber nas proprie-
 * desse elemento: title e paragraph, no formato especificado.
*/
const CardParent: React.FC<CardProps> = ({ title, paragraph }) => {
  return (
    <Card>
      <h1>{title}</h1>
      <p>{paragraph}
    </Card>
  )
}
```

E então ao usar o componente criado acima, devemos fazer o seguite:

```tsx
//se você testar isso no seu editor de código, e não passar as props adequadas
//você verá o erro de que é necessário informar as propriedade ao elemento.
const CardChildren: React.FC = () => {
  return (
    <SomeContainerELement>
      <Card title="Hello World" paragraph="Some long, long paragraph" />
    </SomeContainerELement>
  );
};
```

# Componentização em aplicações React.js

Esse é um asusnto que gera muita dúvida, principalmente com quem não estuda  
React a tanto tempo. Mas, afinal, quando devo criar um novo componente ?

Bom, o React é uma biblioteca para criação de interfaces. Portanto, acredito  
que o primeiro passo é pensar em que componentes da sua aplicação serão prova-  
velmente reutilizados em outras partes, esse é o primeiro indício que deve-se  
criar um novo componente.

A seguir, um componente deve ser responsável por a-  
penas uma função(você quem dirá qual), se o componente está fazendo além do  
que devia, é sempre bom tentar refotar o código e encontrar uma maneira de dei-  
á-lo mais o simples possível, fazendo somente o seu dever.

No código do repositório você poderá entender melhor como podemos componentizar  
nosso código.
