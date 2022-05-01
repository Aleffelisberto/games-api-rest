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

## Autenticação usando JWT (JSON Web Token)

JWT é um padrão aberto que define um jeito compacto para transmitir informações seguramente com um objeto JSON. Essa informação pode ser verificada pois está assinada digitalmente. JWTs podem ser assinados usando um secredo ou chave pública/privada usando RSA ou ECDSA.

### Quando usar JWT ?

- Authorization: Esse é o cenário mais comum para usar JWT. Uma vez que o usuário está logado, cada requisição subsequente vai incluir a JWT, permitindo ao usuário acessar rotas, serviços, e recursos que são permitidos através desse token.

- Troca de informações: JWT é um ótimo jeito de transmitir informações seguramente.

### Qual é a estrutura do JWT ?

Tokens JWT são divididos em 3 partes separados por '.'

```
xxxxx.yyyyy.zzzzz
```

- Header: O header é tipicamente dividido em duas partes: o tipo do token, que é JWT, e a assinatura do algorítmo que é usado, como HMAC SHA256 ou RSA.

```json
{
  "alg": "RSA",
  "typ": "JWT"
}
```

- Payload: No payload, ficam as reinvidicações. Reinvidicações são estados sobre uma entidade (normalmente, o usuário) e dados adicionais.

```json
{
  "sub": "123",
  "name": "Alefsandler Felisberto",
  "admin": true
}
```

- Signature: A assinatura é usada para verificar que a mensagem não mudou durante o processo, e, no caso de tokens assinados com uma chave privada, também pode ser verificado se o par que enviou a JWT é quem diz que é.

### Motivações para uso de JWT

Comparando a SWT (Simple Web Tokens) e SAML (Security Assertion Markup Language Tokens), temos que, ao usar JSON ao invés de XML, fazemos com que o token fique mais compacto e menos verboso, além da conversão de JSON usando linguagens de programação se torna muito mais simples.

## HATEOAS

HATEOAS é um componente que faz parte da arquitetura REST, cujo objetivo é ajudar os clientes a consumirem uma API sem a necessidade de conhecimento prévio.

O acrônimo HATEOAS vem de Hypermedia As the Engine Of Application State e o termo "hypermedia" no seu nome já da uma ideia de como este componente funciona em uma aplicação RESTful. Ao ser implementado, a API passa a fornecer links que indicarão aos clientes como navegar através dos seus recursos.

Com isso, o cliente não precisa ter um conhecimento produnfo da API, basta conhecer a URL de inicial e partir dos links fornecidos poderá acessar todos os recursos de forma circular, se guiando através das requisições realizadas.

#### Exemplo simples do HATEOAS

```json
{
  "cursos": [
    {
      "id": 1,
      "nome": "C# (C Sharp)",
      "aulas": "api.treinaweb.com.br/cursos/1/aulas"
    },
    {
      "id": 2,
      "nome": "PHP",
      "aulas": "api.treinaweb.com.br/cursos/2/aulas"
    },
    {
      "id": 3,
      "nome": "Java",
      "aulas": "api.treinaweb.com.br/cursos/3/aulas"
    }
  ]
}
```

### Especififação do HATEOAS

##### RFC 5988

De acordo com essa especificação, cada link deve ter as informações:

- URI: Cada link deve conter uma URI, representada no atributo `href`;

- Tipo de relação: Descreve como a URI se relaciona com o recurso atual, representado pelo atributo `rel`.

- Atributos para URI: Para descrever melhor a URI podem ser adicionados atributos comom `hreflang`, `media`, `title` e `type`
