import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import * as S from './styled';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <S.Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </S.Header>
      <S.RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/19560693?s=460&u=3ec5a2586a893123703ffacf991e459da8dc9954&v=4"
            alt="André Alves Vitebo"
          />
          <div>
            <strong>vitebo/dotfiles</strong>
            <p>:wrench: Building my dotfiles</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </S.RepositoryInfo>
      <S.Issues>
        <Link to="/">
          <div>
            <strong>Teste</strong>
            <p>Teste</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </S.Issues>
    </>
  );
};

export default Repository;
