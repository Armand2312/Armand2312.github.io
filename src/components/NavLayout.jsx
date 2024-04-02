import Header from "./Header";

export default function NavLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}