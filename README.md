<p align="center"> <img src="https://imgur.com/mIBmcEL.png" alt="Javascript: validando formulários"> </p>

<hr>

<p align="center"> <img src="https://github.com/MonicaHillman/aluraplay-requisicoes/blob/main/img/logo.png" alt="Logo da Alura"> </p>
<p align="center">Formulário de criação de contas para o banco virtual MoniBank.</p>

## Tecnologias utilizadas durante o curso
* JavaScript

## Tecnologias utilizadas no projeto
* HTML
* CSS


## Conteúdo
01 - Validando o HTML:

tipos de input/ min-length e max-length / required;

Definir tipos para campos de digitação;

Limitar a quantidade de caracteres em um elemento input;

Controlar a quantidade mínima de caracteres do input;

Transformar um campo em obrigatório.

02 - Validando com JS:

Utilizar patterns;

Criar expressões regulares;

Selecionar vários elementos ao mesmo tempo;

Construir funções para cada elemento de uma lista;

Detectar eventos do usuário;

Importar funções de outros arquivos;

Verificar CPFs com números repetidos.

03 -Desenvolvendo Validações:

Validar os dígitos verificadores do CPF;

Transformar fórmulas matemáticas em código;

Lidar com datas em JavaScript;

Construir comparações de datas para verificar maioridade.


## Para saber mais:

Para saber mais: lidando com inputs

Durante essa aula lidamos com alguns tipos de input. É importante entender a função deles e de outros existentes:

![image](https://user-images.githubusercontent.com/104031152/223828858-fb8c175f-d1e4-4f9a-85bc-2b791a0a99ac.png)

Além disso, você pode aprender mais sobre lidar com dados do usuário no artigo “Recebendo dados de usuário na Web com inputs - https://www.alura.com.br/artigos/recebendo-dados-usuario-na-web-com-inputs” do instrutor Luan Alves.

Para saber mais: digito verificador

Quando estamos construindo um sistema que requer a criação de contas como o MoniBank, devemos validar os dados em que há essa possibilidade. Usando JavaScript nativamente, sem o uso de bibliotecas, iremos precisar fazer algumas validações manualmente, como a validação do CPF.

Vamos atuar em cima de um CPF base que será: 451.055.040-54. A fórmula do cálculo dos ultimos digitos verificadores de um CPF é dividida em:

Primeiro dígito
Para descobrir o primeiro dígito você precisará recolher os 9 primeiros dígitos do CPF e multiplicar por números de 10 a 2, sequencialmente.

![image](https://user-images.githubusercontent.com/104031152/223851519-97bc729b-5d89-4d1a-9c70-c1ccc049030c.png)

Depois, precisamos somar todos os valores gerados nas multiplicações entre eles. Nesse caso, a soma resultou em 160. Em seguida, será necessário multiplicar essa soma por 10, que gerou o número 1600. Por fim, devemos considerar o módulo da divisão desse número com 11: 5.

Antes de decidirmos que esse é o primeiro dígito verificador, precisamos testar uma condição: Se o resultado for 10 ou 11, precisaremos zera-lo. Como não é o caso, podemos confirmar que 5 realmente é o primeiro dígito verificador do CPF base.

Segundo dígito
Para descobrir o segundo dígito você precisará recolher os 10 primeiros dígitos do CPF e multiplicar por números de 11 a 2, sequencialmente.

![image](https://user-images.githubusercontent.com/104031152/223851635-5e8d4186-5929-41c3-a5a1-4a08861757da.png)

Em seguida, será necessário somar todos os valores resultados pela multiplicação novamente, e essa soma resultou em 194. Depois, multiplicamos essa soma por 10, para encontrar o valor 1940. Ao final, chegamos na etapa de encontrar o módulo da divisão por 11: o número 4.

Novamente, precisamos verificar para caso o resultado for 10 ou 11, será necessário zera-lo. Como novamente não foi o caso, o número 4 realmente é o segundo dígito verificador do CPF base.

Para Saber Mais: localStorage e DOM

Durante o projeto selecionamos elementos do HTML para pegar seus valores, para criar novas validações, para inserir textos, entre outros casos. Para conseguir realizar essas ações, estamos interagindo com o Document Object Model (DOM). Isso é algo que abordamos em vários projetos mas temos um curso em específico pra te ajudar nesse assunto: JavaScript: manipulando o DOM -> https://cursos.alura.com.br/course/javascript-manipulando-dom, não deixe de dar uma passadinha por lá.

Para armazenamento dos dados do formulário foi utilizado o localStorage. O objeto localStorage permite salvar pares de chave/valor no navegador sem data de expiração, ou seja, os dados não são excluídos quando o navegador é fechado e ficam disponíveis para navegação futura. Você pode se aprofundar mais no assunto com o treinamento JavaScript na Web: armazenando dados no navegador do instrutor Pedro Marins -> https://cursos.alura.com.br/course/javascript-web-armazenando-dados-navegador e com o artigo "Armazenadores de dados do navegador" do Luan Alves -> https://www.alura.com.br/artigos/armazenadores-de-dados-do-navegador?utm_source=gnarus&utm_medium=timeline.




