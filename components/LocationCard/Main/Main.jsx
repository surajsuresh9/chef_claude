import '../Card/Card'
import './Main.css';
import data from '../../../data/data';
import Card from '../Card/Card';



const Main = () => {
    return (
        <>
            <ul>
                {data.map(d => {
                    return <li key={d.id}>
                        <Card location={d} />
                    </li>
                })}
            </ul>
        </>
    )
}

export default Main