import Aside from "./Aside";
import "./../styles/main.scss";

export default function Layout({children}) {
    return (
        <>       
            <main className="main">
                <Aside/>
                <div className="main__content">
                    <div className="wrapper">
                        {children}
                    </div>
                </div>
            </main>
           
        </>
    )
}
