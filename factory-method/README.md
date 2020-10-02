# Factory Method _Criacional_

![FactoryMethod](./img/facotryMethod.png)
> Factory Method _Criacional_

O padrão de fábrica é um padrão de criação que não exige o uso de um construtor, mas fornece uma interface genérica para a criação de objetos. Este padrão pode ser muito útil quando o processo de criação é complexo. - Gergely Nemeth<br/>
Fornece um método estático encapsulado em uma classe chamada fábrica, a fim de ocultar a lógica de implementação e fazer com que o código do cliente se concentre no uso em vez da inicialização de novos objetos. - Osmani<br/>

## Quando usar o padrão de fábrica
Segundo Osmani (2017), o padrão de fábrica pode ser especialmente útil quando aplicado às seguintes situações:
- Quando nosso objeto ou configuração de componente envolve um alto nível de complexidade
- Quando precisamos gerar facilmente diferentes instâncias de objetos, dependendo do ambiente em que estamos
- Quando estamos trabalhando com muitos pequenos objetos ou componentes que compartilham as mesmas propriedades
- Ao compor objetos com instâncias de outros objetos que precisam apenas satisfazer um contrato de API (também conhecido como, digitação de pato) para funcionar. Isso é útil para desacoplamento.

## Quando não usar o padrão de fábrica
Segundo Osmani (2017), quando aplicado ao tipo errado de problema, esse padrão pode introduzir uma complexidade desnecessariamente grande em um aplicativo. A menos que fornecer uma interface para a criação de objetos seja um objetivo de design para a biblioteca ou estrutura que estamos escrevendo, eu sugeriria que nos limitemos a construtores explícitos para evitar sobrecarga desnecessária.
Devido ao fato de que o processo de criação de objeto é efetivamente abstraído por trás de uma interface, isso também pode introduzir problemas com o teste de unidade, dependendo de quão complexo esse processo pode ser.
