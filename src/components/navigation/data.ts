export interface INavigationItem {
  path: string
  title: string
  isActive?: (string, Location) => boolean
}

export interface IExtraProps {
  isActive?: (match: any, location: any) => boolean
}

export interface IRenderItemProps {
  isActive?: (match: any, location: any) => boolean
  title: string
  path: string
}

export type NavigationItems = INavigationItem[]

export const NAVIGATION_ITEMS: NavigationItems = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/projects',
    title: 'Our projects',
    isActive: (match: string, location: Location) => Boolean(location.pathname.match(/projects/)),
  },
]