# Strategy Pattern _Comportamental_

![Strategy Pattern](./img/strategyPattern.png)
> Strategy Pattern _Comportamental_

No padrão Strategy, criamos objetos que representam várias estratégias e um objeto de contexto cujo comportamento varia de acordo com seu objeto de estratégia. O objeto de estratégia muda o algoritmo de execução do objeto de contexto.<br/>

## Aplicabilidade
Segundo (GAMMA; HELM; JOHNSON; VLISSIDES), deve-se usar o padrão Strategy quando:
- Muitas classes relacionadas diferem somente no seu comportamento. As estratégias fornecem uma maneira de configurar uma classe com um dentre muitos comportamentos.
- Você necessita de variantes de um algoritmo. Por exemplo, pode definir algoritmos que refletem diferentes soluções de compromisso entre espaço/tempo. As estratégias podem ser usadas quando essas variantes são implementadas como uma hierarquia de classes de algoritmos.
- Um algoritmo usa dados dos quais os clientes não deveriam ter conhecimento. Use o padrão Strategy para evitar a exposição das estruturas de dados complexas, especificas do algoritmo.
- Uma classe define muitos comportamentos, e estes aparecem em suas operações como múltiplos comandos condicionais da linguagem. Em vez de usar muitos comandos condicionais, mova os ramos condicionais relacionados para a sua própria classe Strategy.


