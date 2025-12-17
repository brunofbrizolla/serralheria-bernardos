import { lazy } from 'react';
import type { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ServicosPage = lazy(() => import('../pages/servicos/page'));
const SobrePage = lazy(() => import('../pages/sobre/page'));
const ContatoPage = lazy(() => import('../pages/contato/page'));
const PladurPage = lazy(() => import('../pages/pladur/page'));
const BarramentoPage = lazy(() => import('../pages/barramento/page'));
const PinturaIndustrialPage = lazy(() => import('../pages/pintura-industrial/page'));
const PinturasGeralPage = lazy(() => import('../pages/pinturas-geral/page'));
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
    path: '/pladur',
    element: <PladurPage />,
  },
  {
    path: '/barramento',
    element: <BarramentoPage />,
  },
  {
    path: '/pintura-industrial',
    element: <PinturaIndustrialPage />,
  },
  {
    path: '/pinturas-geral',
    element: <PinturasGeralPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;