# Debounce Pattern
Ao acionar uma determinada ação que esteja encapsulada pelo debounce, o código de execução é postergado até que o tempo que foi definido posteriormente no debounce acabe, só então a implementação contida no debounce é disparada.

# Aplicabilidade
Segundo Chris Coyier, esses são alguns exemplos de uso do debounce:
- Espere até que o usuário pare de redimensionar a janela
- Não dispare um evento ajax até que o usuário pare de digitar
- Meça a posição de rolagem da página e responda no máximo a cada 50ms
- Garanta um bom desempenho ao arrastar elementos em um aplicativo