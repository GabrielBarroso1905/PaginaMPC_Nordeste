import { Base } from '../Base';
import { GridImage } from '../../components/GridImage';
import { Home1 } from '../../components/Home1';
import { Home2 } from '../../components/Home2';
import { mockBase } from '../Base/mock';
import { GridText } from '../../components/GridText';
import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridVideo } from '../../components/GridVideo';
import { Contact } from '../../components/Contact';
import { Depoimentos } from '../../components/Depoimentos';
import { AboutUs } from '../../components/AboutUs';
import { Service } from '../../components/Service';
import { ServiceV2 } from '../../components/ServiceV2';
import { Questions } from '../../components/Questions';
import { Questions2 } from '../../components/Questions2';
import { InfoSection } from '../../components/InfoSection';
import { InfoSection2 } from '../../components/InfoSection2';
import { Features } from '../../components/Features';

export const Home = () => {


  const section = {
    title: 'Galeria',
    description: 'Breve descrição',
    grid: [
      {
        
        altText: 'Teste 1',
        srcImg: 'https://source.unsplash.com/random/800x800?r=1',
      },
      {
        altText: 'Teste 2',
        srcImg: 'https://source.unsplash.com/random/800x800?r=2',
      },
      {
        altText: 'Teste 2',
        srcImg: 'https://source.unsplash.com/random/800x800?r=3',
      },
      {
        altText: 'Teste 2',
        srcImg: 'https://source.unsplash.com/random/800x800?r=4',
      },
      {
        altText: 'Teste 2',
        srcImg: 'https://source.unsplash.com/random/800x800?r=5',
      },
      {
        altText: 'Teste 2',
        srcImg: 'assets/images/5.jpg',
      },
      // Adicione mais objetos conforme necessário
    ],
  };


  const args = {
    title: 'Grid two columns',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio magnam culpa eveniet doloribus harum? Ipsam, a necessitatibus? Sequi sunt accusantium quod, animi iure a, aliquid dolor ea vel magni dolore',
    srcImg: 'assets/images/javascript.svg',
  };

  
  const args2= {
    title: 'Como criar uma rotina de cuidados com a pele do rosto?',
    text: `Os cuidados de hoje determinam como a nossa pele será no futuro.`,
    srcImg: 'assets/images/1167bf91-96fd-4aeb-97d0-9f4f46120346.png',
    fundo:'assets/images/fundo.png',
  };
const contactData = {
  address: 'gabrielb_barroso',
  phone: '(98) 4002-8922',
  email: 'GabrielMenezes1905@gmail.com',
  instagram: 'https://www.instagram.com/gabrielb_barroso/',
  wpp: 'https://api.whatsapp.com/send?phone=559898069862&text=teste',

};
const argsServices= {
  title: 'Título customizado', // Defina os valores desejados para title e description
  title2: 'Título 3 customizado', // Defina os valores desejados para title e description
  description: 'Descrição customizada', // Defina os valores desejados para title e description

}

  const key = 'chave-unica'; // Defina uma chave única para o componente GridImage


  const argsQuestions = {
    title: 'Título customizado',
    pergunta1: 'Como o seu negócio pode impulsionar as vendas da minha empresa?',
    resposta1: 'Nossa abordagem estratégica identifica oportunidades de mercado, otimiza suas campanhas de marketing e alavanca táticas comprovadas para direcionar mais tráfego e conversões ao seu negócio.',
    
    pergunta2: 'Quais são os benefícios específicos que minha empresa pode obter ao trabalhar com vocês?',
    resposta2: 'Ao colaborar conosco, você aproveita nossa experiência em marketing digital para criar uma presença online mais forte, alcançar um público mais amplo e aumentar as taxas de conversão.',
    
    pergunta3: 'De que maneira suas estratégias podem melhorar a lucratividade da minha empresa?',
    resposta3: 'Nossas estratégias se concentram em otimizar seu funil de vendas, melhorar a experiência do usuário e maximizar a eficácia de suas campanhas, resultando em maior receita e lucros.',
    
    pergunta4: 'Como vocês adaptam suas táticas para atender às necessidades exclusivas do meu negócio?',
    resposta4: 'Nós personalizamos cada plano de marketing para atender aos seus objetivos e ao seu público-alvo específico, garantindo que suas campanhas sejam altamente relevantes e eficazes.',

  }
  return (
    <>
        <Base {...mockBase} >
        <Home1 {...args2} />
        <GridTwoColumns {...args} background />
        <Home2 {...args2}  />
        <Features/>
        <InfoSection2 sectionId = 'target1' background />
        <AboutUs background={true} />
        <GridContent background sectionId = 'target2'/>
        <InfoSection sectionId = 'target1' />
       
       
        <GridText sectionId = 'target3'/>
        <GridVideo
         const videoUrl = 'https://www.youtube.com/watch?v=HGTJBPNC-Gw'
         text="Texto que será exibido em cima do vídeo"
         sectionId="target4" // Seu valor dependerá do uso específico da prop no componente SectionBackground
         background
        />
         <Service {...argsServices} background= {false} sectionId= {'seu-id-aqui'} />
        <ServiceV2  background= {false} sectionId={"seu-id-aqui"} />
        <Depoimentos  background= {false} sectionId="target5" />
        <GridImage key={key}{...section} sectionId = 'target6' background/>
        <Questions {...argsQuestions}  sectionId= 'target7' />
        <Questions2  sectionId= 'target7' />
 
        <Contact data={contactData} sectionId = 'target8' />
        
      </Base>
    </>
  );
};

export default Home;
