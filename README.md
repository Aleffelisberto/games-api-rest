# API Rest

API REST é uma interface de programação de aplicações que está em conformidade com as restrições do estilo da arquitetura REST, permitindo interação com serviços web RESTful.

## O que é API ?

Api é um conjunto de definições e protocolos usado no desenvolvimento e na integração de aplicações. Às vezes, as APIs são descritas como um contrato entre um provedor e um usuário de informações, estabelecendo o conteúdo exigido pelo consumidor (a chamada) e o conteúdo exigido pelo produtor (a resposta).
Em outras palavras, ao interagir com um computador ou sistema para recuperar informações ou executar uma função, a API ajudará a comunicar o que você quer ao sistema para que ele entenda e realize o que foi sociltado.
Pense nas APIs como um mediador entre os usuários ou clientes e os recustos ou serviços web que eles querem obter.

## REST

REST não é um protocolo ou padrão, mas sim um conjunto de restrições de arquiterura. Os desenvolvedores de API podem implementar a arquitetura REST de maneiras variadas.
Quando um cliente faz uma solicitação usando uma API RESTful, essa API transfere uma representação do estado do recurso ao solicitante ou endpoint. Essa informação é entregue via HTTP utilizando um dos vários formatos possíveis (JSON mais usado).
Lembre-se também de que os cabeçalhos e parâmetros são importantes nos métodos HTTP de uma solicitação HTTP de API RESTful porque contêm informações relevantes sobre o identificador, bem como metadados, autorização, URI, cache, cookies e outras informações da solicitação.
Para que uma API seja RESTful, ela precisa estar em conformidade com os seguintes critérios:

- Ter uma arquitetura cliente/servidor formada por clientes, servidores e recursos, com solicitações gerenciadas por HTTP;

- Estabelecer uma comunicação stateless entre cliente e servidor. Isso significa que nenhuma informação do cliente é armazenada entre solicitações GET e toda as solicitações são separadas e desconectadas;

- Armazenar dados em cache para otimizar as interações entre cliente e servidor;

- Ter uma interface uniforme entre os componentes para que as informações sejam transferidas em um formato padronizado:

  - Os recursos solicitados sejam identificáveis e estejam separados das representações enviadas ao cliente;

  - Os recursos possam ser manipulados pelo cliente por meio da representação recebida com informações suficientes para tais ações;

  - As mensagens autodescritivas retornadas ao cliente contenham informações suficientes para descrever como processá-las;

  - Hipertexto e hipermídia estão disponíveis. Isso significa que após acessar um recurso, o cliente pode usar hiperlinks para encontrar as demais ações disponíveis para ele no momento;

- Ter um sistema em camadas que organiza os tipos de servidores envolvidos na recuperação das informações solicitadas em hierarquias que o cliente não pode ver;

- Possibilitar código sob demanda (opcional): a capacidade de enviar um código executável do servidor para o cliente quando solicitado para ampliar a funcionalidade disponível ao cliente.

## Verbos HTTP REST

![Figura mostrando os verbos HTTP REST](https://www.devopsschool.com/blog/wp-content/uploads/2018/09/http-method-put-post.jpg)

## Código de status

![Figura mostrando os principais códigos de retorno](https://www.devopsschool.com/blog/wp-content/uploads/2020/04/curl-http-rest-api-request-response.jpg)

1. 1xx Informativo
2. 2xx Sucesso
3. 3xx Redirecionamento
4. 4xx Erro de cliente
5. 5xx Outros error

## Webservices

Webservices são APIs que rodam sobre o protocolo HTTP.
