import { paths } from '@/routes/paths'

export interface MenuItemTypes {
  key: string
  label: string
  isTitle?: boolean
  icon?: string
  url?: string
  badge?: {
    variant: string
    text: string
  }
  parentKey?: string
  target?: string
  children?: MenuItemTypes[]
  isBottom?: boolean
  isInternal?: boolean
}

const MENU_ITEMS: MenuItemTypes[] = [
  // {
  //   key: 'principal',
  //   label: 'Principal',
  //   isTitle: true
  // },
  {
    key: 'indicators',
    label: 'Indicadores',
    isTitle: false,
    icon: 'ri-line-chart-line',
    url: paths.dashboard,
    isBottom: false,
    isInternal: false
  },
  {
    key: 'profile',
    label: 'Meu Perfil',
    isTitle: false,
    icon: 'ri-file-user-line',
    url: paths.account.profile,
    isBottom: false,
    isInternal: false
  },
  {
    key: 'registry',
    label: 'Meu Ponto',
    isTitle: false,
    icon: 'ri-alarm-line',
    url: paths.employee.list,
    isBottom: false,
    isInternal: false
  },
  {
    key: 'tickets',
    label: 'Solicitações',
    isTitle: false,
    icon: 'ri-chat-3-line',
    url: paths.employee.list,
    isBottom: false,
    isInternal: false
  },
  {
    key: 'points',
    label: 'Controle de ponto',
    isTitle: false,
    icon: 'ri-fingerprint-line',
    url: paths.employee.list,
    isBottom: false,
    isInternal: false
  },
  {
    key: 'reports',
    label: 'Relatórios',
    isTitle: false,
    icon: 'ri-numbers-line',
    url: paths.employee.list,
    isBottom: false,
    isInternal: false
  },
  // {
  //   key: 'dashboard',
  //   label: 'Dashboards',
  //   isTitle: false,
  //   icon: 'ri-home-4-line',
  //   badge: {
  //     variant: 'bg-success rounded-full',
  //     text: '2'
  //   },
  //   children: [
  //     {
  //       key: 'dashboard-analytics',
  //       label: 'Analytics',
  //       url: '/analytics',
  //       parentKey: 'dashboard'
  //     },
  //     {
  //       key: 'dashboard-ecommerce',
  //       label: 'Ecommerce',
  //       url: '/ecommerce',
  //       parentKey: 'dashboard'
  //     }
  //   ]
  // },
  {
    key: 'settings',
    label: 'Configurações',
    isTitle: false,
    icon: 'ri-settings-4-line',
    url: paths.settings,
    isBottom: true,
    isInternal: false
  },
  {
    key: 'help',
    label: 'Opções de Ajuda',
    isTitle: false,
    icon: 'ri-question-line',
    url: paths.employee.list,
    isBottom: true,
    isInternal: false
  }
]

const SETTINGS_ITEMS: MenuItemTypes[] = [
  {
    key: 'empresa',
    label: 'Minha Empresa',
    isTitle: true
  },
  {
    key: 'departments',
    label: 'Departamentos',
    isTitle: false,
    icon: 'ri-home-4-line',
    url: paths.dashboard
  },
  {
    key: 'shifts',
    label: 'Turnos',
    isTitle: false,
    icon: 'ri-file-user-line',
    url: paths.account.profile
  },
  {
    key: 'security',
    label: 'Segurança',
    isTitle: false,
    icon: 'ri-alarm-line',
    url: paths.employee.list
  },
  {
    key: 'devices',
    label: 'Restrição de Disposisitivos',
    isTitle: false,
    icon: 'ri-message-3-line',
    url: paths.employee.list
  },
  {
    key: 'employee',
    label: 'Meus Colaboradores',
    isTitle: true
  },
  {
    key: 'positions',
    label: 'Cargos',
    isTitle: false,
    icon: 'ri-chat-3-line',
    url: paths.employee.list
  },
  {
    key: 'employees',
    label: 'Colaboradores',
    isTitle: false,
    icon: 'ri-fingerprint-line',
    url: paths.employee.list
  },
  {
    key: 'alocation',
    label: 'Alocação de Colaboradores',
    isTitle: false,
    icon: 'ri-numbers-line',
    url: paths.employee.list
  }
]

export { MENU_ITEMS, SETTINGS_ITEMS }
