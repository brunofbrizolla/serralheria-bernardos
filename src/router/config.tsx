import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ServicosPage = lazy(() => import('../pages/servicos/page'));
const SobrePage = lazy(() => import('../pages/sobre/page'));
const ContatoPage = lazy(() => import('../pages/contato/page'));
const SerralhariaPage = lazy(() => import('../pages/serralharia/page'));
const RemodelacoesPage = lazy(() => import('../pages/remodelacoes/page'));
const PinturaPage = lazy(() => import('../pages/pintura/page'));
const PladurPage = lazy(() => import('../pages/pladur/page'));
const EletricosPage = lazy(() => import('../pages/eletricos/page'));
const ManutencaoPage = lazy(() => import('../pages/manutencao/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/servicos',
    element: <ServicosPage />,
  },
  {
    path: '/sobre',
    element: <SobrePage />,
  },
  {
    path: '/contato',
    element: <ContatoPage />,
  },
  {
    path: '/serralharia',
    element: <SerralhariaPage />,
  },
  {
    path: '/remodelacoes',
    element: <RemodelacoesPage />,
  },
  {
    path: '/pintura',
    element: <PinturaPage />,
  },
  {
    path: '/pladur',
    element: <PladurPage />,
  },
  {
    path: '/eletricos',
    element: <EletricosPage />,
  },
  {
    path: '/manutencao',
    element: <ManutencaoPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;