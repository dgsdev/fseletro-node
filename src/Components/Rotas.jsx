import { Switch, Route } from 'react-router-dom'
import Index from './../Pages/Index'
import Produtos from './../Pages/Produtos'
import Pedidos from './../Pages/Pedidos'
import Lojas from './../Pages/Lojas'
import Faleconosco from './../Pages/Faleconosco';


const Rotas = () => { 
    return (
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/Produtos" component={Produtos} />
            <Route path="/Pedidos" component={Pedidos} />
            <Route path="/Lojas" component={Lojas} />
            <Route path="/Faleconosco" component={Faleconosco} />
            <Route component={() => <div><h1>Algo deu errado! :(</h1></div>} />
        </Switch>
    );
};

export default Rotas;