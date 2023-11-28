import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatbotApp = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Bem-vindo! Como posso ajudar?',
        createdAt: new Date(),
        user: { _id: 2, name: 'N' },
      },
    ]);
  }, []);

  const getChatbotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (
      lowerCaseMessage.includes('quais documentos') ||
      lowerCaseMessage.includes('que documento') ||
      lowerCaseMessage.includes('qual documentação')
    ) {
      return [
        {
          _id: Math.random().toString(),
          text:
            "Os documentos necessários podem variar dependendo da sua situação específica e do processo em vigor no momento em que você estiver fazendo a solicitação. No entanto, geralmente, os seguintes documentos podem ser necessários ao solicitar refúgio no Brasil:\n\n"
            + "1- Documento de Identidade:\nPassaporte, documento de identidade ou qualquer outro documento que comprove sua identidade.\n\n"
            + "2- Documentos de Viagem:\nCaso você tenha utilizado algum meio de transporte para chegar ao Brasil, é importante ter documentos relacionados a essa viagem, como passagens e vistos.\n\n"
            + "3- Documentos de Apoio à Solicitação de Refúgio:\nEvidências que corroborem sua solicitação de refúgio, como relatos pessoais, documentos de perseguição, ameaças ou qualquer outro material que ajude a fundamentar seu pedido.\n\n"
            + "4- Comprovante de Residência:\nAlguns documentos que comprovem onde você está morando no Brasil podem ser solicitados.\n\n"
            + "5- Certidão de Nascimento ou Casamento:\nDocumentos que atestem seu estado civil, como certidão de nascimento ou casamento.\n\n"
            + "6- Fotos:\nFotos recentes podem ser requeridas como parte do processo.\n\n"
            + "7- Histórico de Educação e Trabalho:\nPode ser útil fornecer informações sobre sua educação e histórico de trabalho.\n\n"
            + "Lembre-se de que as autoridades e organizações responsáveis por processar solicitações de refúgio podem solicitar documentos adicionais específicos. É sempre recomendável entrar em contato com o Conare (Comitê Nacional para os Refugiados) ou com uma organização local que trabalhe com refugiados para obter informações precisas sobre os requisitos atuais.",
          createdAt: new Date(),
          user: { _id: 2, name: 'Chatbot' },
        },
      ];
    } else if (lowerCaseMessage === 'oi' || lowerCaseMessage === 'olá') {
      return [
        {
          _id: Math.random().toString(),
          text: 'Olá, como posso te ajudar? ',
          createdAt: new Date(),
          user: { _id: 2, name: 'Chatbot' },
        },
      ];
    } else if (
      lowerCaseMessage.includes('solicitar ajuda') ||
      lowerCaseMessage.includes('ficar legal')
    ) {
      return [
        {
          _id: Math.random().toString(),
          text:
            "Se você é um refugiado no Brasil e deseja regularizar sua situação, existem passos específicos que você pode seguir. Aqui estão algumas orientações gerais, mas é importante lembrar que as políticas e procedimentos podem mudar, então é aconselhável verificar informações atualizadas com autoridades locais ou organizações especializadas em refugiados:\n\n"
            + "1- Registro no Conare (Comitê Nacional para os Refugiados):\n\n"
            + "O primeiro passo é registrar-se no Conare, que é o órgão responsável por analisar e conceder o status de refugiado no Brasil. Você pode fazer isso no escritório do Conare em sua cidade.\n\n"
            + "2- Documentação:\n"
            + "Providencie toda a documentação necessária para comprovar sua condição de refugiado. Isso pode incluir seu passaporte, documentos de identidade, documentos de viagem e qualquer outra prova que sustente sua solicitação de refúgio.\n\n"
            + "3- Entidades de Apoio:\n"
            + "Procure organizações não governamentais (ONGs) que trabalhem com refugiados no Brasil. Elas podem fornecer orientação, apoio legal e assistência prática durante o processo.\n\n"
            + "4- Advogado ou Defensor Público:\n"
            + "É aconselhável buscar a assistência de um advogado especializado em direito de refugiados. Caso você não tenha condições financeiras, pode procurar a Defensoria Pública para obter assistência jurídica gratuita.\n\n"
            + "5- Entenda Seus Direitos:\n"
            + "Familiarize-se com seus direitos como refugiado no Brasil. Isso inclui o direito ao trabalho, à educação e a outros serviços essenciais.\n\n"
            + "6- Acompanhamento do Processo:\n"
            + "Fique atento ao andamento do seu processo junto ao Conare. Isso pode envolver comparecer a entrevistas, fornecer documentos adicionais e cumprir prazos.\n\n"
            + "7- Cursos de Português e Integração:\n"
            + "Muitas vezes, o governo ou organizações oferecem cursos de língua portuguesa e programas de integração para ajudar os refugiados a se adaptarem à vida no Brasil.\n\n"
            + "Lembre-se de que as informações podem mudar, e é crucial estar atualizado sobre os procedimentos em vigor. Recomendo entrar em contato com o Conare, a Polícia Federal e organizações que trabalham com refugiados para obter informações específicas e assistência personalizada.",
          createdAt: new Date(),
          user: { _id: 2, name: 'Chatbot' },
        },
      ];
    } else if (
      lowerCaseMessage.includes('o que é conare') ||
      lowerCaseMessage.includes('conare')
    ) {
      return [
        {
          _id: Math.random().toString(),
          text:
            "O CONARE, ou Comitê Nacional para os Refugiados, é um órgão colegiado vinculado ao Ministério da Justiça do Brasil. Ele desempenha um papel crucial no processo de reconhecimento e concessão do status de refugiado a estrangeiros que solicitam proteção no país. Aqui estão algumas informações importantes sobre o CONARE:\n\n"
            + "1- Atribuições:\n"
            + "O CONARE é responsável por analisar e decidir sobre os pedidos de refúgio apresentados por estrangeiros que buscam proteção no Brasil devido a perseguição ou fundado temor de perseguição por motivos de raça, religião, nacionalidade, grupo social ou opiniões políticas.\n\n"
            + "2- Decisões sobre Refúgio:\n"
            + "Com base em entrevistas e análise de documentos, o CONARE toma decisões quanto ao reconhecimento ou rejeição do pedido de refúgio. Caso o refúgio seja concedido, o solicitante recebe a condição de refugiado no Brasil.\n\n"
            + "3- Composição:\n"
            + "O CONARE é composto por representantes de diversos órgãos governamentais, incluindo Ministério da Justiça, Ministério das Relações Exteriores, Ministério da Saúde, Polícia Federal, entre outros. Sua composição diversificada visa garantir uma análise abrangente e justa dos casos.\n\n"
            + "4- Apoio e Proteção:\n"
            + "Além de avaliar os pedidos de refúgio, o CONARE também tem a responsabilidade de coordenar ações e políticas de apoio e proteção aos refugiados no Brasil.\n\n"
            + "5- Normativas:\n"
            + "O CONARE opera de acordo com a legislação brasileira e as normativas internacionais relacionadas a refugiados. O Brasil é signatário da Convenção sobre o Estatuto dos Refugiados de 1951 e seu Protocolo de 1967.\n\n"
            + "Se você é um solicitante de refúgio no Brasil, é importante estar ciente do papel do CONARE no processo. Ao fazer a solicitação de refúgio, você passará por entrevistas e análises conduzidas por esse comitê, que decidirá sobre o seu status no país. Para informações específicas e atualizadas, é aconselhável entrar em contato diretamente com o CONARE ou buscar assistência junto a organizações especializadas em refúgio no Brasil.",
          createdAt: new Date(),
          user: { _id: 2, name: 'Chatbot' },
        },
      ];
    } else if (
      lowerCaseMessage.includes('quais são meus direitos') ||
      lowerCaseMessage.includes('meus direitos como refugiado')
    ) {
      return [
        {
          _id: Math.random().toString(),
          text:
            "Como refugiado no Brasil, você possui diversos direitos garantidos por leis nacionais e normas internacionais. É importante estar ciente desses direitos para garantir sua proteção e integração. Aqui estão alguns dos principais direitos de refugiados no Brasil:\n\n"
            + "1- Direito ao Status de Refugiado:\nSe o CONARE (Comitê Nacional para os Refugiados) conceder o status de refugiado, você tem o direito de viver no Brasil e receber proteção contra deportação para o país de origem.\n\n"
            + "2- Liberdade de Locomoção:\nComo refugiado, você tem o direito de se movimentar livremente dentro do território brasileiro.\n\n"
            + "3- Direito ao Trabalho:\nRefugiados têm o direito de buscar emprego no Brasil. Isso inclui a possibilidade de se registrar no Cadastro de Pessoas Físicas (CPF) e contribuir para a previdência social.\n\n"
            + "4- Acesso à Educação:\nRefugiados têm o direito de acessar o sistema educacional brasileiro, desde a educação básica até o ensino superior.\n\n"
            + "5- Acesso ao Sistema de Saúde:\nVocê tem direito ao acesso aos serviços de saúde oferecidos pelo Sistema Único de Saúde (SUS) no Brasil.\n\n"
            + "6- Reagrupamento Familiar:\nSe você é reconhecido como refugiado, tem o direito de solicitar o reagrupamento familiar, possibilitando a reunificação com membros da sua família.\n\n"
            + "7- Documentação Legal:\nRefugiados têm o direito de obter documentos legais, como a Carteira de Registro Nacional Migratório (CRNM), que é um documento de identificação para estrangeiros no Brasil.\n\n"
            + "8- Liberdade de Religião:\nRefugiados têm o direito de praticar sua religião livremente, de acordo com a legislação brasileira que garante a liberdade religiosa.\n\n"
            + "9- Proteção Contra Discriminação:\nRefugiados têm o direito de serem protegidos contra qualquer forma de discriminação com base na sua condição de refugiado.\n\n"
            + "10- Assistência Jurídica Gratuita:\nRefugiados têm o direito de acesso à assistência jurídica gratuita, o que pode incluir serviços fornecidos por organizações não governamentais ou defensores públicos.\n\n"
            + "É importante ressaltar que os direitos dos refugiados podem ser atualizados ou modificados, então é aconselhável manter-se informado sobre a legislação em vigor e buscar orientação junto a organizações especializadas em refúgio no Brasil. Essas organizações podem fornecer assistência específica e informações atualizadas sobre seus direitos e responsabilidades como refugiado.",
          createdAt: new Date(),
          user: { _id: 2, name: 'Chatbot' },
        },
      ];
    } else if (
      lowerCaseMessage.includes('o que é sus') ||
      lowerCaseMessage.includes('o que é o sus')
    ) {
      return [
        {
          _id: Math.random().toString(),
          text:
            "O SUS, Sistema Único de Saúde, é o sistema público de saúde do Brasil. Ele foi criado pela Constituição Federal de 1988 e está regulamentado pela Lei Orgânica da Saúde (Lei nº 8.080/1990) e pela Lei nº 8.142/1990. O SUS é uma iniciativa do governo brasileiro que tem como objetivo garantir o acesso integral, universal e gratuito à saúde para todos os cidadãos brasileiros.\n\n"
            + "Principais características do SUS:\n\n"
            + "1- Universalidade:\nO SUS visa atender a toda a população, sem discriminação ou restrição, proporcionando acesso aos serviços de saúde a todos os brasileiros.\n\n"
            + "2- Integralidade:\nO sistema busca oferecer uma gama completa de serviços de saúde, abrangendo desde a prevenção até o tratamento e reabilitação, de forma integrada.\n\n"
            + "3- Equidade:\nO SUS busca reduzir as desigualdades na prestação de serviços de saúde, priorizando aqueles que mais necessitam.\n\n"
            + "4- Participação Social:\nA participação da comunidade na gestão do SUS é incentivada, visando promover uma maior integração entre a população e os serviços de saúde.\n\n"
            + "5- Descentralização:\nA gestão do SUS é descentralizada, ou seja, ocorre em diferentes esferas do governo (municipal, estadual e federal), garantindo uma maior autonomia na administração dos serviços de saúde.\n\n"
            + "O SUS oferece uma ampla variedade de serviços, incluindo consultas médicas, exames, internações hospitalares, vacinação, programas de prevenção, tratamento de doenças crônicas, entre outros.\n\n"
            + "Os estrangeiros, incluindo refugiados, têm o direito de acessar os serviços do SUS de forma gratuita, contribuindo assim para a universalidade do sistema de saúde no Brasil. A Carteira de Registro Nacional Migratório (CRNM) pode ser solicitada para facilitar o acesso aos serviços de saúde no país.                                             jkj vhgjhghgbm ehunjke frhgbng hyggkhff ffffv fggud yyh",
          createdAt: new Date(),
          user: { _id: 2, name: 'Chatbot' },
        },
      ];

    } else {
      return [
        {
          _id: Math.random().toString(),
          text: `Desculpe, não entendi. Pode reformular sua pergunta?`,
          createdAt: new Date(),
          user: { _id: 2, name: 'Chatbot' },
        },
      ];
    }
  };

  const onSend = (newMessages = []) => {
    const userMessage = newMessages[0].text;

    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, newMessages)
    );

    const chatbotResponse = getChatbotResponse(userMessage);

    setMessages((prevMessages) =>
      GiftedChat.append(prevMessages, chatbotResponse)
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => onSend(newMessages)}
      user={{ _id: 1, name: 'Usuário' }}
    />
  );
};

export default ChatbotApp;
