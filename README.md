## Estrutura de pastas do boilerplate
Usando o conceito do atomic design, os componentes, templates e páginas tratam do menos ao maior conjunto.
Teremos **somente** 3 camadas de componentes. Isso é importante frizar pois a arquitetura desse boilerplate está desenhada para seguir esse padrão, caso contrário o codebase pode se tornar inviável.

Cada elemento tem sua função e responsabilidades, ao sair desse contexto a aplicação pode virar macarronica ou POC (prgramação orientada a cebola).

LEIA TUDO E SIGA O PADRÃO PARA NÃO CHORARMOS JUNTOS.

Esse boilerplate usa como padrão o context api, é focado para aplicações de pequeno e médio porte com poucos gerenciadores de estado globais (contexts) se pensarem em usar para aplicações maiores solicito que seja repensado XD.

#### - Components
Essa pasta ela contém  componentes reutilizáveis e são de âmbito micro, por exemplom inputs, butões, parágrafos, containers.
A ideia é deixar todos os componentes micro aqui dentro para ser utilizado pelos Templates.

Em componentes o máximo de composição que acontece é reduzir algum componete externo que requer muitas configurações ou composições para fazer moléculas por exemplo, criar um form control com ```<input/>``` ```<label/>``` e uma ```<div />``` ou criação de componentes compostos de outros componentes que se repetirão mas serão "burros".

#### - Templates
Os templates são como containers onde criamos e especificamos as regras de negócios, fazemos chamadas para API's, são componentes com fazem a composição dos componentes expostos pela pasta de COMPONENTES e a maior parte do código será escrito aqui.

#### - Pages
As pages são os componentes macro que serão compostos por templates. Serão os containers que compartilharão alguns poucos estados. Os componentes Page eles tem de zero a muito pouca lógica acontecendo dentro deles. Eles servem de delegadores de ações e estados que sejam compartilhados entre os templates únicos da Page.

**IMPORTANTE**: Não existem outras camadas além das PAGES, TEMPLATES e COMPONENTS.
Componentes são átomos/moléculas, Templates são órgãos e Components são organismos.

Por exemplo:
Uma Page é composta de um FORM e uma TABLE. A TABLE depende do retorno do form, logo a PAGE será incumbida de passar para o form o setter desse retorno para mandar para a TABLE.

                                PAGES
                                /   \
                        TEMPLATES   TEMPLATES
                        /   \         /   \
                    COMPONENTS      COMPONENTS


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

