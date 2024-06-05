import Accordion from "../../components/home/accordion/Accordion";
import Banner from "../../components/home/banner/Banner";
import Products from "../../components/home/products/Products";

export default function Home() {
    return (
        <div>
            <Banner />
            <Products />
            <Accordion />
            {/* <EnvCheck /> */}
        </div>
    )
}
