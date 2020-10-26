export interface IMainPageProps {
  routes: IRoute[];
}

export interface IRoute {
  path: string;
  name: string;
  Component: () => JSX.Element
}