import { Link } from 'react-router-dom'

// constants
import { MenuItemTypes } from '@/constants/menu'

interface MenuItemProps {
  item: MenuItemTypes
  className?: string
  linkClassName?: string
}

const MenuItem = ({ item, className, linkClassName }: MenuItemProps) => {
  return (
    <li className={`menu-item ${className}`}>
      <Link
        to={item.url!}
        target={item.target}
        className={`menu-link side-nav-link-ref ${linkClassName}`}
        data-menu-key={item.key}
      >
        {item.icon && (
          <span className='menu-icon'>
            <i className={item.icon} />
          </span>
        )}
        <span className='menu-text'> {item.label}</span>
        {item.badge && <span className={`badge ${item.badge.variant}`}>{item.badge.text}</span>}
      </Link>
    </li>
  )
}

const SettingsMenu = () => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      <ul className='menu' id='main-side-menu'>
        <li className='menu-title'>Minha Empresa</li>
        <MenuItem
          item={{ label: 'Departamentos', key: 'departments', icon: 'ri-u-disk-line' }}
          linkClassName='menu-link'
        />
        <MenuItem item={{ label: 'Turnos', key: 'shifts', icon: 'ri-timer-flash-line' }} linkClassName='menu-link' />
        <MenuItem
          item={{ label: 'Segurança', key: 'security', icon: 'ri-shield-keyhole-line' }}
          linkClassName='menu-link'
        />
        <MenuItem
          item={{ label: 'Restrição de Disposisitivos', key: 'devices', icon: 'ri-hard-drive-3-line' }}
          linkClassName='menu-link'
        />
        <li className='menu-title'>Meus Colaboradores</li>
        <MenuItem item={{ label: 'Cargos', key: 'positions', icon: 'ri-briefcase-5-line' }} linkClassName='menu-link' />
        <MenuItem
          item={{ label: 'Colaboradores', key: 'employees', icon: 'ri-account-pin-box-line' }}
          linkClassName='menu-link'
        />
        <MenuItem
          item={{ label: 'Alocação de Colaboradores', key: 'alocation', icon: 'ri-node-tree' }}
          linkClassName='menu-link'
        />
      </ul>
      <ul className='menu'>
        <li className='menu-title'>Controle de Ponto</li>
        <MenuItem
          item={{ label: 'Configuração do Controle de Ponto', key: 'check-config', icon: 'ri-briefcase-5-line' }}
          linkClassName='menu-link'
        />
        <MenuItem
          item={{ label: 'Escala de Trabalho', key: 'work-schedule', icon: 'ri-account-pin-box-line' }}
          linkClassName='menu-link'
        />
        <MenuItem
          item={{ label: 'Cercas Virtuais e Ponto de Referência', key: 'virtual', icon: 'ri-flow-chart' }}
          linkClassName='menu-link'
        />
        <MenuItem
          item={{ label: 'Motivos de Ajuste', key: 'adjustment', icon: 'ri-file-list-3-line' }}
          linkClassName='menu-link'
        />
        <MenuItem item={{ label: 'Feriados', key: 'holidays', icon: 'ri-calendar-2-line' }} linkClassName='menu-link' />
        <MenuItem
          item={{ label: 'Exceções de Jornada e atestados', key: 'exceptions', icon: 'ri-stethoscope-line' }}
          linkClassName='menu-link'
        />
        <li className='menu-title'>Integrações</li>
        <MenuItem
          item={{ label: 'Relógio de Ponto', key: 'clock', icon: 'ri-projector-2-line' }}
          linkClassName='menu-link'
        />
        <MenuItem
          item={{ label: 'Importar/Exportar AFD', key: 'import-export', icon: 'ri-file-transfer-line' }}
          linkClassName='menu-link'
        />
        <MenuItem
          item={{ label: 'Token da Conta', key: 'account-token', icon: 'ri-phone-lock-line' }}
          linkClassName='menu-link'
        />
      </ul>
    </div>
  )
}

export default SettingsMenu
