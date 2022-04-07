import {IHome} from "./home.interface";
import {FC} from "react";
import Layout from "../../layout/Layout";

const Home: FC<IHome> = () => {
    return (
        <Layout>
            <h1>Home page</h1>
        </Layout>
    )
}

export default Home