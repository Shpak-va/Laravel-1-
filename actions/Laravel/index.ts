import Cashier from './Cashier'
import Paddle from './Paddle'
import Dusk from './Dusk'
import Fortify from './Fortify'
import Passkeys from './Passkeys'
import Folio from './Folio'

const Laravel = {
    Cashier: Object.assign(Cashier, Cashier),
    Paddle: Object.assign(Paddle, Paddle),
    Dusk: Object.assign(Dusk, Dusk),
    Fortify: Object.assign(Fortify, Fortify),
    Passkeys: Object.assign(Passkeys, Passkeys),
    Folio: Object.assign(Folio, Folio),
}

export default Laravel