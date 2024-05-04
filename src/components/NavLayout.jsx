import Header from "./Header";
import MobileNav from "./MobileNav";

export default function NavLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <MobileNav />
        </>
    )
}