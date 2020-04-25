import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import * as S from './styled';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <S.Title>Explore Repositórios no Github</S.Title>
    <S.Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </S.Form>
    <S.Repositories>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/19560693?s=460&u=3ec5a2586a893123703ffacf991e459da8dc9954&v=4"
          alt="André Alves Vitebo"
        />
        <div>
          <strong>vitebo/dotfiles</strong>
          <p>:wrench: Building my dotfiles</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/19560693?s=460&u=3ec5a2586a893123703ffacf991e459da8dc9954&v=4"
          alt="André Alves Vitebo"
        />
        <div>
          <strong>vitebo/dotfiles</strong>
          <p>:wrench: Building my dotfiles</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/19560693?s=460&u=3ec5a2586a893123703ffacf991e459da8dc9954&v=4"
          alt="André Alves Vitebo"
        />
        <div>
          <strong>vitebo/dotfiles</strong>
          <p>:wrench: Building my dotfiles</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/19560693?s=460&u=3ec5a2586a893123703ffacf991e459da8dc9954&v=4"
          alt="André Alves Vitebo"
        />
        <div>
          <strong>vitebo/dotfiles</strong>
          <p>:wrench: Building my dotfiles</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </S.Repositories>
  </>
);

export default Dashboard;
