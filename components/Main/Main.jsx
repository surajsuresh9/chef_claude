import './Main.css'

const Main = () => {
    return (
        <main>
            <h1>Fun facts about React!</h1>
            <ul>
                <li><div className='blue_dot'><span> </span></div>Was first released in 2013</li>
                <li><div className='blue_dot'><span> </span></div>Was created by Jordan Walke</li>
                <li><div className='blue_dot'><span> </span></div>Has well over 200k stars on Github</li>
                <li><div className='blue_dot'><span> </span></div>Is maintained by Meta</li>
                <li><div className='blue_dot'><span> </span></div>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}

export default Main